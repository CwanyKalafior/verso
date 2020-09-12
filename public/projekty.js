// pogrubianie linków
const allImages = document.getElementById("btn-all");
const jednoImages = document.getElementById("btn-jednorodzinne");
const wieloImages = document.getElementById("btn-wielorodzinne");
const przemImages = document.getElementById("btn-przemyslowe");
const urbanImages = document.getElementById("btn-urbanistyka");
const uzytPubImages = document.getElementById("btn-uzytecznosc_publiczna");
const interiorsImages = document.getElementById("btn-wnetrza");



allImages.addEventListener("click", function () {
  allImages.classList.add("active");
  jednoImages.classList.remove("active");
  wieloImages.classList.remove("active");
  przemImages.classList.remove("active");
  urbanImages.classList.remove("active");
  uzytPubImages.classList.remove("active");
  interiorsImages.classList.remove("active");

});

jednoImages.addEventListener("click", function () {
  allImages.classList.remove("active");
  jednoImages.classList.add("active");
  wieloImages.classList.remove("active");
  przemImages.classList.remove("active");
  urbanImages.classList.remove("active");
  uzytPubImages.classList.remove("active");
  interiorsImages.classList.remove("active");

});

wieloImages.addEventListener("click", function () {
  allImages.classList.remove("active");
  jednoImages.classList.remove("active");
  wieloImages.classList.add("active");
  przemImages.classList.remove("active");
  urbanImages.classList.remove("active");
  uzytPubImages.classList.remove("active");
  interiorsImages.classList.remove("active");

});

przemImages.addEventListener("click", function () {
  allImages.classList.remove("active");
  jednoImages.classList.remove("active");
  wieloImages.classList.remove("active");
  przemImages.classList.add("active");
  urbanImages.classList.remove("active");
  uzytPubImages.classList.remove("active");
  interiorsImages.classList.remove("active");

});

urbanImages.addEventListener("click", function () {
  allImages.classList.remove("active");
  jednoImages.classList.remove("active");
  wieloImages.classList.remove("active");
  przemImages.classList.remove("active");
  urbanImages.classList.add("active");
  uzytPubImages.classList.remove("active");
  interiorsImages.classList.remove("active");

});

uzytPubImages.addEventListener("click", function () {
  allImages.classList.remove("active");
  jednoImages.classList.remove("active");
  wieloImages.classList.remove("active");
  przemImages.classList.remove("active");
  urbanImages.classList.remove("active");
  uzytPubImages.classList.add("active");
  interiorsImages.classList.remove("active");

});

interiorsImages.addEventListener("click", function () {
  allImages.classList.remove("active");
  jednoImages.classList.remove("active");
  wieloImages.classList.remove("active");
  przemImages.classList.remove("active");
  urbanImages.classList.remove("active");
  uzytPubImages.classList.remove("active");
  interiorsImages.classList.add("active");

});

