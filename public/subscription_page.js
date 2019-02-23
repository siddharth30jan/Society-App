$(function(){
    let box=$('#society_box')
    $.get('/subscribe/all',(data)=>{
        box.empty()
        for(X of data){
            box.append(`<h3>${X.SocietyName}</h3><br><a href="#${X.SocietyName}" ><button>SUBSCRIBE</button></a>`)
        }
       
    })


    
    window.addEventListener('hashchange',function(){
        const id=window.location.hash.replace('#','');
       // console.log(id)
        $.post('/insert',{id: id},(data)=>{
            alert('Succesfully Subscribed to '+ id)
        })        
    })

    
})