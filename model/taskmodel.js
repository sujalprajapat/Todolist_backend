const mongoose = require('mongoose');
const taskschema = new mongoose.Schema({
    title:{
        type:String
    },
    startdate:{
        type:Date,
        default:Date.now
    },
    enddate:{
        type:String
    },
    status:{
        type:String,
        default:"pending"
    },
    
})
module.exports = mongoose.model('task', taskschema);