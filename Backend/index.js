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
    const olddata = await text.findOne({pathName : body.pathName})
    console.log(olddata)
    if(olddata) {
        const data = await text.updateOne( {pathName : body.pathName},body)
        console.log(data)
        res.send(data)
    } else {
        const data = await text.insertMany([body])
        console.log(data)
        res.send(data)
    }
})
app.post('/getPathData', async (req,res) => {
    const body = req.body
    console.log(body)
    const data = await text.findOne({pathName : body.pathName})
    console.log(data)
    if(data) {
        // res.status(200).send("data fetched", data)
        res.status(200).send(data)
    } else {
        res.status(500).send(data)
    }
})

app.listen(8000, () => {
    console.log("Backend is running on 8000")
})