const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const LoginRouter = require("./Router/LoginRouter")
const FacultyRouter = require("./Router/FacultyRouter")
const GetFaculty = require("./Router/GetFaculty")
const StudentRouter = require("./Router/StudentRouter")
const GetStudent = require("./Router/GetStudent")
const SelectedStudent = require("./Router/SelectedStudent")
const DeleteStudent = require("./Router/DeleteStudent")
const cookieParser = require("cookie-parser")
const PORT = 8000

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

mongoose.connect('mongodb://0.0.0.0:27017/sap')
    .then(() => console.log("Connected to database"))
    .catch((err) => console.log("Error Occured: ", err))


app.use(LoginRouter)
app.use(FacultyRouter)
app.use(GetFaculty)
app.use(StudentRouter)
app.use(GetStudent)
app.use(SelectedStudent)
app.use(DeleteStudent)



app.get("/profile", (req, res) => {
    const { token } = req.cookies
    if (token) {
        jwt.verify(token, JWT_SECRET, {}, (err, user) => {
            if (err) throw err;
            res.json(user)
        })
    }
})
app.listen(PORT, () => {
    console.log("Listening...")
})