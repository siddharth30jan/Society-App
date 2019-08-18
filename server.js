const express=require('express')
const path=require('path')
const passport = require('./passport');
const session=require('express-session')
const app=express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.set("view engine","hbs")

app.use(session({
    secret: 'somesecretstring'
}))
app.use(passport.initialize());
app.use(passport.session());




app.use('/mofo',express.static(path.join(__dirname,'public')))


//Endpoints!
app.use('/login',require('./routes/login'))
app.use('/signup',require('./routes/signup'))
app.use('/home',require('./routes/home'))
app.use('/subscribe',require('./routes/subscribe'))
app.use('/admin',require('./routes/admin'))
app.use('/insert',require('./routes/insert'))
app.use('/societydata',require('./routes/societydata.js'))
app.get('/logout', function(req, res){
    req.logout();
    res.redirect('/login');
  });



app.listen(3007)