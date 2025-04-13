# Use Python 3.10 slim base
FROM python:3.10-slim

# Set work directory
WORKDIR /app

# Install dependencies
COPY requirements.txt .
RUN pip install --upgrade pip && pip install -r requirements.txt

# Copy the whole project
COPY . .

# Expose port 8000
EXPOSE 8000

# Run the app
CMD ["python", "app.py"]
