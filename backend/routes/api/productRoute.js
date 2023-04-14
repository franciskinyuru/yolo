const express = require('express')
const router = express.Router();

// Product Model
const Product = require('../../models/Products');

// @route GET /products
// @desc Get ALL products
router.get('/', async(req,res)=>{
    console.log("request started");
    const data = await Product.find({});
    if (!data) {
        console.log("Request ended");
        res.status(200).json({"msg":"no data found"})
    }
    else{
        console.log("Request ended");
        res.status(200).json(data)
    }
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
    if(!data){
        res.status(500).json({"msg":"error processing your request"})
    }
    else{
        res.status(200).json(data) 
    }
    
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