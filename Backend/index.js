const express = require("express")
const bodyparser = require('body-parser')
const cors = require('cors')
const text = require('./schema')

// Mongodb Connection
connectToDB=require('./mongodb')

const app = express()

// Middleware
app.use(cors())
app.use(bodyparser.json())


app.get('/', (req,res) => {
    console.log("Get request")
    res.status(200).send("get request is working")
})
app.post('/addData', async (req,res) => {
    const body = req.body
    console.log(body)
    const data = await text.insertMany([body])
    console.log(data)
    res.status(200).send("data added", data)
})

app.listen(8000, () => {
    console.log("Backend is running on 8000")
})