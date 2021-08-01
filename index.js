const express = require('express');
const app = express();
require('dotenv').config();

app.get('/', (req,res) =>{
    res.send({message: "salam mes chers dev"})
})

const port = process.env.PORT || 3000

app.listen(port, () =>console.log(`app is rinning on port ${port}`));