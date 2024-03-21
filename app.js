const express = require('express')
const mongoose = require('mongoose')
const categories = require('./Routes/categories')
const student = require('./Routes/student')

const app = express()
// app.use(express.json());
mongoose.connect('mongodb://127.0.0.1/learningPlateform')
 .then(() => console.log('connection is successful database'))
 .catch(err=>console.error('not connected to mongodb server',err))



app.use(express.json())
app.use('/api/categories',categories)
app.use('/api/students',student)


const port = process.env.PORT ||3000;
app.listen(port,() => console.log(`lsiting on port ${port}`));