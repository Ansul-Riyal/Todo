const express = require('express');
const app = express();
const port = 3000;
app.express

function isLoggedIn(req,res,next){
    if(req.session && req.session.user){
        return next();
    } else {
        res.redirect('/login');
    }
}

app.get('/',isLoggedIn,(req,res)=>{
    res.sendFile(__dirname+"/src/index.html")
})

app.get('/login',(req,res)=>{
    res.sendFile(__dirname+"/src/login.html")   
})

app.listen(port,()=>{
    console.log(`This is Server Running on port ${port}`);
})

