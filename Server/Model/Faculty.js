
const mongoose = require('mongoose')

const Faculty = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role:String,
    phoneNumber: String,
    allocatedDep: String
})

const FacultyModel = mongoose.model("Faculty",Faculty)
module.exports = FacultyModel