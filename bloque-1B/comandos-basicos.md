# Comandos básicos en Docker

## Descargar imagen ligera
```bash
docker pull alpine
```

## Ejecutar contenedor efímero
```bash
docker run alpine echo "Hola desde Alpine"
```

## Acceder a un contenedor con shell (modo interactivo)
```bash
docker run -it ubuntu bash
```

## Ver contenedores activos
```bash
docker ps
```

## Ver todos los contenedores (incluyendo los detenidos)
```bash
docker ps -a
```

## Detener un contenedor
```bash
docker stop <id>
```

## Eliminar un contenedor
```bash
docker rm <id>
```
