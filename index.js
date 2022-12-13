require('dotenv').config()
const mongoose = require('mongoose')
const app = require('./app')
const cloudinary = require('cloudinary').v2

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
});

// ENV VARIABLES
const port = process.env.PORT || 8081
const db_URL = process.env.DATABASE_URL

// CONNECTING TO CLOUDINARY


// CONNECTING TO DB
mongoose.connect(db_URL, () => { console.log('connected to db') })

// CONNECTING TO SERVER
app.listen(port, () => { console.log(`server is live at ${port}`) })

module.exports = app