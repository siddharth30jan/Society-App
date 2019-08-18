$(()=>{

    let idBox=$('#box')
    
   async function doit(temp){
        for(X of temp){
            idBox.append(`<h3>${X}</h3>`)
            console.log(X);
            await $.post('/societydata/fetch',{
                name: X
            },(data)=>{
                console.log("Andar "+ data);
                let temp=data.split('##')
                for(Y of temp)
                idBox.append(`<li>${Y}</li>`)
            })
        }
    }
    
    $.post('/home',(data)=>{
        idBox.empty()
        let temp=data.split(' ')
        console.log(temp);
        temp.pop();
        
        //X ->subscribed societies!!
        doit(temp)        
    })
})