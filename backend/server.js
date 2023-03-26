const express = require('express')
const connectToDB = require('./config/config')
const cors = require('cors')

const PORT = 5000

const app = express()

connectToDB()

app.use(cors({origin:'*'}))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/users', require('./router/routes'))

app.listen(PORT, () => {
    console.log(`app listening od port: ${PORT}`)
})