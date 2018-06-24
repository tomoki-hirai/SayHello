const express = require('express');
const router = express.Router();
const fs = require('fs');
const bodyParser = require('body-parser');

const model = require('./model');
const Volume = model.Volume;

router.use(bodyParser.urlencoded({
    extended: true
}));
router.use(bodyParser.json());

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// post
router.post('/',function(req,res){
    console.log(req.body)
    console.log(req.body.name)
    let doc = new Volume({"user":req.body.user,"volume":req.body.volume});
    // ドキュメントの保存
    doc.save(function(err) {
        if(err) {
            console.log(err);
          } else {
            console.log(req.body);
          }
    });
    res.send('')
})

module.exports = router;
