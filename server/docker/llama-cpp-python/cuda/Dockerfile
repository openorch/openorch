FROM python:3-slim-bullseye

# Environment variables
ENV HOST=0.0.0.0 \
    CUDA_HOME=/usr/local/cuda \
    CUDACXX=/usr/local/cuda/bin/nvcc \
    PATH="${PATH}:/usr/local/cuda/bin"
# LD_LIBRARY_PATH="${LD_LIBRARY_PATH}:/usr/local/cuda/lib64" \
# LLAMA_CPP_LIB=/usr/local/lib/python3.12/site-packages/llama_cpp/libllama.so \
# ??
# LD_LIBRARY_PATH="${LD_LIBRARY_PATH}:/usr/local/nvidia/lib:/usr/local/nvidia/lib64"

# Install system dependencies and CUDA
RUN --mount=target=/var/lib/apt/lists,type=cache,sharing=locked \
    --mount=target=/var/cache/apt,type=cache,sharing=locked \
    rm -f /etc/apt/apt.conf.d/docker-clean \
    && apt-get update && apt-get install -y --no-install-recommends \
    libopenblas-dev \
    ninja-build \
    build-essential \
    pkg-config \
    wget \
    software-properties-common && \
    wget https://developer.download.nvidia.com/compute/cuda/repos/debian11/x86_64/cuda-keyring_1.1-1_all.deb && \
    dpkg -i cuda-keyring_1.1-1_all.deb && \
    add-apt-repository contrib && \
    apt-get update && \
    apt-get -y install cuda-toolkit-12-3 && \
    rm cuda-keyring_1.1-1_all.deb && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Upgrade pip and install Python dependencies
RUN python -m pip install --upgrade pip pytest cmake scikit-build setuptools \
    uvicorn starlette fastapi sqlalchemy sse_starlette starlette_context pydantic_settings

# Install llama_cpp_python with CUDA support
RUN CMAKE_ARGS="-DLLAMA_CUBLAS=on -DCMAKE_CUDA_ARCHITECTURES=all-major" FORCE_CMAKE=1 \
    pip install jupyterlab llama_cpp_python --no-cache-dir --force-reinstall --upgrade

# Set the work directory
WORKDIR /workspace

# Run the server
# without --n_gpu_layers GPU wont be utilized
CMD ["python3", "-m", "llama_cpp.server", "--host", "0.0.0.0", "--n_gpu_layers", "35"]
