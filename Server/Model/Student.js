
const mongoose = require('mongoose')

const Student = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: String,
    phoneNumber: String,
    allocatedDep: String
})

const StudentModel = mongoose.model("Student", Student)
module.exports = StudentModel