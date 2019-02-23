const route=require('express').Router()
const passport=require('../passport')

route.get('/',(req,res)=>{
   res.render('login')
})

route.post('/',passport.authenticate('local',{
  failureRedirect: '/login',
  successRedirect: '/home'
}))
module.exports=route