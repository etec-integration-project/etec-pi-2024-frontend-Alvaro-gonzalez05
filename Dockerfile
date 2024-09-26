
# Utiliza una imagen base oficial de Node.js
FROM node:16-alpine

# Establece el directorio de trabajo en la imagen
WORKDIR /app

# Copia los archivos package.json y package-lock.json
COPY package*.json ./

# Ejecuta los comandos para instalar dependencias
RUN npm install
RUN npm install react-awesome-reveal @emotion/react

# Copia el resto del código de la aplicación al contenedor
COPY . .

# Expone el puerto en el que la aplicación correrá
EXPOSE 3001

# Comando para ejecutar la aplicación
CMD ["npm", "start"]
