const express = require('express');
const app = express();
require('dotenv').config()
const cors = require('cors');
const userRoutes = require('./Routes/user.routes');
const Port = process.env.Port || 5000;

app.use(express.json())
app.use(cors());


app.use('/user', userRoutes);





app.get('/', (req, res) => {
    res.send('Hello Coding !!!')
})

app.listen(Port, () => {
    console.log(`Running on port ${Port}`)
})


// process.on('unhandledRejection', (error) => {
//     console.log(error.name, error.message);
//     app.close(() => {
//         process.exit(1)
//     })
// })