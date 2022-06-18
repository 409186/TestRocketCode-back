const router = require("express").Router();
const Users = require("../models/User.model");


router.get("/users", (req, res) => {
    Users.find()
    .then(allUsers => {
        console.log("Todos los usuarios =>", allUsers)
        res.json({usuarios: allUsers})
    })
    .catch(error => console.log("Este es el error =>", error))
})

router.post("/users", (req, res) => {
    Users.create(req.body)
    .then(newUser => {
        console.log("Nuevo usuario =>", newUser)
        res.json(newUser)
    })
    .catch(error => console.log("Este es el error =>", error))
})




module.exports = router;