const express = require('express')
require('dotenv').config()
const cors = require('cors')
const productRouter = require('./routes/productRoutes')

const app = express();
app.use(cors())
app.use(express.json())

//routes
app.use("/products", productRouter);

const port = process.env.PORT || 8000

app.listen(port, ()=> console.log('serving running on port : ', port))