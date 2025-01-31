const mongoose = require('mongoose')
const connectionString = 'mongodb+srv://john:1234@nodeproject.pl7i7.mongodb.net/Jobs-Api?retryWrites=true&w=majority&appName=NodeProject'

const connectDB = (url) => {
    return mongoose.connect(connectionString)
}

module.exports = connectDB
