const User = require("../models/User.js")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require("dotenv").config()

const home = async (req,res)=>{
    res.send(req.user.name)
}

const login =  async  (req,res)=>{
    try {
        const user = await User.findOne({ "email": req.body.email })

        if (!user) {
            return res.status(400).json({
                message: "Your account does not exist"
            })
        }

        //Compare passwords
        const passValidate = await bcrypt.compare(req.body.password, user.password)

        if (!passValidate) {
            return res.status(400).json({
                message: "Incorrect credentials"
            })
        }

        //Create token
        const token = await jwt.sign(
            {
                name: user.name,
                email: user.email,
            }
            ,process.env.TOKEN_SECRET
        )

        res.cookie("auth_user", token, {httpOnly:true}).send("Cookie Done")
        
    } catch (error) {
        res.status(400).json({
            error
        })
    }
}

const register = async (req,res)=>{
    try {
        // Exist email ?
        const existEmail = await User.findOne({"email":req.body.email})

        if (existEmail) {
            return res.status(400).json({
                message: "Already registered user"
            })
        }

        //Hash password
        const salt = await bcrypt.genSalt(10)
        const password = await bcrypt.hash(req.body.password,salt)

        //New user
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password
        })

        //Save user
        const userRegister = await user.save()

        res.send("User Created")

    } catch (error) {
        res.status(400).json({
            error
        })
    }
}

const logout = async (req,res)=>{
    res.clearCookie("auth_user").send("Cookie Destroyed")
}

module.exports = {login,register,home,logout}