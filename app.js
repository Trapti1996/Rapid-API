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


app.post('/concatenate',(req,res)=>{
    const { first_name, last_name }= req.body;

    if (!first_name || !last_name) {
        return res.status(400).json({ error: 'Both first_name and last_name are required'});
        }

    const full_name ='${first_name} $ {last_name}';
    res.json({ full_name });
    
    
});

app.listen(port, (req, res) => {
    console.log("=====server started===on port===", port);
})