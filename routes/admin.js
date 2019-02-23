const route=require('express').Router()
const Society=require('../db').Societies

route.get('/',(req,res)=>{
    res.render('admin')
})


route.post('/add',(req,res)=>{
   Society.create({
       SocietyName: req.body.name,
       SocietyNotif: ""
   })
   .then((society)=>{
       res.send(society)
   })
})



module.exports=route