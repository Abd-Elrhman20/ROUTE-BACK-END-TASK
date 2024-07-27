import Joi from "joi"

export const addCategorySchema = Joi.object({
    name: Joi.string().min(3).required(),
    user: Joi.string().required()
})

export const editCategorySchema = Joi.object({
    name: Joi.string().min(3),
    user: Joi.string()
})

export const validateCategory = (schema) => (req, res, next) => {
    const { error } = schema.validate(req.body, { abortEarly: false })
    if (error) {
        error.details.map((err) => res.status(400).json(err.message))
    }
    next()
}