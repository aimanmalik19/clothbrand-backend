const mongoose = require('mongoose');

// const orderSchema = new mongoose.Schema({
//   user: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User',
//     required: true
//   },
//   products: [
//     {
//       product: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Product'
//       },
//       quantity: {
//         type: Number,
//         default: 1
//       }
//     }
//   ],
//   totalPrice: {
//     type: Number,
//     required: true
//   },
//   status: {
//     type: String,
//     default: 'pending'
//   },
//   address: {
//     type: String,
//     required: true
//   }
// }, { timestamps: true });


const orderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    items: [
        {
            name: String,
            price: Number,
            quantity: Number
        }
    ],
    status: {
        type: String,
        default: 'pending'
    }
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);