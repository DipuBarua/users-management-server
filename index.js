const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

const users = [
    { id: 1, name: 'khondokar', email: 'kondokar@gmail.com' },
    { id: 2, name: 'Ondokar', email: 'Ondokar@gmail.com' },
    { id: 3, name: 'jane Alom', email: 'alom@gmail.com' },
]

app.use(cors());

app.get('/', (req, res) => {
    res.send("user management server");
});

app.get('/users', (req, res) => {
    res.send(users);
});

app.listen(port, () => {
    console.log(`server port: ${port}`);
})