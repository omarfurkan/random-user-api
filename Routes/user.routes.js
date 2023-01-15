const express = require('express');
const userController = require('../Controllers/user.controller')


const router = express.Router();

router
    .route('/all')
    .get(userController.getAllUser)

router
    .route('/random')
    .get(userController.getRandomUser)

module.exports = router;