var starting_slice_point = 0;
var number_of_elements = 5;
var all;
var jednorodzinne_all;
var wielorodzinne_all;
var przemyslowe_all;
var urbanistyka_all;
var uzytecznosc_publiczna_all;
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

      //GRUPOWANIE WSZYSTKICH KATEGORII
      //filter data -> all
      all = obj.filter((element) => element.grupa !== "");

      //filter data -> jednorodzinne
      jednorodzinne_all = obj.filter(
        (element) => element.grupa === "jednorodzinne"
      );

      //filter data -> wielorodzinne
      wielorodzinne_all = obj.filter(
        (element) => element.grupa === "wielorodzinne"
      );

      //filter data -> przemyslowe
      przemyslowe_all = obj.filter(
        (element) => element.grupa === "przemyslowe"
      );

      //filter data -> urbanistyka
      urbanistyka_all = obj.filter(
        (element) => element.grupa === "urbanistyka"
      );

      //filter data -> uzytecznosc_publiczna
      uzytecznosc_publiczna_all = obj.filter(
        (element) => element.grupa === "uzytecznosc_publiczna"
      );

      //filter data -> wnetrza
      wnetrza_all = obj.filter(
        (element) => element.grupa === "wnetrza"
      );

      //slice data
      all = obj.slice(starting_slice_point, number_of_elements);

      //check if grouped
      console.log("all" + all);
      console.log("jednorodzinne_all" + jednorodzinne_all);
      console.log("wielorodzinne_all" + wielorodzinne_all);
      console.log("przemyslowe_all" + przemyslowe_all);
      console.log("urbanistyka_all" + urbanistyka_all);
      console.log("uzytecznosc_publiczna_all" + uzytecznosc_publiczna_all);
      console.log("wnetrza" + wnetrza_all);

      //display 5 first elements
      all.forEach((element) => {
        document.getElementById(
          "gallery"
        ).innerHTML += `<div class="${element.grupa}">
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
          document.getElementById(
            "swiper-wrapper"
          ).innerHTML += `<div class="swiper-slide">
          <img src="${element.zdjecie_glowne}" alt="">
        </div>`;
        }
      });

      //click "wczytaj wiecej"
      $(document).on("click", "#btn", function () {
        //clear DOM elements
        document.getElementById("gallery").innerHTML = "";

        //btn-all  -  wszystkie
        if (document.getElementById("btn-all").classList.contains("active")) {
          all = obj
            .filter((element) => element.grupa !== "")
            .slice(0, number_of_elements + 5);
          all.forEach((element) => {
            document.getElementById(
              "gallery"
            ).innerHTML += `<div class="${element.grupa}">
              <a href="./projekty/${element.nazwa_projektu}.html">
                <img src="${element.zdjecie_glowne}" alt="${element.nazwa}">
              </a>
              <div class="gallery-description">
                <p>${element.nazwa} <br> <span>${element.lokalizacja} • ${element.ukonczono}</span></p>
              </div>
            </div>`;
          });
          number_of_elements += 5;
          return 0;
        }
        //btn-jednorodzinne  -  jednorodzinne
        else if (document.getElementById("btn-jednorodzinne").classList.contains("active")) {
          jednorodzinne_all = obj
            .filter((element) => element.grupa === "jednorodzinne")
            .slice(0, number_of_elements + 5);
          jednorodzinne_all.forEach((element) => {
            document.getElementById(
              "gallery"
            ).innerHTML += `<div class="${element.grupa}">
                <a href="./projekty/${element.nazwa_projektu}.html">
                  <img src="${element.zdjecie_glowne}" alt="${element.nazwa}">
                </a>
                <div class="gallery-description">
                  <p>${element.nazwa} <br> <span>${element.lokalizacja} • ${element.ukonczono}</span></p>
                </div>
              </div>`;
          });
          number_of_elements += 5;
          return 0;
        }
        //btn-wielorodzinne  -  wielorodzinne
        else if (document.getElementById("btn-wielorodzinne").classList.contains("active")) {
          wielorodzinne_all = obj
            .filter((element) => element.grupa === "wielorodzinne")
            .slice(0, number_of_elements + 5);
          wielorodzinne_all.forEach((element) => {
            document.getElementById(
              "gallery"
            ).innerHTML += `<div class="${element.grupa}">
                <a href="./projekty/${element.nazwa_projektu}.html">
                  <img src="${element.zdjecie_glowne}" alt="${element.nazwa}">
                </a>
                <div class="gallery-description">
                  <p>${element.nazwa} <br> <span>${element.lokalizacja} • ${element.ukonczono}</span></p>
                </div>
              </div>`;
          });
          number_of_elements += 5;
          return 0;
        }
        //btn-przemyslowe  -  przemyslowe
        else if (document.getElementById("btn-przemyslowe").classList.contains("active")) {
          przemyslowe_all = obj
            .filter((element) => element.grupa === "przemyslowe")
            .slice(0, number_of_elements + 5);
          przemyslowe_all.forEach((element) => {
            document.getElementById(
              "gallery"
            ).innerHTML += `<div class="${element.grupa}">
                <a href="./projekty/${element.nazwa_projektu}.html">
                  <img src="${element.zdjecie_glowne}" alt="${element.nazwa}">
                </a>
                <div class="gallery-description">
                  <p>${element.nazwa} <br> <span>${element.lokalizacja} • ${element.ukonczono}</span></p>
                </div>
              </div>`;
          });
          number_of_elements += 5;
          return 0;
        }
        //btn-urbanistyka  -  urbanistyka
        else if (document.getElementById("btn-urbanistyka").classList.contains("active")) {
          urbanistyka_all = obj
            .filter((element) => element.grupa === "urbanistyka")
            .slice(0, number_of_elements + 5);
          urbanistyka_all.forEach((element) => {
            document.getElementById(
              "gallery"
            ).innerHTML += `<div class="${element.grupa}">
                <a href="./projekty/${element.nazwa_projektu}.html">
                  <img src="${element.zdjecie_glowne}" alt="${element.nazwa}">
                </a>
                <div class="gallery-description">
                  <p>${element.nazwa} <br> <span>${element.lokalizacja} • ${element.ukonczono}</span></p>
                </div>
              </div>`;
          });
          number_of_elements += 5;
          return 0;
        }
        //btn-uzytecznosc_publiczna  -  uzytecznosc_publiczna
        else if (document.getElementById("btn-uzytecznosc_publiczna").classList.contains("active")) {
          uzytecznosc_publiczna_all = obj
            .filter((element) => element.grupa === "uzytecznosc_publiczna")
            .slice(0, number_of_elements + 5);
          uzytecznosc_publiczna_all.forEach((element) => {
            document.getElementById(
              "gallery"
            ).innerHTML += `<div class="${element.grupa}">
                <a href="./projekty/${element.nazwa_projektu}.html">
                  <img src="${element.zdjecie_glowne}" alt="${element.nazwa}">
                </a>
                <div class="gallery-description">
                  <p>${element.nazwa} <br> <span>${element.lokalizacja} • ${element.ukonczono}</span></p>
                </div>
              </div>`;
          });
          number_of_elements += 5;
          return 0;
        }
        //btn-wnetrza  -  wnetrza
        else if (document.getElementById("btn-wnetrza").classList.contains("active")) {
          wnetrza_all = obj
            .filter((element) => element.grupa === "wnetrza")
            .slice(0, number_of_elements + 5);
          wnetrza_all.forEach((element) => {
            document.getElementById(
              "gallery"
            ).innerHTML += `<div class="${element.grupa}">
                <a href="./projekty/${element.nazwa_projektu}.html">
                  <img src="${element.zdjecie_glowne}" alt="${element.nazwa}">
                </a>
                <div class="gallery-description">
                  <p>${element.nazwa} <br> <span>${element.lokalizacja} • ${element.ukonczono}</span></p>
                </div>
              </div>`;
          });
          number_of_elements += 5;
          return 0;
        }
      });

      //click "Wszystkie"
      $(document).on("click", "#btn-all", function () {
        //clear DOM elements
        document.getElementById("gallery").innerHTML = "";

        //create number of elements
        all = all.slice(0, number_of_elements);
        all.forEach((element) => {
          document.getElementById(
            "gallery"
          ).innerHTML += `<div class="${element.grupa}">
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

      //click "Jednorodzinne"
      $(document).on("click", "#btn-jednorodzinne", function () {
        //clear DOM elements
        document.getElementById("gallery").innerHTML = "";

        //create number of elements
        jednorodzinne_all = jednorodzinne_all.slice(0, number_of_elements);
        jednorodzinne_all.forEach((element) => {
          document.getElementById(
            "gallery"
          ).innerHTML += `<div class="${element.grupa}">
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

      //click "Wielorodzinne"
      $(document).on("click", "#btn-wielorodzinne", function () {
        //clear DOM elements
        document.getElementById("gallery").innerHTML = "";

        //create number of elements
        wielorodzinne_all = wielorodzinne_all.slice(0, number_of_elements);
        wielorodzinne_all.forEach((element) => {
          document.getElementById(
            "gallery"
          ).innerHTML += `<div class="${element.grupa}">
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

      //click "Przemyslowe"
      $(document).on("click", "#btn-przemyslowe", function () {
        //clear DOM elements
        document.getElementById("gallery").innerHTML = "";

        //create number of elements
        przemyslowe_all = przemyslowe_all.slice(0, number_of_elements);
        przemyslowe_all.forEach((element) => {
          document.getElementById(
            "gallery"
          ).innerHTML += `<div class="${element.grupa}">
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

      //click "Urbanistyka"
      $(document).on("click", "#btn-urbanistyka", function () {
        //clear DOM elements
        document.getElementById("gallery").innerHTML = "";

        //create number of elements
        urbanistyka_all = urbanistyka_all.slice(0, number_of_elements);
        urbanistyka_all.forEach((element) => {
          document.getElementById(
            "gallery"
          ).innerHTML += `<div class="${element.grupa}">
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

      //click "Uzytecznosc_publiczna"
      $(document).on("click", "#btn-uzytecznosc_publiczna", function () {
        //clear DOM elements
        document.getElementById("gallery").innerHTML = "";

        //create number of elements
        uzytecznosc_publiczna_all = uzytecznosc_publiczna_all.slice(0, number_of_elements);
        uzytecznosc_publiczna_all.forEach((element) => {
          document.getElementById(
            "gallery"
          ).innerHTML += `<div class="${element.grupa}">
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
      $(document).on("click", "#btn-wnetrza", function () {
        //clear DOM elements
        document.getElementById("gallery").innerHTML = "";

        //create number of elements
        wnetrza_all = wnetrza_all.slice(0, number_of_elements);
        wnetrza_all.forEach((element) => {
          document.getElementById(
            "gallery"
          ).innerHTML += `<div class="${element.grupa}">
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
