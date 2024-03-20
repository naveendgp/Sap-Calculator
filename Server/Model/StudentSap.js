const mongoose = require('mongoose')

const StudentSap = new mongoose.Schema({
    username: String,
    password: String,
    Name:String,
})

const StudentSapModel = mongoose.model("student-sap", StudentSap)
module.exports = StudentSapModel 