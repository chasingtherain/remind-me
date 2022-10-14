const express = require('express')
const cors = require('cors')
const userRoutes = require('./routes/user')

require('dotenv').config()

const app = express()

app.use(cors())
app.use(express.urlencoded({extended: true})) //Parse URL-encoded bodies
app.use(express.json())

app.use(userRoutes)


app.listen(process.env.PORT, function(err){
    if (err) console.log("Error in server setup")
    console.log(`Server listening on port ${process.env.PORT} in ${process.env.REACT_APP_STATUS} mode`);
})