const express = require('express')
const cors = require('cors')
const postsRoutes = require('./routes/postsRoute')


const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(cors())

app.get('/', (req, res) => {
    res.send("All Ok.")
})

app.use('/', postsRoutes)

module.exports = app