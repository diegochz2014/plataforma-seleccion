# Plataforma de Selección de Practicantes - Banco de Bogotá

Solución Web Full-Stack estructurada para la postulación de practicantes universitarios y la gestión interna por parte de analistas de selección.

## Características Técnicas
- **Front-End**: HTML5 semántico, CSS3 con diseño moderno y responsivo, JavaScript asíncrono (`Fetch API`).
- **Back-End**: Servidor REST estructurado en Node.js con Express.js.
- **Base de Datos**: Persistencia relacional local mediante SQLite3.
- **Manejo de Archivos**: Almacenamiento seguro de documentos PDF a través de Multer.

## Instrucciones de Instalación y Despliegue
1. Descargue o clone este repositorio en su entorno local.
2. Abre una terminal en la carpeta raíz del proyecto e instala las dependencias:
   ```bash
   npm install
   ```
3. Inicie los servicios del servidor ejecutando:
   ```bash
   node server.js
   ```

## Credenciales de Acceso al Sistema
Abra su navegador web e ingrese a las siguientes interfaces locales:
- **Módulo de Registro Público (Practicantes)**: `http://localhost:3000/index.html`
- **Módulo Privado de Gestión (Analistas)**: `http://localhost:3000/analista.html`
  - **Usuario**: `admin_seleccion`
  - **Contraseña**: `Analista2026`