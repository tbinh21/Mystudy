const express = require('express');
const router = express.Router();
const testController = require('../controllers/testController');

router.post('/', testController.createTest);
router.get('/', testController.getTest);
router.put('/:id', testController.updateTest);
// router.delete('/tests/:id', testController.deleteUser);


module.exports = router;