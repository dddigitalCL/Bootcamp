

const tarjetas = [
  {
    titulo: "Buenos Aires",
    descripcion:
      "Descubre la magia de Buenos Aires: tango apasionado, arquitectura vibrante, gastronomía exquisita y cultura envolvente te esperan",
    descripcionModal:
      "Explora Buenos Aires y descubre sus joyas culturales. Visita el emblemático barrio de La Boca, hogar del famoso Caminito, con sus coloridas casas y artistas callejeros. Recorre el histórico barrio de San Telmo, conocido por sus ferias de antigüedades y su arquitectura colonial. No te pierdas el elegante barrio de Recoleta, donde encontrarás el Cementerio de la Recoleta y el icónico Teatro Colón. Sumérgete en la vida nocturna en Palermo Soho, con sus bares y restaurantes trendy. Buenos Aires ofrece una experiencia inolvidable llena de historia, arte y diversión.",
    foto: "baires.jpg",
  },
  {
    titulo: "Machu Picchu",
    descripcion:
      "Embárcate en una aventura única en Machu Picchu: misteriosa historia, paisajes impresionantes y una experiencia inolvidable te aguardan",
    descripcionModal:
      "Descubre la majestuosidad de Machu Picchu, una maravilla arqueológica enclavada en las montañas de los Andes peruanos. Explora sus impresionantes terrazas incas, el Templo del Sol y la Puerta del Sol con vistas panorámicas. Sumérgete en la rica historia que envuelve cada piedra y disfruta de la energía mística del lugar. Las rutas de senderismo como el Camino Inca te llevan a través de paisajes espectaculares. Machu Picchu, declarada Patrimonio de la Humanidad, ofrece una experiencia inolvidable, donde la cultura ancestral y la naturaleza se entrelazan de manera única.",
    foto: "machupicchu.jpg",
  },
  {
    titulo: "Río de Janeiro",
    descripcion:
      "Vive la energía vibrante de Río de Janeiro: playas deslumbrantes, carnaval inolvidable, música contagiosa y una alegría incomparable te esperan.",
    descripcionModal:
      "Explora la exuberante belleza de Río de Janeiro, conocida por sus icónicas playas como Copacabana e Ipanema, donde el sol brilla sobre arenas doradas y aguas cristalinas. Asciende al famoso Cristo Redentor para disfrutar de vistas panorámicas de la ciudad y la bahía de Guanabara. Sumérgete en el vibrante carnaval, donde la samba y el color deslumbran las calles. Descubre la autenticidad en el bohemio barrio de Santa Teresa y saborea la cocina brasileña en el Mercado Municipal. Río de Janeiro, con su energía contagiosa, te espera para vivir experiencias inolvidables.",
    foto: "rio.jpg",
  },
];

let cardsID = $("#tarjeta-basic");
let modalID = $("#detalles");
createCards();
creatModal();

function createCards() {
  cards = "";
  tarjetas.forEach(function (objeto) {
    cards += `
    <div class="col">
      <div class="card h-100">
        <img src="assets/img/${objeto.foto}" class="card-img-top" alt="${objeto.titulo}">
          <div class="card-body">
            <h5 class="card-title">${objeto.titulo}</h5>
            <p class="card-text">${objeto.descripcion}</p>
          </div>
          <div class="card-footer">
            <i class="text-body-secondary vermas" id="${objeto.titulo}">Ver más</i>
          </div>
          </div>
      </div>
    </div>`
  });
  cardsID.html(cards);
}

function creatModal(){
  modal = "";
  tarjetas.forEach(function (objeto) {
    modal += `
    <div class="card m-5 ${objeto.titulo.replace(/ /g, "")}" >
          <button type="button" class="btn-close" aria-label="Close"></button>
          <div class="row g-0">
            <div class="col-md-6">
              <img src="assets/img/${objeto.foto}" class="img-fluid rounded-start" alt="${objeto.titulo}">
            </div>
            <div class="col-md-6">
              <div class="card-body">
                <h5 class="card-title">${objeto.titulo}</h5>
                <p class="card-text">${objeto.descripcionModal}</p>
                <p class="card-text"><small class="text-body-secondary">Ver vuelos disponibles</small></p>
              </div>
            </div>
          </div>
        </div>`
  });
  modalID.html(modal);
}

let botonVerMas = $(".vermas");
let closeBtn  = $(".btn-close")

botonVerMas.on("click", function (){
  let identificator = $(this).attr("id").replace(/ /g, ""); let modalID = $(".detalles"); 
  modalID.toggle();
  tarjetas.forEach(function(objeto){ 
    $(".detalles .card.m-5."+objeto.titulo.replace(/ /g, "")).hide(); 
    if(objeto.titulo.replace(/ /g, "") === identificator){
      $(".detalles .card.m-5."+objeto.titulo.replace(/ /g, "")).show();
    }
  });
//
closeBtn.on("click", function(){
  modalID.css("display","none")
})
});






