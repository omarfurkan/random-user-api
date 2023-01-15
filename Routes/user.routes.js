const express = require('express');
const userController = require('../Controllers/user.controller')


const router = express.Router();

router
    .route('/all')
    .get(userController.getAllUser);

router
    .route('/random')
    .get(userController.getRandomUser);

router
    .route('/save')
    .post(userController.saveUser)



module.exports = router;

