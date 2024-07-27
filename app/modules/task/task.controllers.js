import { taskModel } from './../../database/models/task.model.js';

export const getAllTasks = async (req, res) => {
    // pagination  
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    // filtering  
    const { categoryId } = req.query;
    const { shared } = req.query; // 'public' or 'private'

    const filter = {};

    if (shared) {
        filter.visibility = shared;    // create new property in filter object
    }
    if (categoryId) {
        filter.category = categoryId              // create new property in filter object
    }

    // // sorting
    // const { categoryName } = req.query;

    // if (categoryName) {
    //     filter.categoryName = categoryName;
    // }

    await taskModel.find(filter).skip((page - 1) * limit).limit(limit)
        .then(task => {
            res.status(200).json({ message: "All tasks", data: task })
        })
        .catch(err => {
            res.status(500).json({ message: "Error", error: err })
        })
}

export const createTask = async (req, res) => {
    await taskModel.create(req.body)
        .then(task => {
            res.status(201).json({ message: "Task created", data: task })
        })
        .catch(err => {
            res.status(500).json({ message: "Error", error: err })
        })
}

export const getTaskById = async (req, res) => {
    await taskModel.findById(req.params.id)
        .then(task => {
            res.status(200).json({ message: "Task", data: task })
        })
        .catch(err => {
            res.status(500).json({ message: "Error", error: err })
        })
}

export const editTask = async (req, res) => {
    await taskModel.findByIdAndUpdate(req.params.id, req.body)
        .then(task => {
            res.status(200).json({ message: "Task updated", data: task })
        })
        .catch(err => {
            res.status(500).json({ message: "Error", error: err })
        })
}

export const deleteTask = async (req, res) => {
    await taskModel.findByIdAndDelete(req.params.id)
        .then(task => {
            res.status(200).json({ message: "Task deleted", data: task })
        })
        .catch(err => {
            res.status(500).json({ message: "Error", error: err })
        })
}