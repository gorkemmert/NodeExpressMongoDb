const { response } = require("express");
const bcrypt = require('bcryptjs');
const userShema = require("../models/user")

module.exports.addUser = async(name, surname , tcId, password) => {

    const hash = await bcrypt.hash(password, 10)
    const response = await userShema.create({name, surname, tcId, password: hash});
    return response
};

module.exports.getUsers = async() => {
    const response = await userShema.find();
    return response
}

module.exports.getUserById = async(id) => {
    const response = await userShema.findById(id);
    return response
}

module.exports.updateUser = async(id, name, surname, tcId) => {
    const response = await userShema.findByIdAndUpdate(id, {name, surname, tcId}, { new: true });
    return response
}

module.exports.deleteUser = async(id) => {
    const response = await userShema.findByIdAndDelete(id)
    return response
}

module.exports.login = async(name, password) => {
    const user = await userShema.findOne({name})

    try {
        if(user){
            const isUser = await bcrypt.compare(password, user.password)
            return isUser

        }else {
            return "user not found"
        }
    } catch (error) {
        return error
    }
}