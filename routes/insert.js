const route=require('express').Router()
const Users=require('../db').Users


route.post('/',(req,res)=>{
   if(req.user){
       Users.findOne({
           where:{
               username: req.user.username
           }
       })
       .then((user)=>{
           let temp=user.cartBox
           if(!temp.includes(req.body.id)){    //Contains the current subscribed society
               console.log("Haan chala")
            temp+=req.body.id+ " "
            user.update({
             cartBox: temp
            }).then((user) => {
                res.send(user)
            }).catch((err)=>res.send(err));
           }
           else
           res.send(user)
           
       })
   }
   else
   res.redirect('/login')
})
   
module.exports=route