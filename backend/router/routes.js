const express = require('express')
const router = express.Router()
const {registerUser,loginUser, getData} = require('../controller/userController')
const {getTasks,setTask,updateTask,deleteTask} = require('../controller/taskController')

router.route('/').get(getTasks).post(setTask)
router.route('/:id').put(updateTask).delete(deleteTask)

router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/login',getData)

module.exports = router