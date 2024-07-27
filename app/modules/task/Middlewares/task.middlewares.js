import { taskModel } from './../../../database/models/task.model.js';
import jwt from 'jsonwebtoken';

export const checkVisibility = async (req, res, next) => {
    const { token } = req.headers
    await taskModel.findById(req.params.id)
        .then(task => {
            if (task.visibility == "private") {
                if (jwt.verify(token, "secret")) {
                    next()
                } else {
                    res.status(400).json({ message: "unauthenticated" })
                }
            }
            else {
                next()
            }
        })
}