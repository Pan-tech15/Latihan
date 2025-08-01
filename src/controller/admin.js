const getAllAdmin = (req, res) => {
    res.json({
        message : 'All admin data successfully received from controller'
    })
}

const addAdmin = (req, res) => {
    res.send('Admin data added from controller')
}

export default {getAllAdmin, addAdmin}