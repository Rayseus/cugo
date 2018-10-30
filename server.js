const path = require('path');
const fs = require('fs');
const express = require('express');
const multer = require('multer');
const bodyPareser = require('body-parser');
const app = express();
const router = express.Router();

const DIR = './features_upload'

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + '.' + path.extname(file.originalname));
    }
});
let upload = multer({storage: storage});

app.use(bodyPareser.json());
app.use(bodyPareser.urlencoded({extended: true}));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get('/', function (req, res) {
    res.end('file catcher example');
});

app.post('/', upload.single('feature'), function (req, res) {
    if(!req.file){
        console.log("No file received");
        return res.send({
            success: false
        });
    }
    else{
        console.log('file received');
        return res.send({
            success: true
        })
    }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
    console.log('Server is running on port ' + PORT)
});