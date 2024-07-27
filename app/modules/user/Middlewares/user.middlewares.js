import { userModel } from "../../../database/models/userModel.js"

export const checkExistEmail = async (req, res, next) => {
    userModel.find({ email: req.body.email })
        .then((user) => {
            if (user.length > 0) {
                res.status(409).send({ message: "Email already exists" })
            } else {
                next()
            }
        })
        .catch((err) => {
            res.status(500).send({ message: "Internal server error" })
        })
}


