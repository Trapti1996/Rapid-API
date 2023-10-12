const express = require('express');
const morgan=require('morgan');
const bodyParser      = require('body-parser');
const app = express();
const port = 8000;

app.use(morgan('dev'));

app.use(bodyParser.json());

///  endpoint - /  ==> handled by defalut call of GET
app.get('/user', (req, res) => {


    //let name = req.query.name;
    //let phone = req.query.phone;


    //console.log("Name =", name);
    //console.log("Phone no =", phone);
    


        //res.status(200).send('OK');
        let user_id = req.query.user_id;
        let user = {
            user_id: 123,
            name: "tolu",
            email: "tolu@7777.com",
        };

        console.log("User_Id=", user_id);
        console.log("Name=", user.name); 
        console.log("Email=", user.email);

        res.status(200).json(user);

     
});

/*
{
    "first_name": "hakjseh",
    "last_name": "ajhgdkj"
}
*/
app.post('/user_info', (req, res) => {


    //let {first_num, second_num, third_num} =req.body;
    //let first_num = req.body.first_num;
    //let second_num = req.body.second_num;
    //let third_num = req.body.third_num;

    //let sum_three_number = first_num + second_num + third_num;

    //console.log("First Number =", first_num);
    //console.log("Second Number =", second_num);
    //console.log("Third Number =", third_num);
    //console.log("Sum of Three Numbers =", sum_three_number);

    //res.status(200).json({ sum_three_number });
    let name = req.body.name;
    let phone = req.body.phone;
    let email = req.body.email;
    let id = req.body.id;
    let user_info={name,phone,email,id};

    console.log("Name=",name);
    console.log("Phone=",phone);
    console.log("Email=",email);
    console.log("Id=",id);

    res.status(200).json({user_info});
    
   
});


app.listen(port, (req, res) => {
    console.log("=====server started===on port===", port);
});