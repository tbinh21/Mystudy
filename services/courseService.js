const Course = require('../models/courseModel');

const getAllCourses = () => {
    return new Promise((resolve, reject) => {
        Course.getAll((err, result) => {
            if(err) return reject(err);
            resolve(result);
        });
    });
};
const getCourseById = (id) => {
    return new Promise((resolve, reject) => {
        Course.getById(id, (err, result) => {
            if(err) return reject(err);
            resolve(result);
        });
    });
};
const createCourse = (course) => {
    return new Promise((resolve, reject) => {
        Course.create(course, (err, result) => {
            if(err) return reject(err);
            resolve(result);
        });
    });
};
const updateCourse = (course) => {
    return new Promise((resolve, reject) => {
        Course.update(course, (err, result) => {
            if(err) return reject(err);
            resolve(result);
        });
    });
};
const deleteCourse = (id) => {
    return new Promise((resolve, reject) => {
        Course.delete(id, (err, result) => {
            if(err) return reject(err);
            resolve(result);
        });
    });
};
module.exports = {
    getAllCourses,  
    getCourseById,
    createCourse,
    updateCourse,
    deleteCourse,
};