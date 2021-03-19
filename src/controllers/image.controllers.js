const imgCtrl ={};

// View Image
imgCtrl.imageIndex= (req,res) => {
    res.send('Image Index');
};

// New Image
imgCtrl.newImage = (req,res) => {
    res.send('Uploaded');   
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