let express =  require('express');
let fs = require('fs');

let router = express.Router();
let User = require('./bean/user');

router.get('/',(req, res) => {
    res.render('register');
})
router.post('/', (req, res) => {
    req.session.user = new User(req.body.name, req.body.pass);
    console.log(req.session.user);
    res.redirect('/login');
})
module.exports = router;