const db = require('../config/dbConfig'); 

const Course = {
    create : (course, callBack) => {
        const query = 'INSERT INTO courses (title , decription,duration) VALUES (?,?,?,?)';
        db.query(query, [course.title, course.decription, course.duration], callBack);

},

getAll : (callBack) => {
    const query = 'SELECT * FROM courses';
    db.query(query, callBack);

},
getbyId : (id, callBack) => {
    const query = 'SELECT * FROM courses WHERE id = ?';
    db.query(query, [id], callBack);
},
update : (course, callBack) => {
    const query = 'UPDATE courses SET title = ?, decription = ?, duration = ? WHERE id = ?';
    db.query(query, [course.title, course.decription, course.duration, course.id], callBack);
},
delete : (id, callBack) => {
    const query = 'DELETE FROM courses WHERE id = ?';
    db.query(query, [id], callBack);
},
}
module.exports = Course
