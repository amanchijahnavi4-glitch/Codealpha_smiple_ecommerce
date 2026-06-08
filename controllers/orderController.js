
const Order = require('../models/Order');

exports.getOrders = async (req,res)=>{
 try{
   const orders = await Order.find().populate('products.product');
   res.json(orders);
 }catch(error){
   res.status(500).json({message:error.message});
 }
};

exports.createOrder = async (req,res)=>{
 try{
   const order = await Order.create(req.body);
   res.status(201).json(order);
 }catch(error){
   res.status(500).json({message:error.message});
 }
};
