import express from 'express'
import productController from '../controller/products.js'

const router = express.Router()

//CREATE -> POST
router.post('/', productController.addProduct)

//READ -> GET
router.get('/', productController.getAllProducts)

//UPDATE -> PATCH/PUT
router.patch('/:idProduct',productController.updateProduct)

//DELETE -> DELETE
router.delete('/:idProduct',productController.deleteProduct)

export default router