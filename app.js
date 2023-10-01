const express = require('express');
const app = express();
const port = 8000;



///  endpoint - /  ==> handled by defalut call of GET
app.get('/', (req, res) => {
    return res.end('Server is up');
})

app.listen(port, (req, res) => {
    console.log("=====server started===on port===", port);
})