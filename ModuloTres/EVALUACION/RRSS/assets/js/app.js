
let main = $('.main');
let secondary = $('.secondary');

$('.side-msj__box').on("click", function(){

    secondary.addClass("transition-show").removeClass("transition-hide");
});

$('.chat__return').on("click", function(){

    secondary.addClass("transition-hide").removeClass("transition-show");
});