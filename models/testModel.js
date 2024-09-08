const db = require('../config/dbConfig');
const Test = {
    getAll: (callBack) => {
        const query = 'SELECT * FROM tests';
        db.query(query, callBack); 
    },

    getById: (id, callBack) => {
        const query = 'SELECT * FROM tests WHERE id = ?';
        db.query(query, [id], callBack);
    },

    create: (test, callBack) => {
        const query = 'INSERT INTO tests (title, description) VALUES (?, ?)';
        db.query(query, [test.title, test.description], callBack);
    },

    update: (test, callBack) => {
        const query = 'UPDATE tests SET title = ?, description = ? WHERE id = ?';
        db.query(query, [test.title, test.description, test.id], callBack);
    },

    delete: (id, callBack) => {
        const query = 'DELETE FROM tests WHERE id = ?';
        db.query(query, [id], callBack);
    }
};

module.exports = Test;