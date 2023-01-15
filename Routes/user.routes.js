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
    .post(userController.saveUser);

router
    .route('/update/:id')
    .patch(userController.updateUser);



module.exports = router;

