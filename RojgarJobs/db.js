const mongoose = require("mongoose")
dbConnect()
async function dbConnect(){

    try {
        await mongoose.connect('mongodb+srv://pankaj0722:Ss0722Pp@cluster0.rbroawn.mongodb.net/RojgarJobs', {useNewUrlParser : true});
        console.log('Mongo DB Connection success')
    } catch (error) {
        console.log('Mongo DB Connection failed')
    }

}

module.exports = mongoose