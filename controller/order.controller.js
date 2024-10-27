const Order = require("../model/order.model")

const createOrder = async (req, res, next) => {
    const { shippingInfo, orderItems, itemPrice, taxPrice, shippingPrice, totalPrice, user } = req.body;

    const newOrder = {
        shippingInfo,
        orderItems,
        itemPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
        user
    };

    try {
        const existingOrders = await Order.find({ user: user });

        // Check if any existing order has matching orderItems
        const orderExists = existingOrders.some(existingOrder => 
            Array.isArray(existingOrder.orderItems) && 
            existingOrder.orderItems.some(item => item.productId === orderItems.productId)
        );

        if (orderExists) {
            return res.status(404).json({
                success: false,
                message: "Already added to cart"
            });
        }

        // Create and save the new order
        const order = await Order.create(newOrder);
        return res.status(200).json({
            success: true,
            message: "Product added to cart",
            order
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Server error"
        });
    }
};




// const Order = require("../model/order.model")

// const createOrder = async (req,res,next) =>{

//     const {shippingInfo, orderItems, itemPrice, taxPrice, shippingPrice, totalPrice, user} = req.body;

//     const newOrder = {
//         shippingInfo,
//         orderItems, 
//         itemPrice,
//         taxPrice, 
//         shippingPrice,
//         totalPrice,
//         user
//     }

//     const existingUser = await Order.find({user: user});
//     if(!existingUser || existingUser.length == 0){
//         const order = await Order.create(newOrder);
//         await order.save()
//        return res.status(200).json({
//             success: true,
//             message: "product added to cart",
//             order
//         })
//     } else{
//         for (const singProduct of existingUser) {
//             if(singProduct.orderItems.productId == orderItems.productId){
//                     res.status(404).json({
//                     success: false,
//                     message: "Already added to cart"
//                 })
//             } else{
//                 const order = await Order.create(newOrder);
//                 await order.save()
//                return res.status(200).json({
//                     success: true,
//                     message: "product added to cart",
//                 })
//             }
//         }
//     }
// }

// const my_order_cart = async (req,res,next) =>{

// }

//          // if(product.orderItems.productId == orderItems.productId){
//             //     res.status(404).json({
//             //         success: false,
//             //         message: "Already added to cart"
//             //     })
//             // } else{
//             //     const order = await Order.create(newOrder);
//             //     await order.save()
//             //    return res.status(200).json({
//             //         success: true,
//             //         message: "product added to cart"
//             //     })
//             // }
module.exports = {createOrder}

