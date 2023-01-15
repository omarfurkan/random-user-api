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


router
    .route('/user/bulk-update')
    .patch(userController.bulkUpdateUser);

router
    .route('/delete/:id')
    .delete(userController.deleteUser);



module.exports = router;

