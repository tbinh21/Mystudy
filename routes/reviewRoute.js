const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');
router.post('/',reviewController.createReview);
// router.get('/',reviewController.getReviewbyId);
router.get('/',reviewController.getReview);
router.get('/:id',reviewController.updateReview);
router.put('/:id',reviewController.updateReview);
router.delete('/:id',reviewController.deleteReview);
module.exports = router