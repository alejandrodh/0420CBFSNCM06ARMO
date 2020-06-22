// ************ Require's ************
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

// ************ Controller Require ************
const registerController = require('../controllers/registerController');
const { dirname } = require('path');

// Multer config
let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve(__dirname, '../../public/images/avatar')) //Atentos con la ruta de guardado de archivos
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname))
    }
})

let upload = multer({ storage: storage })


router.get('/', registerController.create); 
router.post('/', upload.single('image'),registerController.store); 


module.exports = router;
