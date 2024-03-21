const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    name:{type:String, required : true},
    isEnrolled:{type:Boolean,default:false},
    Phone:{
        type:String,
        required:true
    }
})
const Student =  mongoose.model('Student',studentSchema)

exports.Student = Student;