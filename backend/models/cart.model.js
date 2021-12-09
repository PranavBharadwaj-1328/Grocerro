const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Schema({
    itemname: {
        type: String,
        required: true,
        minlength: 3,
    },
    quantity: {
        type: String,
        required: true,
        minlength: 1,
    },
}, 
{
    timestamps: true
}
);

const Cart = mongoose.model('Cart', cartSchema);
module.exports = Cart;