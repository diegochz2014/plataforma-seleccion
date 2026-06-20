# Plataforma de Selección de Practicantes

## Instrucciones de Instalación
1. Descargue el proyecto.
2. Ejecute `npm install` en la terminal para instalar las dependencias necesarias.
3. Inicie el servidor con el comando `node server.js`.
4. Acceda a la aplicación desde su navegador:
   - Formulario de Registro: `http://localhost:3000/index.html`
   # Plataforma de Selección de Practicantes

Solución Web Full-Stack estructurada para la postulación de practicantes universitarios y la gestión interna por parte de analistas de selección.

## Características Técnicas
- **Front-End**: HTML5 semántico, CSS3 con diseño responsivo basado en variables modernas de color, JavaScript asíncrono (`Fetch API`).
- **Back-End**: Servidor REST robusto con Node.js y Express.js.
- **Base de Datos**: Persistencia relacional local mediante SQLite3.
- **Manejo de Archivos**: Almacenamiento seguro de documentos PDF a través de Multer.

## Instrucciones de Instalación y Despliegue
1. Descargue o clone este repositorio en su entorno local.
2. Abra una terminal en la carpeta raíz e instale los módulos de Node necesarios:
   ```bash
   npm install
   ```
3. Inicie los servicios del servidor ejecutando:
   ```bash
   node server.js
   ```

## Credenciales de Acceso al Sistema
Abra su navegador web e ingrese a las siguientes interfaces:
- **Módulo de Registro Público**: `http://localhost:3000/index.html`
- **Módulo Privado de Gestión (Analistas)**: `http://localhost:3000/analista.html`
  - **Usuario**: `admin_seleccion`
  - **Contraseña**: `Analista2026`- Panel de Analistas: `http://localhost:3000/analista.html` (Contraseña: Analista2026)