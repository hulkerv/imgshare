const Image = require('../models/Image');
const imgCtrl ={};

// View Image
imgCtrl.imageIndex= (req,res) => {
    res.send('Image Index');
};

// New Image
imgCtrl.newImage = async(req,res) => {
    const newImage = new Image();
    newImage.title = req.body.title;
    newImage.description = req.body.description;
    newImage.filename = req.file.filename;
    newImage.path ='/uploads/temp/' + req.file.filename;
    newImage.originalname = req.file.originalname;
    newImage.mimetype = req.file.mimetype;
    newImage.size = req.file.size;
    await newImage.save();
    res.redirect('/')  
};

// Likes
imgCtrl.like = (req,res) => {
    res.send('like');
};

// Comments
imgCtrl.comment= (req,res) => {
    res.send(comment);  
};

//Delete Image
imgCtrl.deleteImage = (req,res) => {
    res.send('deleted');  
};

module.exports = imgCtrl;