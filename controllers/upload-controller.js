
const multer  = require('multer');
const fileUpload= require('../middleware/upload-middleware');
const Recipe = require('../models/recipe');


module.exports={
    fileUploadForm:function(req,res){
        res.render('upload-form');
     },
     uploadFile:function(req,res){
        var upload = multer({
                    storage: fileUpload.files.storage(), 
                    allowedFile:fileUpload.files.allowedFile 
                    }).single('file');
        upload(req, res, function (err) {
           if (err instanceof multer.MulterError) {
              res.send(err);
           } else if (err) {
              res.send(err);
           }else{
              res.render('upload-form');
           }
           
        })
        
     }
}