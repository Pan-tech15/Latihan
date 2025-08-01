import usersModel from '../models/users.js'

const getAllUsers = async (req, res) => {
    try {
        const [data] = await usersModel.getAllUsers()

        res.json({
            message : 'get all users success from controller success',
            data: data
        });
    } catch (error) {
        res.status(500).json({
            message: "server error",
            serverMessage: error
        })
    }
}

const createNewUser = async (req, res) => {
    const {Firstname, Lastname, email} = req.body

    try {
        const [data] = await usersModel.createNewUser(Firstname, Lastname, email)

        res.json({
            message : "created new user from controller",
            data: {Firstname, Lastname, email},
            anotherData: data
        })
    } catch (error) {
        res.status(500).json({
            message: "server error",
            serverMessage: error
        })
    }
    
}

export default {getAllUsers, createNewUser}

//controller is where the functions will be.