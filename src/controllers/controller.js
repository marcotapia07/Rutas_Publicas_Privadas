const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const dbPath = path.join(__dirname, '..', 'data', 'db.json');

const registerUser = (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).send('Username y password son requeridos');
    }

    const users = JSON.parse(fs.readFileSync(dbPath, 'utf8')).users;

    const existingUser = users.find(u => u.username === username);
    if (existingUser) {
        return res.status(400).send('Usuario ya existe');
    }

    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = { id: uuid.v4(), username, password: hashedPassword };

    users.push(newUser);
    fs.writeFileSync(dbPath, JSON.stringify({ users }, null, 2));

    res.status(201).send('Usuario registrado');
};

module.exports = { registerUser };
