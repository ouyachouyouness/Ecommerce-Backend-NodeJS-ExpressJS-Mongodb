const express = require('express');
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const expressValidator = require('express-validator')

//import routes
const authRoutes = require('./routes/auth')
const userRoutes = require('./routes/users')
const categoryRoutes = require('./routes/categories')

//config app
const app = express()
require('dotenv').config();

//mongodb
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
.then(() => console.log('db connected'))
.catch(() => console.log('not connected to the database'))


//midlwar
app.use(express.json())
app.use(expressValidator())
app.use(cookieParser())

//route midlware
app.use('/api', authRoutes)
app.use('/api', userRoutes)
app.use('/api/category', categoryRoutes)




const port = process.env.PORT || 3000

app.listen(port, () =>console.log(`app is rinning on port ${port}`));