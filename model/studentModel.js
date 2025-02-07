const mongoose = require('mongoose')

const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost:27017/blogList')
.then((result)=>console.log('Connected to db'))
.catch((err) => console.log(err))

const studentinfo = new Schema({
    title:{
        type: String,
        required: false

    },
    Body: {
        type: String,
        required: false
    }
   
},{timestamps: true})
 module.exports = mongoose.model('blog', studentinfo)