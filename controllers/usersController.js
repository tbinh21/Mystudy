const User = require('../models/usersModel');
const bcrypt = require('bcrypt');

exports.createUser = async (req, res) => {
    const { username, email, password } = req.body;


    if (!username || !email || !password) {
        return res.status(400).json({ message: 'Username, email, and password are required' });
    }


    const hashedPassword = await bcrypt.hash(password, 10);


    User.create({ username, email, password: hashedPassword }, (err, result) => {
        if (err) return res.status(500).json({ message: 'Error creating user', error: err });
        res.status(201).json(result);
    });
};
exports.createUserWithoutPassword = (req, res) => {
    const user = req.body; 
    User.createUserWithoutPassword(user, (err, result) => {
        if (err) return res.status(500).json({ message: 'Error creating user without password', error: err });
        res.status(201).json(result);
    });
};

exports.getUsers = (req, res) => {
    User.getAll((err, result) => {
        if (err) return res.status(500).json({ message: 'Error retrieving users', error: err });
        res.json(result);
    });
};

exports.getUserById = (req, res) => {
    const id = req.params.id;
    User.getById(id, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Internal Server Error', error: err });
        }
        if (!result) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(result);
    });
};

exports.updateUser = (req, res) => {    
    const user = req.body; 
    User.update(user, (err, result) => {
        if (err) return res.status(500).json({ message: 'Error updating user', error: err });
        res.status(200).json(result);
    });
};

exports.deleteUser = (req, res) => {
    const id = req.params.id;
    User.delete(id, (err, result) => {
        if (err) return res.status(500).json({ message: 'Error deleting user', error: err });
        res.status(200).json(result);
    });
};