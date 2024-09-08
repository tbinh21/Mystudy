
const Test = require('../models/testModel');

exports.createTest = (req, res) => {
    const test = req.body;

    Test.create(test, (err, result) => {
        if (err) return res.status(500).json(err);
        res.status(201).json(result); 
    }); 
};

exports.getTest = (req, res) => {
    Test.getAll((err, result) => {
        if (err) return res.status(500).json(err);
        res.status(200).json(result);
    });
};

exports.updateTest = (req, res) => {
    const test = req.body;
    Test.update(test, (err, result) => {
        if (err) return res.status(500).json(err);
        res.status(200).json(result);
    });
};

exports.deleteTest = (req, res) => {
    const id = req.params.id;
    Test.delete(id, (err, result) => {
        if (err) return res.status(500).json(err);
        res.status(200).json(result);
    });
};