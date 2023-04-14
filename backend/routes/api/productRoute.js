const express = require('express')
const router = express.Router();

// Product Model
const Product = require('../../models/Products');

// @route GET /products
// @desc Get ALL products
router.get('/', async(req,res)=>{
    // Fetch all products from database
    const data = await Product.find({});
    return data;
})

// @route POST /products
// @desc  Create a product
router.post('/', async (req,res)=>{
    
    // Create a product item
    const newProduct = new Product({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        quantity: req.body.quantity,
    });

    const data=await newProduct.save();
    return data;
})
// @route PUT api/products/:id
// @desc  Update a product
router.put('/:id', async(req,res)=>{
    // Update a product in the database
   await Product.updateOne({_id:req.params.id},{
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        quantity: req.body.quantity,
        photo:req.body.photo
    }, {upsert: true}, (err)=>{
        if(err) console.log(err);
        res.json({success:true})
    })
})
// @route DELETE api/products/:id
// @desc  Delete a product
router.delete('/:id', async(req,res)=>{
    // Delete a product from database
    await Product.deleteOne({_id: req.params.id}, (err)=>{
        if (err){
            console.log(err)
            res.json({success:false})
        }else{
            res.json({success:true})
        }
    })
})

module.exports = router;