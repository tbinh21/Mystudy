
const db = require('../config/dbConfig'); 

const Review = {
    create: (test, callBack) => {
        const query = 'INSERT INTO reviews (title, description) VALUES (?, ?)';
        db.query(query, [test.title, test.description], callBack);
    },

    getAll: (callBack) => {
        const query = 'SELECT * FROM reviews';
        db.query(query, callBack);
    },

    // getReviewbyId: (id, callBack) => {
    //     const query = 'SELECT * FROM reviews WHERE id = ?';
    //     db.query(query, [id], callBack);
    // },

    update: (test, callBack) => {
        const query = 'UPDATE reviews SET title = ?, description = ? WHERE id = ?';
        db.query(query, [test.title, test.description, test.id], callBack);
    },

    delete: (id, callBack) => {
        const query = 'DELETE FROM reviews WHERE id = ?';
        db.query(query, [id], callBack);
    },
};

module.exports = Review;