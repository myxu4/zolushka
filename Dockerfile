# Используем базовый образ Python
FROM python:3.8-slim

# Устанавливаем зависимости
RUN pip install fastapi[all] uvicorn sqlalchemy

# Создаем и переходим в директорию приложения
WORKDIR /app

# Копируем файлы приложения в контейнер
COPY main.py /app/main.py

# Копируем файлы базы данных в контейнер
COPY test.db /app/test.db

# Открываем порт, на котором будет работать FastAPI приложение
EXPOSE 8000

# Запускаем FastAPI приложение при старте контейнера
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]