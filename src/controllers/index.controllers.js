const Image = require(('../models/Image'))
const indexCtrl = {};

indexCtrl.home = async (req,res) => {
    const images  =  await Image.find().sort({created_at: -1});
    res.render('index', {images});
};

module.exports = indexCtrl;