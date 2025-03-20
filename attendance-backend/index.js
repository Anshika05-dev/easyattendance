const express = require('express')
const dontenv=require("dotenv").config();
const cors = require("cors");

const adminroutes=require('./routes/adminroute')
const app = express()
const port = 3000

app.use(cors({
    origin:["http://localhost:5173"],
    methods:['GET','POST','PUT','DELETE'],
    credentials:true
}))
app.use(express.json());

app.use('/auth',adminroutes)
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})