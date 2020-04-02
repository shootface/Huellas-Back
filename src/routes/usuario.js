const { Router } = require('express');
const router = Router();
const uController = require('../controllers/usuario.controller');

router.post('/',uController.crear_usuario);

module.exports = router;