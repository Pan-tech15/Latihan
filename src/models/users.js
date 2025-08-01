import dbPool from '../config/database.js'

const getAllUsers = () => {
    const q = 'SELECT * FROM users'

    return dbPool.execute(q);
}

const createNewUser = (Firstname, Lastname, email) => {
    const q = 'INSERT INTO users (Firstname, Lastname, email) VALUES(?,?,?)'

    return dbPool.execute(q,[Firstname, Lastname, email])
}

export default {getAllUsers, createNewUser}