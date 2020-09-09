var starting_slice_point = 0;
var number_of_elements = 5;
var all;
var architektura_all;
var wnetrza_all;

$(function () {
  var obj;
  fetch("../galeria.json")
    .then((res) => res.json())
    .then((data) => (obj = data))
    .then(() => {

      obj.sort(function (a, b) {
        return parseFloat(a.kolejnosc) - parseFloat(b.kolejnosc);
      });


      //filter data -> architektura
      architektura_all = obj.filter(element => element.architektura_wnetrza === "architektura")

      //filter data -> wnetrza
      wnetrza_all = obj.filter(element => element.architektura_wnetrza === "wnetrza")

      //filter data -> all
      all = obj.filter(element => element.architektura_wnetrza !== "")

      //slice data
      all = obj.slice(starting_slice_point, number_of_elements);
      console.log(all);


      $(document).on('click', '#btn', function () {

        number_of_elements += 5;
        starting_slice_point += 5;
        all = obj.slice(starting_slice_point, number_of_elements);
        all.forEach((element) => {
          document.getElementById("gallery").innerHTML += `<div class="${element.architektura_wnetrza}">
              <a href="./projekty/${element.nazwa_projektu}.html">
                <img src="${element.zdjecie_glowne}" alt="${element.nazwa}">
              </a>
              <div class="gallery-description">
                <p>${element.nazwa} <br> <span>${element.lokalizacja} • ${element.ukonczono}</span></p>
              </div>
            </div>`;
        });


        console.log("AJAJAJAJ");
        console.log(all[starting_slice_point]);


        console.log(number_of_elements);
        console.log(starting_slice_point);
        return 0;
      });


      //display sliced data
      all.forEach((element) => {

        document.getElementById("gallery").innerHTML += `<div class="${element.architektura_wnetrza}">
            <a href="./projekty/${element.nazwa_projektu}.html">
              <img src="${element.zdjecie_glowne}" alt="${element.nazwa}">
            </a>
            <div class="gallery-description">
              <p>${element.nazwa} <br> <span>${element.lokalizacja} • ${element.ukonczono}</span></p>
            </div>
          </div>`;
      });

      //display all "wtrakcie"
      obj.forEach((element) => {
        if (element.zrealizowano_wtrakcie === "wtrakcie") {
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
