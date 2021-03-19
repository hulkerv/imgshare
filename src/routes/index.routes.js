const{Router}= require('express');
const router = Router();

const {home} = require('../controllers/index.controllers');

router.get('/', home);

module.exports = router;