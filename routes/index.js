var express = require('express');
var router = express.Router();
const fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// post
router.post('/',function(req,res){
  // console.log(req);
  // res.send('ok')

  let buffers = [];
    let cnt = 0;

    req.on('data', (chunk) => {
        buffers.push(chunk);
        console.log(++cnt);
    });

    req.on('end', () => {
        console.log(`[done] Image upload`);
        req.rawBody = Buffer.concat(buffers);
        //書き込み
        fs.writeFile('./data/img.mp3', req.rawBody, 'utf-8',(err) => {
            if(err) return;
            console.log(`[done] Image save`);
        });
    });
    res.send('')
})

module.exports = router;
