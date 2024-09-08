const User  = require('../models/usersModel');
const getAllUsers = () => {
    return new Promise((resolve, reject) => {
        User.getAll((err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
};
const getUserById = (id) => {
    return new Promise((resolve, reject) => {
        User.getById(id, (err, results) => {    
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
};
const createUser = (user) => {
    return new Promise((resolve, reject) => {
        User.create(user, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
};
const updateUser = (user) => {
    return new Promise((resolve, reject) => {
        User.update(user, (err, result) => {
            if (err) {  
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
};
const deleteUser = (id) => {
    return new Promise((resolve, reject) => {
        User.delete(id, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    }); 
};
module.exports = { getAllUsers, getUserById, createUser, updateUser, deleteUser };