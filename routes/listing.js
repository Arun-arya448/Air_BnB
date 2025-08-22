const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const Listing = require("../models/listing.js");
const{isloggedIn,isOwner} = require("../middleware.js");

const listingController = require("../controllers/listings.js");
const multer  = require('multer')
const {storage} = require("../cloudConfig.js");
const upload = multer({  storage: storage  })



//index + create
// router.route("/")
//     .get(wrapAsync(listingController.index))
//     .post(isloggedIn,upload.single('listing[image]'), wrapAsync(listingController.createListing));
     

router.route("/")
  .get(wrapAsync(listingController.index))
  .post(
    isloggedIn,
    upload.single("listing[image]"),
    wrapAsync(listingController.createListing)
);




//New Route
router.get("/new",isloggedIn,listingController.renderNewForm);

//Show,update,delete
router.route("/:id")
    .get(wrapAsync(listingController.showListing))
    .put(isloggedIn,isOwner,upload.single("listing[image]"), wrapAsync(listingController.updateListing))
    .delete(isloggedIn,isOwner, wrapAsync(listingController.destroyListing)
);

//Edit Route
router.get("/:id/edit",isloggedIn,isOwner, wrapAsync(listingController.renderEditForm));




module.exports = router;