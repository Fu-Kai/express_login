let express = require('express');
let router = express.Router();

router.get('/login',(req, res) => {
    res.render('login');
})
router.post('/login',(req, res) => {
    let name = req.body.name;
    let pass = req.body.pass;
    if(req.session.user == undefined) {
        res.send(name+" is unregistered!");
    }
    if(req.session.user != undefined && name == req.session.user.name && pass == req.session.user.pass) {
        res.send(name+' Signed in.');
    }
    else{
        res.send('Login Failed！！');
    }
})
module.exports = router;