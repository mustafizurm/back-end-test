const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  shippingInfo: {
    address: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    country: {
      type: String,
    },
    pinCode: {
      type: String,
    },
    phoneNo: {
      type: String,
    },
  },

  orderItems:
    {
      productId: {
        type: Number,
      },
      name: {
        type: String,
      },
      price: {
        type: String,
      },
      quantity: {
        type: Number,
        default: 0
      },
      image: {
        type: String,
      },
    },
  
  paymentInfo: {
    status: {
      type: String,
      default: "Pending:"
    },
  },
  paidAt: {
    type: Date,
  },
  itemPrice: {
    type: Number,
    default: 0,
  },
  taxPrice: {
    type: Number,
    default: 0,
  },
  shippingPrice: {
    type: Number,
    default: 0,
  },
  totalPrice: {
    type: Number,
    default: 0,
  },
  orderStatus: {
    type: String,
    default: "Processing",
  },
  deliveredAt: Date,
  createAt: {
    type: Date,
    default: Date.now(),
  },
  user: {
    type: String,
  },
});

module.exports = mongoose.model("Order", orderSchema);
