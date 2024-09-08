const db = require('../config/dbConfig');

const User = {
    create: (user, callBack) => {
        const query = 'INSERT INTO users (id,username, email, password) VALUES (?,?, ?, ?)';
        db.query(query, [user.id,user.username, user.email, user.password], callBack);
    },

    getAll: (callBack) => {
        const query = 'SELECT * FROM users';
        db.query(query, callBack);
    },

    getById: (id, callBack) => {
        const query = 'SELECT * FROM users WHERE id = ?';
        db.query(query, [id], callBack);
    },

    update: (user, callBack) => {
        const query = 'UPDATE users SET username = ?, email = ?, password = ? WHERE id = ?';
        db.query(query, [user.username, user.email, user.password, user.id], callBack);
    },

    delete: (id, callBack) => {
        const query = 'DELETE FROM users WHERE id = ?';
        db.query(query, [id], callBack);
    },
};

module.exports = User;