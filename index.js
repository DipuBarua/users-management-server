const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

const users = [
    { id: 1, name: 'khondokar', email: 'kondokar@gmail.com' },
    { id: 2, name: 'Ondokar', email: 'Ondokar@gmail.com' },
    { id: 3, name: 'jane Alom', email: 'alom@gmail.com' },
]
//Middleware: cors to linked - get
app.use(cors());
//Middleware: exprss.json() to linked - post
app.use(express.json());

// get form serve 
app.get('/', (req, res) => {
    res.send("user management server");
});
app.get('/users', (req, res) => {
    res.send(users);
});

// post in server 
app.post('/users', (req, res) => {
    console.log('post api hitting');
    console.log(req.body);
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.send(newUser);
})

app.listen(port, () => {
    console.log(`server port: ${port}`);
})