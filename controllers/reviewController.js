const Review = require('../models/reviewModel');

exports.createReview = (req, res) => {
    const review = req.body;

    Review.create(review, (err, result) => {
        if(err) return res.status(500).json(err);   
        res.status(200).json(result);
    });

};
// exports.getReviewbyId = (req, res) => {
//     const id = req.params.id;
//     Review.getById(id, (err, result) => {
//         if(err) return res.status(500).json(err);
//         res.json(result);
//     });
// };

exports.getReview = (req, res) => {
    Review.getAll((err, result) => {
        if(err) return res.status(500).json(err);
        res.json(result);
    });
};
exports.updateReview = (req, res) => {
    const review = req.body;
    Review.update(review, (err, result) => {
        if(err) return res.status(500).json(err);
        res.status(200).json(result);
    }); 
};
exports.deleteReview = (req, res) => {
    const id = req.params.id;
    Review.delete(id, (err, result) => {
        if(err) return res.status(500).json(err);
        res.status(200).json(result);
    });
};