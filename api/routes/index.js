var express = require('express');
var router = express.Router();

router.post('/', function (req, res, next) {
    let responseBack = '';
    if (req.body.message === ' ') {
        responseBack = "Error occurred";
    } else {
        responseBack = req.body.message;
    }
    setTimeout(() => {
        res.status(200).json({message: responseBack});
    }, 2000);

});

module.exports = router;
