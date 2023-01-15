const express = require('express');
const userController = require('../Controllers/user.controller')


const router = express.Router();

router
    .route('/')
    .get(userController.getAllUser)

module.exports = router;

