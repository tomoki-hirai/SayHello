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

router.get('/ranking', function(req, res, next) {
    // Volume.find({},{sort:{volume: 1},limit:3}, function(err, result) {
    //     if (err) throw err;
    //     console.log(result);
    //     res.send(result)
    //   });
      Volume.find({})
      .sort('-volume')
      .limit(3)
      .exec(function(err,result){
        // let ranking = [
        //     { first: result[0].user, second: result[1].user ,third:result[2].user}
        //   ];
        
          // Since the request is for a JSON representation of the people, we
          //  should JSON serialize them. The built-in JSON.stringify() function
          //  does that.
        // var rankingJSON = JSON.stringify(ranking);
        console.log(result);
        res.send(result)
      });
});

module.exports = router;
