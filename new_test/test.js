const express = require('express');
const morgan=require('morgan');
const bodyParser      = require('body-parser');
const app = express();
const port = 8000;

app.use(morgan('dev'));

app.use(bodyParser.json());

///  endpoint - /  ==> handled by defalut call of GET
app.get('/ok', (req, res) => {

    let query = req.query;

    let name = req.query.name;
    let phone = req.query.phone;


    console.log("Name =", name);
    console.log("Phone no =", phone);
    


        res.status(200).send('OK');
     
});

/*
{
    "first_name": "hakjseh",
    "last_name": "ajhgdkj"
}
*/
app.post('/user', (req, res) => {

    let body = req.body;
    let firstName = body.first_name;
    let lastName = body.last_name;
    
    let fullName = firstName + " " + lastName;

    console.log("--this is body-->>", fullName);

    let response = {
        fullName : fullName,
    }
    return res.send(response);
})


app.listen(port, (req, res) => {
    console.log("=====server started===on port===", port);
})