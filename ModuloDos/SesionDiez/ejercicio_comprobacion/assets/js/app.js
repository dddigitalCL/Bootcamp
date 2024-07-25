// Estilos base del doucumento al iniciar
$(document).ready(function(){
    //estilos del primer bloque de texto
    $('#text1').css('background-color','purple');
    $('#text1').css('display','inline-block');

    //estilos del segundo bloque de texto
    $('#text2').css('background-color','orange');
    $('#text2').css('display','inline-block');
    $('#text2').hide();

    //Estilos del cubo (no estamos modificando imagen, ya que utilizamos un bloque como ejemplo)
    $('#caja2').css('background-color','black');
    $('#caja2').css('display','black');
    $('#caja2').css('margin-top','10px');
    $('#caja2').css('height','100px');
    $('#caja2').css('width','100px');

    // estilos base del texto bajo del cubo
    $("#caja3 p")[0].style.fontSize = "1rem";
})

$('#text1').hover(function(){
        $('#text2').toggle();
})


$('#caja2').click(function(){
    $('#caja2').css('height','300px');
    $('#caja2').css('width','300px');
})

$('#caja2').mouseleave(function(){
    $('#caja2').css('height','100px');
    $('#caja2').css('width','100px');
})

$("#caja3").dblclick(function(){

    if($("#caja3 p")[0].style.fontSize == '1rem'){
        $("#caja3 p").css('font-size', '3rem');
    }else{
        $("#caja3 p").css('font-size', '1rem');
    }
})