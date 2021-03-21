const Image = require(('../models/Image'))
const indexCtrl = {};

indexCtrl.home = async (req,res) => {
    const images  =  await Image.find().sort({timestamp: -1});
    res.render('index', {images});
};

module.exports = indexCtrl;