const { Router } = require('express');
const router = Router();
const pController = require('../controllers/producto.controller');

router.get('/',pController.get_productos);

module.exports = router;