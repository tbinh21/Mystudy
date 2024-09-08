const Text = require('../models/testModel');

const getAllTests = () => {
    return new Promise((resolve, reject) => {
        Text.getAll((err, result) => {
            if(err) return reject(err);
            resolve(result);
        });
    });
};
const getTestById = (id) => {
    return new Promise((resolve, reject) => {
        Text.getById(id, (err, result) => {
            if(err) return reject(err);
            resolve(result);
        });
    });
};
const createTest = (test) => {
    return new Promise((resolve, reject) => {
        Text.create(test, (err, result) => {
            if(err) return reject(err);
            resolve(result);
        });
    });
};
const updateTest = (test) => {
    return new Promise((resolve, reject) => {
        Text.update(test, (err, result) => {
            if(err) return reject(err);
            resolve(result);
        });
    });
};
const deleteTest = (id) => {
    return new Promise((resolve, reject) => {
        Text.delete(id, (err, result) => {
            if(err) return reject(err);
            resolve(result);
        });
    });
};
module.exports = {
    getAllTests,
    getTestById,
    createTest,
    updateTest,
    deleteTest,
};