import productModel from '../models/product.js'

const getAllProducts = async (req, res) => {
    try {
        const [data] = await productModel.getAllProducts()//==> jangan lupa '()'

        res.json({
            message : 'all products receive from controller',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            MessageFromServer: error
        })
    }   
}

const addProduct = async (req,res) => {
    const {product_name, brand} = req.body

    try {
        const [data] = await productModel.addProduct({product_name, brand})

        console.log(req.body)
        res.json({
            message : 'New Product added',
            data : {product_name, brand},
            anotherData : data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            MessageFromServer: error
        })
    }
    
}

const updateProduct = async (req,res) => {
    const {idProduct} = req.params //nama 'idProduct' harus sama dengan path //e.g. /product/idProduct:
    const {New_product_name, New_brand} = req.body 

    try {
        const [data] = await productModel.updateProduct(New_product_name, New_brand, idProduct)

        console.log("ID_Product:", idProduct)
        res.json({
            message: 'UPDATE product berhasil',
            data : data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            MessageFromServer: error.message
        })
    }
}

const deleteProduct = async (req, res) => {
    const {idProduct} = req.params
    console.log("ID_Product", idProduct)

    try {
        const [product] = await productModel.getSingleProdcut(idProduct)

        if(product.length === 0){
            return res.status(404).json({
                message: "product not found"
            })
        }

        console.log("product: ", product[0])

        const [data] = await productModel.deleteProduct(idProduct)

        res.json({
        message : 'DELETE product succesfull',
        DeletedData: data
    })
    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            MessageFromServer: error.message
        })
    }
}

export default {getAllProducts, addProduct, updateProduct, deleteProduct}