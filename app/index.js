import express from 'express'
import './database/db.connection.js'
import userRouter from './modules/user/user.routes.js'
import categoryRouter from './modules/category/category.routes.js'
import taskRouter from './modules/task/task.routes.js'

const app = express()
const port = 3000

app.use(express.json())
app.use("/users", userRouter)
app.use("/categories", categoryRouter)
app.use("/tasks", taskRouter)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))