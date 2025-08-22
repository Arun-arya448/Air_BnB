// const cloudinary = require("cloudinary").v2;
// const { CloudinaryStorage } = require("multer-storage-cloudinary");
// // import {v2 as cloudinary} from 'cloudinary';

// // cloudinary.config({
// //   cloud_name: 'deuxk8kvf',
// //   api_key: '<your_api_key>',
// //   api_secret: '<your_api_secret>'
// // });

// cloudinary.config({
//   cloud_name: process.env.CLOUD_NAME,
//   api_key: process.env.CLOUD_API_KEY,
//   api_secret: process.env.CLOUD_API_SECRET,
// });

// const storage = new CloudinaryStorage({
//   cloudinary: cloudinary,
//   params: {
//     folder: "Wanderlust_dev",
//     allowed_formats: ["jpeg", "png", "jpg"],
//   },
// });

// module.exports = { cloudinary, storage };

// cloudConfig.js
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "Wanderlust_dev",
    allowed_formats: ["jpeg", "png", "jpg"],
  },
});

module.exports = { cloudinary, storage };



