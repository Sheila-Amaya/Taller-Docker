# Subir imagen a Docker Hub

1. Inicia sesión en Docker Hub:
```bash
docker login
```

2. Etiqueta la imagen:
```bash
docker tag app-node usuario/app-node:v1
```

3. Sube la imagen:
```bash
docker push usuario/app-node:v1
```
