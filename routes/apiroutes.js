const { getdata } = require('../controllers/datacontrollers');
const router = require('express').Router();

router.get('/', getdata);

module.exports = router;