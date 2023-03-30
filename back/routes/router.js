const router = require("express").Router()
const {home,login,register,logout} = require("../controllers/authControllers")
const validateToken = require("../controllers/validateToken.js")

//Routes for controllers

router.get("/",validateToken, home)

router.post("/login", login)

router.post("/register", register)

router.get("/logout", logout)

module.exports = router