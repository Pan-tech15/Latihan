import express from 'express'
import userController from '../controller/users.js'

const router = express.Router()

router.get('/', userController.getAllUsers)
/* router.get('/',(req, res) =>{
    res.json({
        message : 'get all users success from controller'
    });
}) */

router.post('/', userController.createNewUser) //sama ajah ama yang di bawah
/*router.post('/',(req, res) =>{
    res.send('created new user from controller')
    })
*/

router.patch('/:id', userController.UpdateUsers)

export default router