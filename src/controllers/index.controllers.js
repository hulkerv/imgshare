const indexCtrl = {};

indexCtrl.home = (req,res) => {
  res.render('index');  
};

module.exports = indexCtrl;