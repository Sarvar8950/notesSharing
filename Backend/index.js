const express = require("express")
const bodyparser = require('body-parser')
const cors = require('cors')

// Mongodb Connection
connectToDB=require('./mongodb')

const app = express()

// Middleware
app.use(cors())
app.use(bodyparser.json())


app.post('/addData', (req,res) => {
    const body = req.body
    console.log(req,body)
    res.status(200).send("data added        ")
})

app.listen(8000, () => {
    console.log("Backend is running on 8000")
})