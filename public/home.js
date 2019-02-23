$(()=>{

    let idBox=$('#box')
    
   async function doit(temp){
        for(X of temp){
            idBox.append(`<h3>${X}</h3>`)

            await $.post('/societydata/fetch',{
                name: X
            },(data)=>{
                let temp=data.split('##')
                for(Y of temp)
                idBox.append(`<li>${Y}</li>`)
            })
        }
    }
    
    $.post('/home',(data)=>{
        idBox.empty()
        let temp=data.split(' ')
        //X ->subscribed societies!!
        doit(temp)        
    })
})