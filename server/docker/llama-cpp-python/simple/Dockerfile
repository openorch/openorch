FROM python:3-slim-bullseye

# Environment variables
ENV HOST=0.0.0.0

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
    add-apt-repository contrib && \
    apt-get update && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Upgrade pip and install Python dependencies
RUN python -m pip install --upgrade pip pytest cmake scikit-build setuptools \
    uvicorn starlette fastapi sqlalchemy sse_starlette starlette_context pydantic_settings

RUN FORCE_CMAKE=1 \
    pip install jupyterlab llama_cpp_python --no-cache-dir --force-reinstall --upgrade

# Set the work directory
WORKDIR /workspace

# Run the server
# without --n_gpu_layers GPU wont be utilized
CMD ["python3", "-m", "llama_cpp.server", "--host", "0.0.0.0", "--n_gpu_layers", "35"]
