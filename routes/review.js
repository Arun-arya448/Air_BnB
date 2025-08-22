const express = require("express");
const router = express.Router({mergeParams : true});

const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const{isloggedIn,isOwner,isReviewAuthor} = require("../middleware.js");
const reviewController = require("../controllers/reviews.js");

//Post Review Route;
router.post("/",isloggedIn, wrapAsync(reviewController.createReview));

//Delete Reviews Route
router.delete("/:reviewId",isloggedIn,isReviewAuthor,wrapAsync(reviewController.destroyReview));

module.exports = router;
