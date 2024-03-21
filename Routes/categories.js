const express = require('express')

const mongoose = require('mongoose')
const router  = express.Router()


const categorySchema = new mongoose.Schema({
    name:{type:String, require : true}
})
const Category =  mongoose.model('Category',categorySchema)




router.get('/', async (req, res) => {
    let categories = await  Category.find()
    res.send(categories);
    
    });
    
router.post('/', async (req, res) =>{
    
    const category =  new Category({
        name:req.body.name
    })
     
     await category.save();
    res.send(category);
    
    });
    
 router.put('/:id', async (req, res) => {

   //  const {error} = validateData(req.body)
    // if(error) res.status(400).send(error.details[0].message)
    
     const category = await Category.findByIdAndUpdate(req.params.id , {name: req.body.name}, {new:true})

    // const category = categories.find(c => c.id === parseInt(req.params.id));
    
    if (!category) return res.status(404).send('The category with the given ID was not found.');
    
    // if (error) return res.status(400).send(error.details[0].message);
    
    // category.name = req.body.name;
    
    res.send(category);
    
    });
    
router.delete('/:id',async  (req, res) => {
    
    const category = await Category.findByIdAndDelete(req.params.id)
    
    if (!category) return res.status(404).send('This category id is not found')

    res.send(category)
   
})


router.get('/:id', async (req,res)=>{
     const category = await Category.find(req.params.id)
     if(!category) return res.status(404).send('this give id is not found');
     res.send(category);
})

module.exports =  router