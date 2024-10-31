const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        trim: true,
        lowercase: true,
        unique: true,
        minlength: [3, "Username must be at lwast 3 chartacter long"]
    },
    email: {
        type: String,
        require: true,
        trim: true,
        lowercase: true,
        unique: true,
        minlength: [13, "Email must be atleast 13 character long"]
    },
    password:  {
        type: String,
        require: true,
        trim: true,

        minlength: [5, "Password must be at least 5 character long"]
    },
})

const User = mongoose.model("User",userSchema)