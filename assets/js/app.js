$(document).ready(function() {

    function adjustWindow() {
        let $height = $(window).height();
        let $width = $(window).width();
        $('body').height($height);
        $('body').width($width);
        if($width < 768){
         $('body').removeClass('container');
         $('.right').removeClass('justify-content-end').addClass('justify-content-center rounded-circle')
        }else{
         $('body').addClass('container');
         $('.right').addClass('justify-content-end').removeClass('justify-content-center')
        }
    }
    adjustWindow();

    $(window).resize(function() {
        adjustWindow();
    });

    $('.portafolio').hide();
    $('.contacto').hide();
    $('[name="about"]').addClass("active")
    let $secciones = $('.navbar-nav a')
    $secciones.on("click",function(e){
        e.preventDefault();
        $('a').removeClass("active");
        $(this).addClass("active");
         $.each($secciones, function(index, selector){
             let $elemento = $(selector);
             if($elemento.hasClass('active') && $elemento.text() === "Portafolio"){
                $('.portafolio').show();
                $('.about').hide();
                $('.contacto').hide();
             }else if($elemento.hasClass('active') && $elemento.text() === "Contacto"){
                $('.portafolio').hide();
                $('.about').hide();
                $('.contacto').show();
             }else if(($elemento.hasClass('active') && $elemento.text() === "Sobre mí")){
                $('.portafolio').hide();
                $('.about').show();
                $('.contacto').hide();
             }else{
                console.log("ninguna seleccionado")
             }
         });
    })

    const tecnologia = [
        {
            titulo:"Aplication Management Specialist",
            descripcion:"Un especialista en gestión de aplicaciones es un profesional que supervisa el rendimiento, la disponibilidad y la seguridad de las aplicaciones de bases de datos. Las aplicaciones de bases de datos son programas de software que utilizan bases de datos para almacenar, recuperar y manipular datos. Entre los ejemplos de aplicaciones de bases de datos se incluyen la gestión de relaciones con los clientes (CRM), la planificación de recursos empresariales (ERP) y las plataformas de comercio electrónico. Un especialista en gestión de aplicaciones garantiza que estas aplicaciones funcionen sin problemas, cumplan con los requisitos de los usuarios y cumplan con los estándares de la industria.",
            id:"ams"
        },
        {
            titulo:"Adobe Experience Manager",
            descripcion:"sistema de gestión de activos digitales (DAM, por sus siglas en inglés) que te proporciona herramientas y automatización para obtener, adaptar y distribuir tus activos rápidamente entre todos tus públicos y canales, y así dedicar menos tiempo a buscar y ajustar contenidos.",
            id:"aem"
        },
        {
            titulo:"Front End",
            descripcion:"El desarrollo web front-end se refiere a la práctica de construir y diseñar la interfaz de usuario de un sitio web o aplicación. Esto implica trabajar con tecnologías del lado del cliente, como HTML, CSS y JavaScript, para crear páginas web interactivas y visualmente atractivas.",
            id:"fe"
        },
        {
            titulo:"Vuejs",
            descripcion:"Vue es un framework progresivo para construir interfaces de usuario. A diferencia de otros frameworks monolíticos, Vue está diseñado desde cero para ser utilizado incrementalmente. La librería central está enfocada solo en la capa de visualización, y es fácil de utilizar e integrar con otras librerías o proyectos existentes. Por otro lado, Vue también es perfectamente capaz de impulsar sofisticadas Single-Page Applications cuando se utiliza en combinación con herramientas modernas y librerías de apoyo.",
            id:"vue"
        },
        {
            titulo:"Java Developer",
            descripcion:"es un/a profesional de IT que se especializa en el desarrollo de software utilizando el lenguaje de programación Java.",
            id:"java"
        },
        {
            titulo:"Graphic Design",
            descripcion:"Comunicadores que, mediante herramientas tecnológicas o a mano, son capaces de crear nuevos conceptos. El objetivo es llegar a su público a través de un mensaje que capte su atención y que conecte con ellos. Para transmitir estas ideas, se pueden utilizar diferentes herramientas. Por ejemplo, el uso de fuentes, formas y colores para crear mensajes visuales impactantes visualmente.",
            id:"design"
        },
        {
            titulo:"UX/UI",
            descripcion:"El profesional encargado de UI se centrará en el diseño del producto, impactando en la primera impresión visual del usuario, mientras que el responsable de UX se centra en la usabilidad y la facilidad de navegación, creando determinadas emociones y sensaciones al utilizar la interfaz.",
            id:"ux"
        },
    ];
    let $modalID = $("#detalles");
    creatModal();
    $(".detalles .card").hide();

    $('p span').on('mouseenter',function(){
        let $identificator = $(this).attr("class"); 
        let $modalID = $(".detalles"); 
        $modalID.css("display","block");
        tecnologia.forEach(function(objeto){ 
          if(objeto.id === $identificator){
            $(".detalles .card."+objeto.id).show();
          }
        });
    })
    
    $('p span').on('mouseout',function(){
        $modalID.css("display","none");
        $(".detalles .card").hide();
    })


    function creatModal(){
        modal = "";
        tecnologia.forEach(function (objeto) {
          modal += `
          <div class="col-md-6 col-lg-4 card text-bg-dark ${objeto.id} me-4">
            <div class="card-body">
                <h5 class="card-title"><strong>${objeto.titulo}</strong></h5>
                <p class="card-text">${objeto.descripcion}</p>
            </div>
          </div>`
        });
        $modalID.html(modal);
      }
      
/* ------ INICIO DE JS CONTACTO ------- */

    $('.name-div').hide();
    $('.text-area-div').hide();
    $('form button').attr('disabled', true);
    let $formEmail = $('#email');
    let $formName = $('#name');
    let $formText = $('#consulta');

    $formEmail.on('input',function(){
        if(validarEmail($(this).val())){
            $('form button').removeAttr('disabled');
            $('form button').removeClass('btn-outline-dark').addClass('btn-dark')
            $('.name-div').show();
            $('.text-area-div').show();
        }else{
            $('form button').attr('disabled', true);
            $('.name-div').hide();
            $('.text-area-div').hide();
        }
    })

    function validarEmail(email) {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
    }
 
    $('form button').on('click',function(e){
        e.preventDefault();
        validacionInputs();

    })

    $formName.on('input',function(){
        $formName.removeClass('border border-danger');
    })

    $formText.on('input',function(){
        $formText.removeClass('border border-danger');
    })
    function validacionInputs(){
        let $email = $formEmail.val();
        let $name = $formName.val();
        let $textArea = $formText.val();
        let contador = 0;

        if($email !== ""){
            contador++;
        }else{
            $formEmail.addClass('border border-danger');
            $formEmail.attr('placeholder', 'debes agregar un correo');
        }

        if($name !== "" ){
            contador++
        }else{
            $formName.addClass('border border-danger');
            $formName.attr('placeholder', 'debes agregar un nombre');
        }
        if($textArea !== "" ){
            contador++
        }else{
            $formText.addClass('border border-danger');
            $formText.attr('placeholder', 'debes agregar una consulta');
        }

        if(contador === 3){
            alert("correcto")
        }else{
        }
    }

});


