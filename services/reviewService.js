
const Review = require('../models/reviewModel');  

const createReview = (reviewData) => {
    return new Promise((resolve, reject) => {
        Review.create(reviewData, (err, result) => {
            if (err) {
                return reject(err);
            }
            resolve(result);
        });
    });
};

const getAllReviews = () => {
    return new Promise((resolve, reject) => {
        Review.getAll((err, results) => {
            if (err) {
                return reject(err);
            }
            resolve(results);
        });
    });
};
const getReviewbyId = (id) => {
    return new Promise((resolve, reject) => {
        Review.getById(id, (err, result) => {
            if (err) {
                return reject(err);
            }
            resolve(result);
        });
    });
};

const getReviewById = (id) => {
    return new Promise((resolve, reject) => {
        Review.getbyId(id, (err, result) => {
            if (err) {
                return reject(err);
            }
            resolve(result);
        });
    });
};

const updateReview = (reviewData) => {
    return new Promise((resolve, reject) => {
        Review.update(reviewData, (err, result) => {
            if (err) {
                return reject(err);
            }
            resolve(result);
        });
    });
};

const deleteReview = (id) => {
    return new Promise((resolve, reject) => {
        Review.delete(id, (err, result) => {
            if (err) {
                return reject(err);
            }
            resolve(result);
        });
    });
};

module.exports = {
    createReview,
    getAllReviews,
    getReviewById,
    updateReview,
    deleteReview,
    getReviewbyId,
};