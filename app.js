const express = require('express');
var mysql = require('mysql');
const morgan=require('morgan');
const bodyParser      = require('body-parser');
const app = express();
const port = 8000;


var connection = mysql.createConnection({
    host: "13.245.134.225",
    user: "hitesh.bhawsar",
    password: "67fo2kwrDUZbANhF@1",
    database: "testing"
});


app.use(morgan('dev'));

app.use(bodyParser.json());

///  endpoint - /  ==> handled by defalut call of GET
app.get('/', (req, res) => {
    return res.end('Server is up');
})

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
    return res.send("done");
})

app.get('/get_student', (req, res) => {
    let studentId = req.query.student_id;

    let query = `select * from student where student_id = ?`;

    connection.query(query,[studentId], function (err, result) {
        if (err) throw err;
        console.log("Result:=== " + JSON.stringify(result));
        return res.send(result);
    });
})


app.post('/create_student', (req, res) => {

    var name = req.body.name;
    var city = req.body.city;
    var address = req.body.address;
    var email = req.body.email;

    var insertStudentQuery = `INSERT INTO 
                                        student 
                                (student_id, student_name, student_city, student_email, student_address) 
                            VALUES 
                                (NULL, ?, ?, ?, ?)`;


    connection.query(insertStudentQuery, [name, city, email, address ], function (err, result) {
        if (err) throw err;
        console.log("Result:=== " + JSON.stringify(result));
        return res.send(result);
    });

})


// CURD -- create , update , read , delete 

connection.connect(function(err) {
    if (err) throw err;
    console.log("===DataBase Connected!====");
});

app.listen(port, (req, res) => {
    console.log("=====server started===on port===", port);
})