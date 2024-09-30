const express = require('express');
const router = express.Router();



let list = [];

router.get("/", (req, res, next) => {
    res.send(list)
})

router.get("/:id", (req, res, next) => {
    const id = req.params.id
    const item = list.find((i) => i.id === Number(id));
    res.send(item)
})

router.post("/", (req, res, next) => {
    const newId = list.length + 1
    const comment = req.body
    comment.id = newId
    list.push(comment);
    res.send(comment)
})

router.put('/:id', (req, res, next) => {
    const id = req.params.id;
    item = list.find((i)=> i.id === Number(id));
    const temp = {...item, ...req.body};
    const itemIndex = list.findIndex((i) => i.id ===Number(id));
    list[itemIndex] = temp;
    res.send(temp);  
})

router.delete('/:id', (req, res, next) => {
    const id = req.params.id;
    const updatedList = list.filter((i) => i.id !==Number(id));
    list = updatedList
    res.send("silindi") 
})

module.exports = router;