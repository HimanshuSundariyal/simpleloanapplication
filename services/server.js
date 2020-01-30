var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use(express.static(__dirname + '/'));
var mysql = require('mysql');



app.listen(4000, function () {
     console.log('Node app is running on port 000');
 });
 module.exports = app;
 var dbConn = mysql.createConnection({
     host: 'localhost',
     user: 'root',
     password: '',
     database: 'loginsingupreactnode'
 });
 // connect to database
 dbConn.connect(); 
 app.get('/login', function (req, res) {
    var username =  req.query.username;
    var password =  req.query.password;
    var test ="SELECT * FROM usersignup WHERE `user_name` = '"+ username +"' AND `user_pass`= '"+ password +"'";
    dbConn.query("SELECT * FROM usersignup WHERE `user_name` = '"+ username +"' AND `user_pass`= '"+ password +"'", function (error, results, fields) { 
        if (error) throw error;
        if(results.length>0)
        {
            return res.send({data: results, message: 'success'});
        }
        else
        {
            return res.send({message: 'error'});
        }
     });
 });
 
 app.post('/signup',function(req,res){
    var username =  req.body.username;
    var password =  req.body.password;
    var email    =   req.body.email;
    var sql = "INSERT INTO `usersignup` (`user_name`, `user_pass`, `user_email`) VALUES ('"+ username +"', '"+password+"', '"+email+"')";  
    dbConn.query(sql, function (err, result) {  
        if (err){
            console.log(sql);
        }
        else
        { 
        return res.send({message: 'success'});  
        }    
    });  

  });

  app.get('/userdetails', function (req, res) {
    var userID =  req.query.user_id;
    dbConn.query("SELECT * FROM usersignup WHERE `id` = '"+ userID +"'", function (error, results, fields) { 
        if (error) throw error;
        if(results.length>0)
        {
            return res.send({data: results});
        }
        else
        {
            return res.send({message: 'error'});
        }
     });
 });

 app.post('/loanapplication',function(req,res){
    var userID =  req.body.userID;
    var amount =  req.body.amount;
    var loanType    =   req.body.loanType;
    var sql = "INSERT INTO `user_loan_details` (`user_id`, `loan_amount`, `loan_type`) VALUES ('"+ userID +"', '"+amount+"', '"+loanType+"')";  
    dbConn.query(sql, function (err, result) {  
        if (err){
            console.log(sql);
        }
        else
        { 
        return res.send({message: 'success'});  
        }    
    });  

  });




  app.get('/loanapplications', function (req, res) {
    dbConn.query("SELECT * FROM `usersignup` LEFT JOIN `user_loan_details` ON usersignup.id = user_loan_details.user_id", function (error, results, fields) { 
        if (error) throw error;
        if(results.length>0)
        {
            return res.send({data: results, message: 'success'});
        }
        else
        {
            return res.send({message: 'error'});
        }
     });


 }); 
