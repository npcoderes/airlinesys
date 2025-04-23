const express= require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./db');
const app = express();
const port = process.env.PORT || 3000;
const authController = require('./controllers/authController');

app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.post('/register', authController.register);
app.post('/login', authController.login);




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})