# Используем официальный образ Node.js в качестве базового
FROM node:16-alpine

# Создаем рабочую директорию
WORKDIR /app

# Копируем файлы package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем остальные файлы приложения
COPY . .

# Компилируем TypeScript в JavaScript (если используется TypeScript)
RUN npm run build

# Открываем порт 3000 для доступа к приложению
EXPOSE 3000

# Запускаем приложение
CMD ["npm", "run", "start:prod"]
