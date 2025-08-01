import dbPool from '../config/database.js'

const getAllProducts = (/*parameter*/) => {
    const getQuery = 'SELECT * FROM product'

    return dbPool.execute(getQuery)
} 

const getSingleProdcut = (idProduct) => {
    const getQuery = 'SELECT * FROM product WHERE id=?'

    return dbPool.execute(getQuery, [idProduct])
}
const addProduct = ({product_name, brand}) => {
    const addQuery = 'INSERT INTO product (product_name, brand) VALUES (?,?)'

    return dbPool.execute(addQuery, [product_name, brand])
}

const updateProduct = (New_product_name, New_brand, idProduct) => {
    const updateQuery = 'UPDATE product SET product_name =?, brand =? WHERE id =?'

    return dbPool.execute(updateQuery, [New_product_name, New_brand, idProduct])
}

const deleteProduct = (idProduct) => {
    const deleteQuery = 'DELETE FROM product WHERE id=?'

    return dbPool.execute(deleteQuery, [idProduct])
}

export default {
    getAllProducts,
    addProduct,
    updateProduct,
    deleteProduct,
    getSingleProdcut
}

//this foldes is where all the queries happen
//and before you query, you need to get the database connection from config
//it will be changed