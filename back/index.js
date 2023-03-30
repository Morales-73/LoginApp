const express = require("express")

const cookieParser = require("cookie-parser")
const bodyParser = require("body-parser")
const router = require("./routes/router.js")
const cors = require("cors")


require("./database/db.js")

require("dotenv").config()

const app = express()

app.use(cors({ 
    origin: ["http://localhost:3000","*"],
    methods: ['GET','POST'],
    credentials: true,
  }));

app.use(cookieParser())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use("/", router)

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=> {
    console.log("Server run on port 🚀", PORT)
})