const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));

// Asegurar que la carpeta para guardar los PDFs exista
if (!fs.existsSync('./uploads')){
    fs.mkdirSync('./uploads');
}
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Conectar o crear la base de datos local
const db = new sqlite3.Database('./candidatos.db', (err) => {
    if (err) console.error('Error:', err.message);
});

// Crear tabla de los candidatos
db.run(`CREATE TABLE IF NOT EXISTS practicantes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL,
    email TEXT NOT NULL,
    carrera TEXT NOT NULL,
    semestre INTEGER NOT NULL,
    hv_ruta TEXT NOT NULL,
    estado TEXT DEFAULT 'Pendiente'
)`);

// Configurar almacenamiento de PDFs
const storage = multer.diskStorage({
    destination: (req, file, cb) => { cb(null, 'uploads/'); },
    filename: (req, file, cb) => { cb(null, Date.now() + '-' + file.originalname); }
});
const upload = multer({ storage: storage });

// Ruta para registrar postulante
app.post('/api/practicantes', upload.single('hojaDeVida'), (req, res) => {
    const { nombre, email, carrera, semestre } = req.body;
    if (!nombre || !email || !carrera || !semestre || !req.file) {
        return res.status(400).json({ error: 'Campos incompletos.' });
    }
    const query = `INSERT INTO practicantes (nombre, email, carrera, semestre, hv_ruta) VALUES (?, ?, ?, ?, ?)`;
    db.run(query, [nombre, email, carrera, semestre, req.file.filename], function(err) {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: 'Éxito' });
    });
});

// Ruta para obtener la lista en el panel
app.get('/api/practicantes', (req, res) => {
    db.all(`SELECT * FROM practicantes`, [], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});

// Ruta para actualizar estado (Viable / No viable)
app.put('/api/practicantes/:id', (req, res) => {
    const { id } = req.params;
    const { estado } = req.body;
    db.run(`UPDATE practicantes SET estado = ? WHERE id = ?`, [estado, id], function(err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Actualizado' });
    });
});

app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));