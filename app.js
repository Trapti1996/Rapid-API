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


app.post('/sum',(req,res)=>{
    console.log("Num 1="+req.params.num1)
    console.log("Num 2="+req.params.num2)
    console.log("Result="+req.params.num1+req.params.num2)
    res.send("this is save page")
    res.end();

    
})

app.listen(port, (req, res) => {
    console.log("=====server started===on port===", port);
})