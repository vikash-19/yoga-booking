const express =  require('express') ;
const app =  express() ;
const {registerRoute, loginRoute , detailsRoute} = require('./routes') ;
const bodyParser = require('body-parser') ;
const session = require('cookie-session') ;
const cookieParser = require('cookie-parser');
const cors = require('cors')

app.use(session({
    secret: process.env.SECRET_KEY ,
    resave: false,
    saveUninitialized: true,
    cookie: {  maxAge :  30000},
  }))

app.use(bodyParser.json()) ;
app.use('/register' , registerRoute ) ;
app.use('/login', loginRoute) ;

app.get('/logout' , (req , res)=>{
    try{
        req.session = null ;
        res.status(200).send("Logout successfull!");
    }catch(err){
        console.log(err.message??"Logout failed!")
        res.status(501).send(err.message??"Logout failed!") ;
    }
    
})
app.use(cors(['http://localhost:3000']))
app.use('/', detailsRoute) ;
module.exports =  app  ;