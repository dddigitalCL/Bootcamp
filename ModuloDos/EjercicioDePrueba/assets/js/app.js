

let peliculas = [{
    capture: "https://www.ecartelera.com/carteles/11000/11061/003_p.webp",
    description:"Fede Alvarez vuelve a Ghost House Thriller para una nueva película de terror, tras el gran éxito que obtuvo con el remake del clásico de cine de horror, 'Posesión infernal'. ",
    titulo:"NO RESPIRES"
},
{
    capture: "https://hips.hearstapps.com/hmg-prod/images/dont-breathe-2-poster-fotogramas-1625770267.jpeg?resize=768:*",
    description:"Stephen Lang, un martillo y un cristal en las últimas protagonizan el póster de ‘No respires 2’ (Rodo Sayagues, 2021), continuación de aquella maravillosa sorpresa llamada ‘No respires’ (Fede Álvarez, 2016) en la que un grupo de jóvenes cree haber encontrado la oportunidad de cometer el crimen perfecto: robar varios miles de dólares a un ciego solitario. Por suerte para nosotros, que no para ellos, la cosa se complica.",
    titulo:"NO RESPIRES 2"
}];

$(function(){
    createCards();
})

function addMovie(name,descrition,capture){
    let pelicula = {
        titulo:name,
        description:descrition,
        capture:capture
    }
    peliculas.push(pelicula)
}

$("#form-add-movie").on("submit",function(e){
    e.preventDefault();
    addMovie($("#title").val(),$("#description").val(),$("#capture").val());
    createCards();
    $("#title").val("");
    $("#description").val("");
    $("#capture").val("");
})

let cardsID = $("#tarjeta-basic");
function createCards() {
    cards = ""; 
    peliculas.forEach(function(position,index){ // forEach de JS E6
    // $.each(peliculas, function (index, position) { // forEach de jQuery
      cards += `
      <div class="col pb-3">
        <div class="card shadow-sm">
          <img src="${position.capture}" class="card-img-top" height="300px" alt="${position.titulo}">
            <div class="card-body fixed-height">
              <h5 class="card-title fw-bold">${position.titulo}</h5>
              <p class="card-text" >${position.description}</p>
            </div>
            <div class="card-footer">
              <i class="text-body-secondary vermas" id="pelicula-${index}">Ver más</i>
            </div>
            </div>
        </div>
      </div>`
    });
    cardsID.html(cards);
  }


