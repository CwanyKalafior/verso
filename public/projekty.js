// pogrubianie linków
const allImages = document.getElementById('btn-all');
const archiImages = document.getElementById('btn-architektura');
const interiorsImages = document.getElementById('btn-wnetrza');



allImages.addEventListener("click", function () {
  allImages.classList.add("active");
  interiorsImages.classList.remove("active");
  archiImages.classList.remove("active");
});

archiImages.addEventListener("click", function () {
  allImages.classList.remove("active");
  interiorsImages.classList.remove("active");
  archiImages.classList.add("active");
});

interiorsImages.addEventListener("click", function () {
  interiorsImages.classList.add("active");
  allImages.classList.remove("active");
  archiImages.classList.remove("active");
});


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
      wnetrza_all = obj.filter(element => element.architektura_wnetrza === "wnetrza");

      //filter data -> all
      all = obj.filter(element => element.architektura_wnetrza !== "")

      //slice data
      all = obj.slice(starting_slice_point, number_of_elements);
      console.log(all);
      console.log(wnetrza_all);
      console.log(architektura_all);

      //display 5 first elements
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



      //click "wczytaj wiecej"
      $(document).on('click', '#btn', function () {
        //clear DOM elements
        document.getElementById("gallery").innerHTML = '';

        if (document.getElementById("btn-all").classList.contains('active')) {
          all = obj.filter(element => element.architektura_wnetrza !== "").slice(0, number_of_elements + 5);
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
          console.log("ALL ROZMIAR" + all.length)
          number_of_elements += 5;
          return 0;
        }
        else if (document.getElementById("btn-architektura").classList.contains('active')) {
          architektura_all = architektura_all = obj.filter(element => element.architektura_wnetrza === "architektura").slice(0, number_of_elements + 5);
          architektura_all.forEach((element) => {
            document.getElementById("gallery").innerHTML += `<div class="${element.architektura_wnetrza}">
              <a href="./projekty/${element.nazwa_projektu}.html">
                <img src="${element.zdjecie_glowne}" alt="${element.nazwa}">
              </a>
              <div class="gallery-description">
                <p>${element.nazwa} <br> <span>${element.lokalizacja} • ${element.ukonczono}</span></p>
              </div>
            </div>`;
          });
          console.log("ARCHITEKTURA ROZMIAR" + all.length);
          number_of_elements += 5;
          return 0;
        }
        else if (document.getElementById("btn-wnetrza").classList.contains('active')) {

          wnetrza_all = obj.filter(element => element.architektura_wnetrza === "wnetrza").slice(0, number_of_elements + 5);
          wnetrza_all.forEach((element) => {
            document.getElementById("gallery").innerHTML += `<div class="${element.architektura_wnetrza}">
                <a href="./projekty/${element.nazwa_projektu}.html">
                  <img src="${element.zdjecie_glowne}" alt="${element.nazwa}">
                </a>
                <div class="gallery-description">
                  <p>${element.nazwa} <br> <span>${element.lokalizacja} • ${element.ukonczono}</span></p>
                </div>
              </div>`;
          });
          console.log("WNETRZA ROZMIAR" + all.length)
          number_of_elements += 5;
          return 0;
        }
      });




      //click "Wszystkie"
      $(document).on('click', '#btn-all', function () {

        //clear DOM elements
        document.getElementById("gallery").innerHTML = '';

        //create number of elements
        all = all.slice(0, number_of_elements);
        all.forEach((element) => {
          document.getElementById("gallery").innerHTML += `<div class="${element.architektura_wnetrza}">
              <a href="./projekty/${element.nazwa_projektu}.html">
                <img src="${element.zdjecie_glowne}" alt="${element.nazwa}">
              </a>
              <div class="gallery-description">
                <p>${element.nazwa} <br> <span>${element.lokalizacja} • ${element.ukonczono}</span></p>
              </div>
            </div>`;
          console.log("NUMBER_OF: " + number_of_elements);
        });
      });

      //click "Architektura"
      $(document).on('click', '#btn-architektura', function () {

        //clear DOM elements
        document.getElementById("gallery").innerHTML = '';

        //create number of elements
        architektura_all = architektura_all.slice(0, number_of_elements);
        architektura_all.forEach((element) => {
          document.getElementById("gallery").innerHTML += `<div class="${element.architektura_wnetrza}">
              <a href="./projekty/${element.nazwa_projektu}.html">
                <img src="${element.zdjecie_glowne}" alt="${element.nazwa}">
              </a>
              <div class="gallery-description">
                <p>${element.nazwa} <br> <span>${element.lokalizacja} • ${element.ukonczono}</span></p>
              </div>
            </div>`;
          console.log("NUMBER_OF: " + number_of_elements);
        });
      });

      //click "Wnetrza"
      $(document).on('click', '#btn-wnetrza', function () {

        //clear DOM elements
        document.getElementById("gallery").innerHTML = '';

        //create number of elements
        wnetrza_all = wnetrza_all.slice(0, number_of_elements);
        wnetrza_all.forEach((element) => {
          document.getElementById("gallery").innerHTML += `<div class="${element.architektura_wnetrza}">
              <a href="./projekty/${element.nazwa_projektu}.html">
                <img src="${element.zdjecie_glowne}" alt="${element.nazwa}">
              </a>
              <div class="gallery-description">
                <p>${element.nazwa} <br> <span>${element.lokalizacja} • ${element.ukonczono}</span></p>
              </div>
            </div>`;
          console.log("NUMBER_OF: " + number_of_elements);
        });
      });


      //display sliced all

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

