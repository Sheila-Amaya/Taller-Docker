# 📖 Dockerfile

```Dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 3000
CMD ["node", "index.js"]
```

| Instrucción | Descripción |
|-------------|-------------|
| `FROM`      | Imagen base oficial de Node.js sobre Alpine Linux |
| `WORKDIR`   | Establece `/app` como directorio de trabajo |
| `COPY`      | Copia los archivos del proyecto al contenedor |
| `RUN`       | Instala dependencias usando npm |
| `EXPOSE`    | Expone el puerto 3000 |
| `CMD`       | Comando por defecto al ejecutar el contenedor |
