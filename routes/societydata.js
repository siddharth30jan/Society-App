const route=require('express').Router()
const Societies=require('../db').Societies

route.get('/',(req,res)=>{
    res.render('societydata')
})
route.post('/',(req,res)=>{
    console.log("yhan " +req.body.name)
    Societies.findOne({
        where: {
            SocietyName: req.body.name
        }
    })
    .then((society)=>{
        let temp=society.SocietyNotif
        temp+=req.body.data+ "##"
        society.update({
         SocietyNotif: temp
        }).then((society) => {
            res.send(society)
        })
    })
    .catch((err)=>{
        res.send('error')
    })
})

//For returning data

route.post('/fetch',(req,res)=>{
    Societies.findOne({
        where: {
            SocietyName: req.body.name
        }
    }).then((society)=>{
        res.send(society.SocietyNotif)
    })
})

module.exports=route