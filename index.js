const express = require("express")
const connectDB = require("./config/db")
const cors = require('cors')
const path = require('path')

const app = express()
connectDB()

app.use(cors({origin:true, credentials:true}));
app.use(express.json({extended:false}));
app.use('/static/images', express.static(path.join(__dirname, 'static/images')))

app.get('/', (req, res) => {
    res.send("Server listening on port 5000");
 })

const series = require('./routers/api/series')
app.use('/api/series', series)

const port = 8000;
app.listen(port, ()=>{
    console.log("server listening on port 8000")   
})

