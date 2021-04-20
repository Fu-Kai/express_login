let express =  require('express');
let router = express.Router();
let User = require('./bean/user');
router.get('/',(req, res) => {
    res.render('register');
})
router.post('/', (req, res) => {
    let user = new User (req.body.name, req.body.pass);
    req.session.user = user;
    console.log(req.session.user);
    res.redirect('/login');
})
module.exports = router;