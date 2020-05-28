const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'Auth',
    password: 'mysecretpassword',
    port: 5432,
})

const getUsers = (request, response) => {
    pool.query('SELECT * FROM AuthUser', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const createUser = (request, response) => {
    const {emailId, password} = request.body

    console.log(emailId, password)

    pool.query('INSERT INTO AuthUser (emailId, password) VALUES ($1, $2)', [emailId, password], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`User added with emailId: ${emailId}`)
    })
}

module.exports = {createUser, getUsers};