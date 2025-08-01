import express from 'express'
import adminController from '../controller/admin.js'

const router = express.Router()

router.get('/', adminController.getAllAdmin) //sama ajah kek di bawah

router.post('/', adminController.addAdmin) //sama juga kek di bawah

export default router