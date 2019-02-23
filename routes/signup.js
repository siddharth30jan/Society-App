const route=require('express').Router()
const Users=require('../db').Users
route.get('/',(req,res)=>{
    res.render('signup')
})

route.post('/',(req,res)=>{
    Users.create({
        username: req.body.username,
        password: req.body.password,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        cartBox: ""
    }).then((createdUser)=>{
        res.redirect('/login')
    })    
})
   
module.exports=route