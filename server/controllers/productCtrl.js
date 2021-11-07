const axios = require('axios')


const getAllProducts = async(req, res) =>{
    try{
        // await axios.get("https://fakestoreapi.com/products")
        // .then(function(response){
        //     res.json(response.data);
        //     console.log(response.data);
        // })
        // console.log(products)
        // res.json(products)
        const page = req.query.page
        const limit = req.query.limit
        const startIndex = (page-1) * limit//0
        const endIndex = page * limit

        const products = await axios.get("https://fakestoreapi.com/products");
        const FP = products.data
        const filteredProducts = FP.slice(startIndex, endIndex)
        //res.json(products.data);
        res.json(filteredProducts)
    }catch(err){
        return res.status(500).json(err)
    }
}

module.exports = getAllProducts;