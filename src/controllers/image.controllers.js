const Image = require('../models/Image');
const path = require('path');
const imgCtrl ={};

// View Image
imgCtrl.imageIndex= async (req,res) => {
    const image = await Image.findOne({_id:req.params.image_id});
    console.log(image);
    res.render('image', {image});
};

// New Image
imgCtrl.newImage = async(req,res) => {

    const newImage = new Image();
    const ext = path.extname(req.file.filename);
    console.log(typeof ext);
    if(ext === '.jpg' || ext === '.jpeg' || ext === '.png' || ext === '.gif'){
        newImage.title = req.body.title;
        newImage.description = req.body.description;
        newImage.filename = req.file.filename;
        newImage.path ='/uploads/' + req.file.filename;
        newImage.originalname = req.file.originalname;
        newImage.mimetype = req.file.mimetype;
        newImage.size = req.file.size;
        await newImage.save();
        req.flash('success_msg','Image saved successfully');
        res.redirect('/') 
    }else{
        req.flash('error_msg', 'The file type is not allowed');
        res.redirect('/') 
    };
    
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