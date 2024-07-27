import Joi from "joi"

export const addTaskSchema = Joi.object({
    type: Joi.string().valid('text', 'list').required(),
    category: Joi.string().required(),
    content: Joi.string().required(),
    visibility: Joi.string().valid('private', 'public').required()
})

export const editTaskSchema = Joi.object({
    type: Joi.string().valid('text', 'list'),
    category: Joi.string(),
    content: Joi.string(),
    visibility: Joi.string().valid('private', 'public')
})


export const validateTask = (schema) => (req, res, next) => {
    const { error } = schema.validate(req.body, { abortEarly: false })
    if (error) {
        error.details.map((err) => res.status(400).json(err.message))
    }
    next()
}