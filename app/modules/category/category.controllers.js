import { categoryModel } from '../../database/models/category.model.js';

export const getAllCategories = async (req, res) => {
    await categoryModel.find()
        .then((categories) => {
            res.status(200).json({ message: "All categories", data: categories })
        })
        .catch((err) => {
            res.status(500).json({ message: "Error", error: err })
        })
}

export const createCategory = async (req, res) => {
    await categoryModel.create(req.body)
        .then((category) => {
            res.status(201).json({ message: "Category created", data: category })
        })
        .catch((err) => {
            res.status(500).json({ message: "Error", error: err })
        })
}

export const getCategoryById = async (req, res) => {
    await categoryModel.findById(req.params.id)
        .then((category) => {
            res.status(200).json({ message: "Category", data: category })
        })
        .catch((err) => {
            res.status(500).json({ message: "Error", error: err })
        })
}

export const updateCategory = async (req, res) => {
    await categoryModel.findByIdAndUpdate(req.params.id, req.body)
        .then((category) => {
            res.status(200).json({ message: "Category updated", data: category })
        })
        .catch((err) => {
            res.status(500).json({ message: "Error", error: err })
        })
}

export const deleteCategory = async (req, res) => {
    await categoryModel.findByIdAndDelete(req.params.id)
        .then((category) => {
            res.status(200).json({ message: "Category deleted", data: category })
        })
        .catch((err) => {
            res.status(500).json({ message: "Error", error: err })
        })
}