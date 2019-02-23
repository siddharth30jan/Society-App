const route=require('express').Router()
const Society=require('../db').Societies

route.get('/',(req,res)=>{
   if(req.user){
    res.render('subscription_page')
   }
   else{
       res.redirect('/login')
   }
   
   
})


route.get('/all',(req,res)=>{
    if(req.user){
        Society.findAll()
        .then((societies)=>{
            res.send(societies)
        })
        .catch((err)=>{
            res.send(err)
        })
    }
    else{
        res.redirect('/login')
    }
       
   
    
})


/*route.post('/sub',(req,res)=>{
    
})*/

module.exports=route