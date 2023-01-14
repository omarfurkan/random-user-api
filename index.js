const express = require('express');
const app = express();
require('dotenv').config()
const cors = require('cors')
const Port = process.env.Port || 5000;

app.use(express.json())
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello Coding !!!')
})

app.listen(Port, () => {
    console.log(`Running on port ${Port}`)
})