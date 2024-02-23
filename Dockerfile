FROM python:3.8-slim
WORKDIR /app
COPY . /app
RUN pip install --no-cache-dir -r dependencies.txt
EXPOSE 80
ENV NAME World
CMD ["python", "calculator.py"]
