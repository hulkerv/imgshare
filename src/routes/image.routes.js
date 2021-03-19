const{Router}= require('express');
const router = Router();

const {imageIndex, 
       newImage, 
       like, 
       comment, 
       deleteImage} = require('../controllers/image.controllers');

// View Image
router.get('/images/:image_id', imageIndex);

// New Image
router.post('/images/new_image', newImage)

// Likes
router.post('/images/:image_id/like', like);

// Comments
router.post('/images/:image_id/comment', comment)

// Delete Image 
router.delete('/images/:image_id', deleteImage);

module.exports = router;