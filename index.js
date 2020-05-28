const express = require('express')
const bodyParser = require('body-parser')
const db = require('./queries')
const cors = require('cors')
const app = express()
const port = 8080

app.use(cors())
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.post('/v1/users/register', db.createUser)
app.get('/v1/users', db.getUsers)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})
