const mongoose = require('mongoose');
const Schema = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String,
    },
    password:{
        type:String
    },
    emp_id:{
        type: mongoose.Schema.Types.String,
        ref: "task"
    }
});
module.exports = mongoose.model('emp', Schema);