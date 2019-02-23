const route=require('express').Router()
const Users=require('../db').Users


route.get('/',(req,res)=>{
    if(req.user){
        res.render('home')
    }
   
    else{
        res.redirect('/login')
    }
   
})

route.post('/',(req,res)=>{
    if(req.user){
        Users.findOne({
            where: {
                username: req.user.username
            }
        })
        .then((user)=>{
            res.send(user.cartBox)
        })
    }
    else
    res.redirect('/login')
    
})

module.exports=route