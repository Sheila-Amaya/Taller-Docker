# 🚀 Contenedores extra

## Contenedor de MongoDB
```bash
docker run -d -p 27017:27017 --name mongo mongo
```

## Contenedor de Redis
```bash
docker run -d -p 6379:6379 --name redis redis
```

## Python interactivo
```bash
docker run -it --rm python
```

## Múltiples instancias de Nginx
```bash
docker run -d -p 8081:80 nginx
docker run -d -p 8082:80 nginx
```


