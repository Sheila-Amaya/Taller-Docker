# 🛠️ Crear un Dockerfile desde cero

Un Dockerfile es un archivo de texto que contiene instrucciones para construir una imagen de Docker.

## Estructura del proyecto

```
app-node/
├── Dockerfile
├── package.json
└── index.js
```

## Contenido de index.js

```js
const http = require('http');
const server = http.createServer((req, res) => {
  res.end('Hola desde Node.js en Docker');
});
server.listen(3000);
```

## Contenido de package.json

```json
{
  "name": "app-node",
  "version": "1.0.0",
  "main": "index.js",
  "dependencies": {}
}
```
