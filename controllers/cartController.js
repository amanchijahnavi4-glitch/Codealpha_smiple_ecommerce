
const Cart = require('../models/Cart');

exports.getCart = async (req,res)=>{
 try{
   const cart = await Cart.find().populate('products.product');
   res.json(cart);
 }catch(error){
   res.status(500).json({message:error.message});
 }
};

exports.addToCart = async (req,res)=>{
 try{
   const cart = await Cart.create(req.body);
   res.status(201).json(cart);
 }catch(error){
   res.status(500).json({message:error.message});
 }
};
