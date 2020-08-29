var newElement = document.createElement("div");
var elm = document.getElementById("sec");

newElement.innerHTML += `
<div class="gallery" id="gallery">
          <a href="./galeria/realizacje/architektura/001/001.html">
            <img src="content/projekty/architektura/grupaVERSO-architektura-1.webp" alt="">
          </a>
          <div class="gallery-description">
            <p>Dom leśny <br> <span>Kuźnica Kiedrzyńska • 2019</span></p>
          </div>
          <img src="content/projekty/architektura/grupaVERSO-architektura-2.webp" alt="">
          <div class="gallery-description">
            <p>Biuro PROTOS <br> <span>Czarny las • 2018</span></p>
          </div>
          <img src="content/projekty/architektura/grupaVERSO-architektura-3.webp" alt="">
          <div class="gallery-description">
            <p>Dom na łące <br> <span>Cisie pod Częstochową • 2018</span></p>
          </div>
          <img src="content/projekty/architektura/grupaVERSO-architektura-4.webp" alt="">
          <div class="gallery-description">
            <p>Dom rodzinny<br> <span>Kuźnica Kiedrzyńska • 2013</span></p>
          </div>
          <img src="content/projekty/architektura/grupaVERSO-architektura-5.webp" alt="">
          <div class="gallery-description">
            <p>Bliźniaki sąsiedzkie<br> <span>Częstochowa • 2017</span></p>
          </div>
</div>
`;
function onClick() {
  //    document.body.appendChild(element);
  elm.appendChild(newElement);
}
// swiper
var swiper = new Swiper(".swiper-container", {
  slidesPerView: "auto",
  lazy: {
    loadPrevNext: true,
    preloadImages: false,
    lazy: true,
  },
  mousewheel: {
    invert: false,
  },
  autoplay: {
    delay: 1800,
    disableOnInteraction: false,
  },
  keyboard: {
    enabled: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  centeredSlides: true,
  freeMode: false,
  spaceBetween: 0,
  speed: 1200,
});
// pogrubianie linków
const allImages = document.querySelector(".projekty-links a:nth-of-type(1)");
const archiImages = document.querySelector(".projekty-links a:nth-of-type(2)");
const interiorsImages = document.querySelector(
  ".projekty-links a:nth-of-type(3)"
);

archiImages.addEventListener("click", function () {
  allImages.classList.remove("active");
  interiorsImages.classList.remove("active");
  archiImages.classList.add("active");
});

allImages.addEventListener("click", function () {
  allImages.classList.add("active");
  interiorsImages.classList.remove("active");
  archiImages.classList.remove("active");
});

interiorsImages.addEventListener("click", function () {
  interiorsImages.classList.add("active");
  allImages.classList.remove("active");
  archiImages.classList.remove("active");
});

//Grupowanie
function wnetrzaFun() {
  var elemsWnetrza = document.getElementsByClassName('wnetrza');
  var elemsArchitektura = document.getElementsByClassName('architektura');
  for (var i = 0; i < elemsWnetrza.length; i += 1) {
    elemsWnetrza[i].style.display = 'block';
  }
  for (var i = 0; i < elemsArchitektura.length; i += 1) {
    elemsArchitektura[i].style.display = 'none';
  }
}
function architekturaFun() {
  var elemsWnetrza = document.getElementsByClassName('wnetrza');
  var elemsArchitektura = document.getElementsByClassName('architektura');
  for (var i = 0; i < elemsWnetrza.length; i += 1) {
    elemsWnetrza[i].style.display = 'none';
  }
  for (var i = 0; i < elemsArchitektura.length; i += 1) {
    elemsArchitektura[i].style.display = 'block';
  }
}
function wszystkieFun() {
  var elemsWnetrza = document.getElementsByClassName('wnetrza');
  var elemsArchitektura = document.getElementsByClassName('architektura');
  for (var i = 0; i < elemsWnetrza.length; i += 1) {
    elemsWnetrza[i].style.display = 'block';
  }
  for (var i = 0; i < elemsArchitektura.length; i += 1) {
    elemsArchitektura[i].style.display = 'block';
  }
}
