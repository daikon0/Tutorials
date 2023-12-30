# Use the official Python 3.11 image as the base image
FROM python:3.11-buster

ENV PYTHONUNBUFFERED=1

# Set the working directory inside the container
WORKDIR /src

# Install Poetry
RUN pip install poetry

# Copy the poetry.lock and pyproject.toml files to the working directory
COPY poetry.lock* pyproject.toml* ./

RUN poetry config virtualenvs.in-project true

RUN if [-f pyproject.toml]; then poetry install --no-root; fi

# Set the entrypoint command to run the application
CMD ["poetry", "run", "uvicorn", "api.main:app", "--host", "0.0.0.0", "--reload"]