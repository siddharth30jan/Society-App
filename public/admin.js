$(function(){
    let society=$('#name')

    $('#press').click(()=>{
        $.post('/admin/add',{
            name: society.val()
        },(data)=>{
            alert("Succesfully Added " + data.SocietyName)
        })
    })
})