const mongoose = require('mongoose')

const shema = mongoose.Schema;

const user = new shema({
    name : {type: String},
    surname: {type : String},
    tcId: {type :String, required: [true, "tcId zorunludur"]},
    password: {type: String, required: [true, "password zorunludur"]}
})

module.exports = mongoose.model("user", user);