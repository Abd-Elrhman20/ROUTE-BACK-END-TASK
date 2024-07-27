import { userModel } from './../../database/models/userModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const signIn = async (req, res) => {
    await userModel.findOne({ email: req.body.email })
        .then((user) => {
            if (bcrypt.compareSync(req.body.password, user.password)) {
                const token = jwt.sign({ id: user._id, email: user.email }, "secret")
                res.status(200).send({ message: "Login successful", token: token })
            } else {
                res.status(401).send("Wrong credentials")
            }
        })
        .catch((err) => {
            res.status(500).send({ message: "User not found" })
        })
}

export const signUp = async (req, res) => {
    const hashedPassword = bcrypt.hashSync(req.body.password, 4)
    req.body.password = hashedPassword

    await userModel.create(req.body)
        .then((user) => {
            res.status(201).send({ message: "User created" })
        })
        .catch((err) => {
            res.status(500).send({ message: "User not created" })
        })
}

// special end point to get all users with their categories and tasks

// export const getUserWithHisCategoriesAndTasks = async (req, res) => {
//     await userModel.findOne({ email: req.body.email })
//         .populate("name")
//         .then((user) => {
//             res.status(200).json({ message: "User found", user })
//         })
//         .catch((err) => {
//             res.status(500).send({ message: "User not found" })
//         })
// }