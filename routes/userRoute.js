const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

router.post('/users', usersController.createUser);
router.post('/users/without-password', usersController.createUserWithoutPassword);

router.get('/users', usersController.getUsers);

router.get('/users/:id', usersController.getUserById);

router.put('/users/:id', usersController.updateUser);

router.delete('/users/:id', usersController.deleteUser);

module.exports = router;