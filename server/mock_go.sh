#!/bin/bash

set -e

if ! command -v mockgen &> /dev/null; then
    echo "mockgen could not be found, installing..."
    go install github.com/golang/mock/mockgen@latest
fi

# Find all interface.go files
find . ../sdk/go ../clients/go \( -name '*interface.go' -o -name 'api*svc.go' \) ! -name '*mock*' | while read file; do
    # Get the directory of the file
    dir=$(dirname "${file}")

    # Extract the package name from the source file
    pkg=$(grep -E '^package ' "${file}" | awk '{print $2}')

    # Define the output file for the mock
    output="${dir}/mock_$(basename "$file")"

    # Generate the mock with the correct package name
    mockgen -source="${file}" -destination="${output}" -package="${pkg}"

    echo "Mock generated for ${file} in ${output} with package ${pkg}"
done
