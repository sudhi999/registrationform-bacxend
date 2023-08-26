const express = require('express')
const cors = require('cors')
const app = express()
const bodyparser = require('body-parser')
app.use(bodyparser.json())
app.use(cors())
const {createUser} = require('./routes/index')

app.use(createUser)

app.listen(7000,() => {
    console.log('server Runnimg at port 7000')
})
