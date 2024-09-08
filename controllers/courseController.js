const Course = require('../models/courseModel');

exports.createCourse = (req, res) => {  
    const course = req.body;
    Course.create(course, (err, result) => {
        if (err) return res.status(500).json(err);
        res.status(201).json(result);
    });
};

exports.getCourses = (req, res) => {
    Course.getAll((err, result) => { 
        if (err) return res.status(500).json(err);
        res.json(result);
    });
};

exports.getCourse = (req, res) => {
    const id = req.params.id;
    Course.getById(id, (err, result) => {  
        if (err) return res.status(500).json(err);
        res.json(result);
    });
};

exports.updateCourse = (req, res) => {
    const course = req.body;
    Course.update(course, (err, result) => {
        if (err) return res.status(500).json(err);
        res.status(200).json(result);
    });
};

exports.deleteCourse = (req, res) => {
    const id = req.params.id;
    Course.delete(id, (err, result) => {    
        if (err) return res.status(500).json(err);
        res.status(200).json(result);
    }); 
};