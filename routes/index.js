var user=require('../user/usercontroller');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/empadd', user.empadd);
router.get('/empview', user.empview);
router.get('/empup/:id', user.empup);
router.get('/empdel/:id', user.empdel);
router.get('/taskadd', user.taskadd);
router.get('/taskview', user.taskview);
router.get('/taskup/:id', user.taskup);
router.get('/taskdel/:id', user.taskdel);
router.get('/emplogin', user.emplogin);
router.get('/emplogout', user.emplogout);
module.exports = router;
