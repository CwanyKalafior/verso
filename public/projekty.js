$(function () {
  var obj;
  var content_number = 5;
  var start_number = 0;
  fetch("../galeria.json")
    .then((res) => res.json())
    .then((data) => (obj = data))
    .then(() => {

      obj.sort(function (a, b) {
        return parseFloat(a.kolejnosc) - parseFloat(b.kolejnosc);
      });



      obj.forEach((element) => {
        if (element.zrealizowano_wtrakcie === "zrealizowano") {

          document.getElementById("gallery").innerHTML += `<div class="${element.architektura_wnetrza}">
            <a href="./projekty/${element.nazwa_projektu}.html">
              <img src="${element.zdjecie_glowne}" alt="${element.nazwa}">
            </a>
            <div class="gallery-description">
              <p>${element.nazwa} <br> <span>${element.lokalizacja} • ${element.ukonczono}</span></p>
            </div>
          </div>`;
        }

        else if (element.zrealizowano_wtrakcie === "wtrakcie") {
          document.getElementById("swiper-wrapper").innerHTML += `<div class="swiper-slide">
          <img src="${element.zdjecie_glowne}" alt="">
        </div>`;
        }

      });
    });
});

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
