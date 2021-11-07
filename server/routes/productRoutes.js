const router = require('express').Router()
const getAllProducts = require('../controllers/productCtrl')

router.get("/", getAllProducts)

module.exports = router;