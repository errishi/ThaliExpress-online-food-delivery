import userModel from "../models/userModel.js";

// add item to user cart
const addToCart = async(req,res) => {
    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        if(!cartData[req.body.itemId]){
            cartData[req.body.itemId] = 1;
        }else{
            cartData[req.body.itemId] += 1;
        }
        await userModel.findByIdAndUpdate(req.body.userId, {cartData});
        res.status(200).json({success: true, message: "Added to cart"});
    } catch (error) {
        console.log(error);
        res.status(500).json({success: false, message: "Server error"});
    }
}

//remove item from cart
const removeFromCart = async(req,res) => {
    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        if(cartData[req.body.itemId] > 0){
            cartData[req.body.itemId] -= 1;
        }
        await userModel.findByIdAndUpdate(req.body.userId, {cartData});
        res.status(200).json({success: true, message: "Removed from cart"});
    } catch (error) {
        console.log(error);
        res.status(500).json({succes: false, message: "Server error"});
    }
}

//fetch user cart data
const getCartData = async(req,res) => {
    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = userData.cartData;
        res.status(200).json({success: true, cartData});
    } catch (error) {
        console.log(error);
        res.status(500).json({success: false, message: "Server Error"});
    }
}

export { addToCart, removeFromCart, getCartData };