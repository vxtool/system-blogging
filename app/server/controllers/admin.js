var mongoose   = require('mongoose');
var AdminModel = require('../models/admin');

module.exports.controller = function(app) {
  app.get('/admin', router);
};

function router (req, res) {
  var user = req.user;

  if(user){
    res.render('admin/index');
  } else {
    res.render('admin/login');
  }
}
