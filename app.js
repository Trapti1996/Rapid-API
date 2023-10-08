const express = require('express');
const morgan=require('morgan');
const bodyParser      = require('body-parser');
const app = express();
const port = 8000;

app.use(morgan('dev'));

app.use(bodyParser.json());

///  endpoint - /  ==> handled by defalut call of GET
app.get('/', (req, res) => {
    return res.end('Server is up');
})


app.post('/helth_check', (req, res) => {
    return res.send(req.body.customers);
})

app.listen(port, (req, res) => {
    console.log("=====server started===on port===", port);
})