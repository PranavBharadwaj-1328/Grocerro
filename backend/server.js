const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require("body-parser")

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5400;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const uri = process.env.ATLAS_URI;
mongoose.connect(uri,{useNewUrlParser: true, 
    useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

const cartRouter = require('./routes/cart');
const userRouter = require('./routes/user');
app.use('/auth', userRouter);
app.use('/cart', cartRouter);
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

