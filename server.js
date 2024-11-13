// Importar módulos
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');

// Configuración de la aplicación
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Conexión a la base de datos MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345',
    database: 'registroUsuarios'
});

db.connect(err => {
    if (err) throw err;
    console.log('Conectado a MySQL');
});

// Endpoint para el registro de usuarios
app.post('/api/register', async (req, res) => {
    const { nombre, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const query = 'INSERT INTO usuarios (nombre, email, password) VALUES (?, ?, ?)';
    db.query(query, [nombre, email, hashedPassword], (err, result) => {
        if (err) return res.status(500).send(err);
        res.status(201).send({ message: 'Usuario registrado' });
    });
});

// Iniciar servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
