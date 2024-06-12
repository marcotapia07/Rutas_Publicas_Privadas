const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const dbPath = path.join(__dirname, '..', 'data', 'db.json');

const auth = (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).send('No autorizado');
    }

    const [username, password] = Buffer.from(authorization.split(' ')[1], 'base64').toString().split(':');
    
    const users = JSON.parse(fs.readFileSync(dbPath, 'utf8')).users;
    const user = users.find(u => u.username === username);

    if (!user) {
        return res.status(401).send('No autorizado');
    }

    bcrypt.compare(password, user.password, (err, result) => {
        if (err || !result) {
            return res.status(401).send('No autorizado');
        }
        next();
    });
};

module.exports = auth;
