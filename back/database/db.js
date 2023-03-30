const mongoose = require("mongoose")
require("dotenv").config()

const url = `mongodb://localhost:27017/${process.env.DBNAME}`

const db = mongoose.connect(url,{}).then(()=>console.log("DB connected")).catch((error)=>console.log(error.message))