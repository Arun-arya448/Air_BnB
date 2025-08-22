const Listing = require("../models/listing");
const Review = require("../models/review");

module.exports.createReview = async (req, res) => {
  const listing = await Listing.findById(req.params.id);

  // Create review from nested object
  const review = new Review({
    rating: req.body.review.rating,
    comment: req.body.review.comment,
    author: req.user._id
  });
  
  listing.reviews.push(review);

  await review.save();
  await listing.save();
  req.flash("success","New Review Created!");

  res.redirect(`/listings/${listing._id}`);
};


module.exports.destroyReview = async(req,res)=>{
  let {id,reviewId} = req.params;
  await Listing.findByIdAndUpdate(id,{$pull: {reviews : reviewId}});
  await Review.findByIdAndDelete(reviewId);
  req.flash("success","Review Deleted!");

  res.redirect(`/listings/${id}`);
};