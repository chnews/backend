const multer = require('multer');
const adsModel = require('../models/adsModel');


const Storage = multer.diskStorage({
    destination:'uploads',
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

const upload = multer({
    storage:Storage
}).single('adsImage');


exports.adsImg = (req, res) => {
    upload(req, res , (err)=>{
        if(err){
            console.log(err);
        }else{
            const newImage = new adsModel({
                name: req.body.name,
                image:{
                    data:req.file.filename,
                    contentType:'image/png'
                }
            })
            newImage.save()
            .then(()=>res.send("Successfully uploaded"))
            .catch(err => console.log());
        }
    })
}


