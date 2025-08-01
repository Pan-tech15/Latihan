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

const UpdateUsers = async (req, res) => {
    const {id} = req.params
    const {Firstname, Lastname, email} = req.body

    try {
        const [data] = await usersModel.UpdateUsers(Firstname, Lastname, email)

        console.log("ID_Users:", id)
        res.json({
            message: 'UPDATE users berhasil',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            MessageFromServer: error.message
        })
    }
}

export default {getAllUsers, createNewUser, UpdateUsers}

//controller is where the functions will be.