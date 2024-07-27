import { Router } from "express";
import { createCategory, deleteCategory, getAllCategories, getCategoryById, updateCategory } from "./category.controllers.js";
import { addCategorySchema, editCategorySchema, validateCategory } from "./Middlewares/validate.middleware.js";

const categoryRouter = Router()

categoryRouter.route('/').get(getAllCategories).post(validateCategory(addCategorySchema), createCategory)
categoryRouter.route('/:id').get(getCategoryById).put(validateCategory(editCategorySchema), updateCategory).delete(deleteCategory)

export default categoryRouter