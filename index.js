const express = require('express');
const mongoose = require('mongoose')
const expressValidator = require('express-validator')

//import routes
const userRoutes = require('./routes/users')

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
app.use(expressValidator)

//route midlware
app.use('/api/users', userRoutes)




const port = process.env.PORT || 3000

app.listen(port, () =>console.log(`app is rinning on port ${port}`));