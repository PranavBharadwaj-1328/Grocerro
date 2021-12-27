const router = require('express').Router();
const Cart = require('../models/cart.model');

router.route('/').get((req, res) => {
    Cart.find()
        .then(cart => res.json(cart))
        .catch(err => res.status(400).json('Error: ' + err));
});
///TODO: Use contollers for functions, Async await
router.route('/add').post(async (req, res) => {
    const itemname = req.body.itemname;
    const quantity = req.body.quantity;
    // console.log(req.body)
    const newItem = new Cart({itemname,quantity});

    await newItem.save()
        .then(() => res.json('Item added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/remove/:id').delete((req, res) => {
    Cart.findByIdAndDelete(req.params.id)
        .then(() => res.json('Item deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});
module.exports = router;