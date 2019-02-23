$(()=>{
    let name=$('#name')
    let data=$('#data')


    $('#but').click(()=>{
        $.post('/societydata',{
            name: name.val(),
            data: data.val()
        },(data)=>{
            console.log(data)
          if(data!='error'){
              alert("Succesfully added!")
          }else{
              alert("Not found!")
          }
        })
    })
})