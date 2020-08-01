// Importing the express module
var express = require('express');  
      

var app = express();                          // Initialization of express module
var bodyParser = require('body-parser');   
app.use(bodyParser());
app.set('view engine','ejs');                 // view enging for ejs files

app.get('/',function(req,resp){               // HomePage
    resp.render('homepage')
    
});

app.get('/index',function(req,resp){         // Render to index page
    resp.render('index');
})
app.get('/login',function(req,resp){
    var user = {uname:'',pwd:'',msg:''};
    resp.render("login",{user:user});
});

// Render to get to login page
app.post('/login',function(req,resp){  
    var user = {uname:'',pwd:'',msg:''};
    user.uname = req.param('user.uname');
    user.pwd = req.param('user.pwd');
    if(user.uname == 'Nikhil' && user.pwd == 'champs')
        // user.msg = 'Creditial are valid';
       resp.redirect('/dashboard');
    else 
        user.msg = 'Invalid Creditial';
                                            
    resp.render('login',{user:user});
})



app.get('/dashboard',function(req,resp){     // Render to dashboard page
    resp.render('dashboard');
})

app.get('/confidential',function(req,resp){ // Render to confidential page
    resp.render('confidential');
})

app.get('/register',function(req,resp){ // Render to confidential page
    resp.render('register');
})

app.listen(8000,()=> console.log('API started listening....!!'));// listening to the server