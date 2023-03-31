const Task = require('../model/taskModel')
const asyncHandler = require('express-async-handler')

const getTasks = asyncHandler(async (req,res) => {
    const tasks = await Task.find()

    res.status(200).json(tasks)
})

const setTask = asyncHandler(async (req,res) => {
    if(!req.body.heading || !req.body.description){
        res.status(400)
        throw new Error('please add heading and description')
    }

    const task = await Task.create({
        userId: req.body.userEmail,
        heading: req.body.heading,
        description: req.body.description,
        dueTo: req.body.dueTo,
        place: req.body.place
    })
    res.status(200).json(task.text)
})

const updateTask = asyncHandler(async (req,res) => {
    const task = await Task.findById(req.params.id)

    if(!task){
        res.status(400)
        throw new Error('Task not found')
    }

    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.status(200).json(updatedTask)
})

const deleteTask = asyncHandler(async (req,res) => {
    const task = await Task.findById(req.params.id)

    if(!task){
        res.status(400)
        throw new Error('Cannot find Task')
    }

    const deletedTask = await Task.findByIdAndRemove(req.params.id, req.body, {new: true})
 
    res.status(200).json(deletedTask)
})

module.exports = {
    getTasks,
    setTask,
    updateTask,
    deleteTask
}