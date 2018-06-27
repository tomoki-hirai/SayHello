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
    let dt = new Date();
    let year = dt.getFullYear();
    let month = dt.getMonth()+1;
    let date = dt.getDate();
    let doc = new Volume({
    "user":req.body.user,
    "volume":req.body.volume,
    "year":year,
    "month":month,
    "date":date,
    "created_at":dt});
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

router.get('/ranking', function(req, res, next) {
    let dt = new Date();
    let year = dt.getFullYear();
    let month = dt.getMonth()+1;
    let date = dt.getDate();
    Volume.find({})
    .find({year:year})
    .find({month:month})
    .find({date:date})
    .sort('-volume')
    .limit(3)
    .exec(function(err,result){
    console.log(result);
    res.send(result)
    });
});

module.exports = router;
