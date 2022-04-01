const express = require('express');
const app = express();
const cors = require('cors');


app.use(express.json());
app.use(express());
app.use(cors());


const login = [
    { id:1, username: 'Ali', password: 123 },
    { id:2, username: 'Asad', password: 231 },
    { id:3, username: 'Umer', password: 333 },
]

const register = [
    { id:1, username: 'Asif', email:'a@g.com', password: 333454 },
    { id:2, username: 'Akbar', email:'k@y.com', password: 311777 },
    { id:3, username: 'Anwar', email:'w@g.com', password: 456235 },
]


//Get for login & register
app.get('/api/login', (req, res) => {
    res.send(login);

});

app.get('/api/register', (req, res) => {
    res.send(register);

});
//Get Login by id
app.get('/api/login/:id', (req, res) => {
    const loginID = login.find(d => d.id === parseInt(req.params.id));
    if (!loginID)
        return res.status(404).send('ID does not exist');
    res.send(loginID);
});

//Post for login
app.post('/api/login/', (req, res) => {
    let result = login.find(login => login.username == req.body.username);
    if (result){
        if(result.password == req.body.password){
            res.status(404).send({
                message: "Successfull login"
            })    
        }else{
            res.status(404).send({
                message: "Password Incorrect"
            })
        }
    }else{
        res.status(404).send({
            message: "User not found"
        })
    }

});

//Get Register by id
app.get('/api/register/:id', (req, res) => {
    const registerID = register.find(d => d.id === parseInt(req.params.id));
    if (!registerID)
        return res.status(404).send('ID does not exist');
    res.send(registerID);
});

//Post for Register
app.post('/api/register', (req, res) => {
        if (!req.body.name || req.body.name.length<8){
            res.status(400).send({
                message: "Registration Successfull"
            })
        return;
    }
});


app.listen(8080, () => console.log('Listening on port 8080..')); 