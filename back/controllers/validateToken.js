const jwt = require("jsonwebtoken")
require("dotenv").config()

const verifyToken = async (req,res,next) => {

    try {
        const token = req.cookies["auth_user"]

        if (!token) {
            return res.status(400).send({
                message: "Acceso denegado"
            })
        }


        const decoded = await jwt.verify(token,process.env.TOKEN_SECRET)
        req.user = decoded
        next()

    } catch (error) {
        return res.status(400).send({
            message: "Token no valido"
        })
    }
}

module.exports = verifyToken