const express = require('express')
const mongoose = require('mongoose')
const router  = express.Router()


const studentSchema = new mongoose.Schema({
    name:{type:String, required : true},
    isEnrolled:{type:Boolean,default:false},
    Phone:{
        type:String,
        required:true
    }
})
const Student =  mongoose.model('Student',studentSchema)




router.get('/', async (req, res) => {
    let students = await  Student.find()
    res.send(students);
    
    });
    
router.post('/', async (req, res) =>{
    
    const student =  new Student({
        name:req.body.name,
        isEnrolled:req.body.isEnrolled,
        Phone:req.body.Phone
       })
     await student.save();
     res.send(student);
    });
    
 router.put('/:id', async (req, res) => {    
     const student = await Student.findByIdAndUpdate(req.params.id , {name: req.body.name,isEnrolled:req.body.isEnrolled, Phone:req.body.Phone}, {new:true})    
     if (!student) return res.status(404).send('The category with the given ID was not found.');
     res.send(student);
    });
    
router.delete('/:id',async  (req, res) => {
    const student = await Student.findByIdAndDelete(req.params.id)
    if (!student) return res.status(404).send('This category id is not found')
    res.send(student)
   });


router.get('/:id', async (req,res)=>{
     const student = await Student.find(req.params.id)
     if(!student) return res.status(404).send('this give id is not found');
     res.send(student);
})

module.exports =  router