const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');  

router.post('/', courseController.createCourse);  
router.get('/', courseController.getCourses);
router.get('/:id', courseController.getCourse);
router.put('/:id', courseController.updateCourse);
router.delete('/:id', courseController.deleteCourse);

module.exports = router;