const express = require('express');
const router = express.Router();
const { addUser, getUsers, getUserById, updateUser, deleteUser, login } =require('../services/userService')



router.get("/", async(req, res, next) => {
    try {
        const response = await getUsers();
        res.send(response);
    } catch (error) {
        res.send(error);
    }
    
})

router.get("/:id", async (req, res, next) => {
    try {
        const user = await getUserById(req.params.id)
        res.send(user);
    } catch (error) {
        res.send("user not found")
    }
})

router.post("/", async (req, res, next) => {
    try {
        const person = req.body
        const response = await addUser(person.name, person.surname, person.tcId, person.password)

        res.send(response)
    } catch (error) {
        res.send(error)
    }
    
})

router.put('/:id', async(req, res, next) => {
    try {
        const person = req.body
        const response = await updateUser(req.params.id, person.name, person.surname, person.tcId)
        res.send(response)
    } catch (error) {
        res.send(error)
    }
})

router.delete('/:id', async(req, res, next) => {
    try {
        const user = await deleteUser(req.params.id);
        if(user){
            res.send('user deleted')
        }else {
            res.send('user not found')
        }
    } catch (error) {
        res.send(error)
    }
})

router.post('/login', async(req, res, next)  => {
    try {
        const user = req.body
        const response = await login(user.name, user.password)
        if(response){
            res.send('success');
        }else {
            res.send('user not found ');
        }
        
    } catch (error) {
        res.send(error);
    }
})

module.exports = router;