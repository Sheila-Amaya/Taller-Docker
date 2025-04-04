Este bloque cubre los comandos esenciales para trabajar con contenedores en Docker.  
Incluye ejemplos prácticos y espacio para pruebas reales.

## Contenido:
- Instalación y diferencias según sistema operativo
- Comandos básicos (`pull`, `run`, `ps`, `stop`, `rm`)
- Ejecutar un contenedor real (Nginx)
- Buenas prácticas: ejecución interactiva vs background
- Volúmenes y redes

👉 Puedes seguir los pasos en `comandos-basicos.md` y hacer pruebas con los archivos en `primer-contenedor/`


---

## 🪟 Instalación de Docker en Windows (con WSL 2)

### 1. Descargar Docker Desktop
Ve a la página oficial y descarga Docker Desktop para Windows:  
👉 https://www.docker.com/products/docker-desktop

### 2. Requisitos previos

Docker Desktop requiere que tengas **WSL 2** habilitado. Esto es un subsistema que permite correr Linux dentro de Windows.

#### Habilitar WSL 2 (solo una vez)
Abre PowerShell como administrador y ejecuta:

```powershell
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
```

Luego descarga el actualizador de kernel de WSL 2:  
👉 https://aka.ms/wsl2kernel

Y ejecuta:
```powershell
wsl --set-default-version 2
```

Reinicia tu máquina si es necesario.

---

## 💡 ¿Qué es WSL 2?

WSL 2 significa **Windows Subsystem for Linux versión 2**.  
Es una tecnología que te permite correr un sistema Linux completo dentro de Windows.

### ¿Por qué es importante?

- Docker usa internamente Linux.
- WSL 2 permite a Docker correr sus contenedores como si estuviera en Linux, ¡pero dentro de Windows!
- Es más rápido y liviano que una máquina virtual.

Puedes verificar si lo tienes con:

```bash
wsl --list --verbose
```

---

## 3. Verificar instalación de Docker

Después de instalar Docker Desktop, abre PowerShell o CMD y corre:

```bash
docker --version
docker info
```

Si ves información, Docker está listo para usarse.