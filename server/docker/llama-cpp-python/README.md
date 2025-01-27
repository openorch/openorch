# Llama Cpp Python Docker images

This project includes code from [Llama Cpp Python](https://github.com/abetlen/llama-cpp-python),
licensed under the [MIT License](https://opensource.org/licenses/MIT).

## simple

The simple folder version used by OpenOrch by the image name `crufter/llama-cpp-python-simple`.

It is aimed to run on any platform.

## cuda

The cuda folder version is used by OpenOrch (see the `OPENORCH_GPU_PLATFORM` on the [Server envars page](https://openorch.org/docs/running-the-daemon/backend-environment-variables)) by the image name `crufter/llama-cpp-python-cuda`.

It is designed to run on multiple GPUs with CUDA support.
