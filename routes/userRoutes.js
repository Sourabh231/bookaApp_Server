const express = require('express');

const {getAllUser,registerController,loginController} = require('../controllers/userController');
 
const {getTasks,saveTasks,updateTask,deleteTask}= require('../controllers/bookController')


//router object difine
const router = express.Router();

//Get all user ||GET
router.get('/getAllUser',getAllUser);

//Register the user || Use POST for these
router.post('/register',registerController);

//Login user || user POSt
router.post('/login',loginController);

//get the task ||GET
router.get('/get',getTasks);

//save the task || POST
router.post('/savetask',saveTasks);

//update the task || PUT
router.put('/updatetask/:id',updateTask);

//delete the task || DELETE
router.delete('/deletetask/:id',deleteTask);


module.exports = router;