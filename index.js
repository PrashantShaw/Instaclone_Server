require('dotenv').config()
const mongoose = require('mongoose')
const app = require('./app')

// ENV VARIABLES
const port = process.env.PORT || 3000
const db_URL = process.env.DATABASE_URL || 'mongodb+srv://PrashantShaw:dimpu1234@cluster0.23bgi7j.mongodb.net/instaclonePosts'

// CONNECTING TO CLOUDINARY


// CONNECTING TO DB
mongoose.connect(db_URL, () => { console.log('connected to db') })

// CONNECTING TO SERVER
app.listen(port, () => { console.log(`server is live at ${port}`) })

module.exports = app