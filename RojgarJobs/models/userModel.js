const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({

    username : {type: String, require: true},
    password : {type: String, require: true},

    firstName : {type: String},
    lastName : {type: String},
    email : {type: String},
    mobileNumber : {type: String},
    portfolio : {type: String},

    about : {type: String},
    address : {type: String},
    

    education: {type: []},
    skills: {type: []},
    projects: {type: []},
    experience: {type: []},

    appliedJobs: []

}, {timestamps: true});


const userModel = new mongoose.model('users', userSchema)

module.exports = userModel;


