// pogrubianie linków
const allImages = document.getElementById("btn-all");
const jednoImages = document.getElementById("btn-jednorodzinne");
const wieloImages = document.getElementById("btn-wielorodzinne");
const pubImages = document.getElementById("btn-publiczne");
const interiorsImages = document.getElementById("btn-wnetrza");

allImages.addEventListener("click", function () {
  allImages.classList.add("active");
  jednoImages.classList.remove("active");
  wieloImages.classList.remove("active");
  pubImages.classList.remove("active");
  interiorsImages.classList.remove("active");
});

jednoImages.addEventListener("click", function () {
  allImages.classList.remove("active");
  jednoImages.classList.add("active");
  wieloImages.classList.remove("active");
  pubImages.classList.remove("active");
  interiorsImages.classList.remove("active");
});

wieloImages.addEventListener("click", function () {
  allImages.classList.remove("active");
  jednoImages.classList.remove("active");
  wieloImages.classList.add("active");
  pubImages.classList.remove("active");
  interiorsImages.classList.remove("active");
});

pubImages.addEventListener("click", function () {
  allImages.classList.remove("active");
  jednoImages.classList.remove("active");
  wieloImages.classList.remove("active");
  pubImages.classList.add("active");
  interiorsImages.classList.remove("active");
});

interiorsImages.addEventListener("click", function () {
  allImages.classList.remove("active");
  jednoImages.classList.remove("active");
  wieloImages.classList.remove("active");
  pubImages.classList.remove("active");
  interiorsImages.classList.add("active");
});

var number_of_elements = 5;
var all;
var jednorodzinne_all;
var wielorodzinne_all;
var publiczne_all;
var wnetrza_all;
var all_w;
var jednorodzinne_all_w;
var wielorodzinne_all_w;
var publiczne_all_w;
var wnetrza_all_w;
var all_full_length;
var jednorodzinne_full_length;
var wielorodzinne_full_length;
var publiczne_full_length;
var wnetrza_full_length;
var swiper_element;

var swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  spaceBetween: 100,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    400: {
      slidesPerView: 2,
    },
    500: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
  },
  lazy: {
    loadPrevNext: true,
    preloadImages: false,
    lazy: true,
  },
  autoplay: {
    delay: 1250,
    disableOnInteraction: true,
  },
  keyboard: {
    enabled: true,
  },
  loop: true,
  centeredSlides: true,
  freeMode: false,
  spaceBetween: 0,
  speed: 750,
  updateOnWindowResize: true,
  sensitivity: 0,
});

var mySwiper = document.querySelector(".swiper-container").swiper;

$(function () {
  var obj;
  fetch(
    "https://raw.githubusercontent.com/CwanyKalafior/verso/master/galeria.json"
  )
    .then((res) => res.json())
    .then((data) => (obj = data))
    .then(() => {
      obj.sort(function (a, b) {
        return parseFloat(a.kolejnosc) - parseFloat(b.kolejnosc);
      });

      //GRUPOWANIE WSZYSTKICH KATEGORII
      //filter data -> all & zrealizowano
      all = obj.filter(
        (element) =>
          element.grupa !== "" &&
          element.zrealizowano_wtrakcie === "zrealizowano"
      );
      all_full_length = all.length;

      //filter data -> jednorodzinne & zrealizowano
      jednorodzinne_all = obj.filter(
        (element) =>
          element.grupa === "jednorodzinne" &&
          element.zrealizowano_wtrakcie === "zrealizowano"
      );
      jednorodzinne_full_length = jednorodzinne_all.length;

      //filter data -> wielorodzinne & zrealizowano
      wielorodzinne_all = obj.filter(
        (element) =>
          element.grupa === "wielorodzinne" &&
          element.zrealizowano_wtrakcie === "zrealizowano"
      );
      wielorodzinne_full_length = wielorodzinne_all.length;

      //filter data -> publiczne & zrealizowano
      publiczne_all = obj.filter(
        (element) =>
          element.grupa === "publiczne" &&
          element.zrealizowano_wtrakcie === "zrealizowano"
      );
      publiczne_full_length += publiczne_all.length;

      //filter data -> wnetrza & zrealizowano
      wnetrza_all = obj.filter(
        (element) =>
          element.grupa === "wnetrza" &&
          element.zrealizowano_wtrakcie === "zrealizowano"
      );
      wnetrza_full_length = wnetrza_all.length;

      //filter data -> all & zrealizowano
      all_w = obj.filter(
        (element) =>
          element.grupa !== "" && element.zrealizowano_wtrakcie === "wtrakcie"
      );

      //filter data -> jednorodzinne & zrealizowano
      jednorodzinne_all_w = obj.filter(
        (element) =>
          element.grupa === "jednorodzinne" &&
          element.zrealizowano_wtrakcie === "wtrakcie"
      );

      //filter data -> wielorodzinne & zrealizowano
      wielorodzinne_all_w = obj.filter(
        (element) =>
          element.grupa === "wielorodzinne" &&
          element.zrealizowano_wtrakcie === "wtrakcie"
      );

      //filter data -> publiczne & zrealizowano
      publiczne_all_w = obj.filter(
        (element) =>
          element.grupa === "publiczne" &&
          element.zrealizowano_wtrakcie === "wtrakcie"
      );

      //filter data -> wnetrza & zrealizowano
      wnetrza_all_w = obj.filter(
        (element) =>
          element.grupa === "wnetrza" &&
          element.zrealizowano_wtrakcie === "wtrakcie"
      );

      //slice data
      all = obj.slice(0, number_of_elements);

      //display 5 first elements
      all = obj
        .filter(
          (element) =>
            element.grupa !== "" &&
            element.zrealizowano_wtrakcie === "zrealizowano"
        )
        .slice(0, number_of_elements);
      all.forEach((element) => {
        if (element.zrealizowano_wtrakcie === "zrealizowano") {
          document.getElementById("gallery").innerHTML += `
          <div class="projekt-lista">
            <div class="${element.grupa}">
            <div class="grid-dots"></div>
              <a href="./projekty/${element.nazwa_projektu}.html" target="_blank">
                <img data-aos="fade-left" class="card" data-tilt src="${element.zdjecie_glowne}" alt="${element.nazwa}">
              </a>
              <div class="gallery-description">
                <p>${element.nazwa} <br> <span>${element.lokalizacja} • ${element.ukonczono}</span></p>
              </div>
            </div>
          </div>
         `;
        }
      });

      //display all "wtrakcie"
      all_w.forEach((element) => {
        if (element.zrealizowano_wtrakcie === "wtrakcie") {
          document.getElementById(
            "swiper-wrapper"
          ).innerHTML += `<div class="swiper-slide">
          <a href="./projekty/${element.nazwa_projektu}.html" target="_blank">
            <img src="${element.zdjecie_glowne}" alt="${element.nazwa}">
          </a>
        </div>`;
        }
      });

      //click "Wszystkie"
      $(document).on("click", "#btn-all", function () {
        //clear DOM elements
        document.getElementById("gallery").innerHTML = "";

        number_of_elements = 5;
        //create number of elements
        all = all.slice(0, number_of_elements);
        all.forEach((element) => {
          document.getElementById("gallery").innerHTML += `
          <div class="projekt-lista">
            <div class="${element.grupa}">
            <div class="grid-dots"></div>
              <a href="./projekty/${element.nazwa_projektu}.html" target="_blank">
                <img data-aos="fade-left" class="card" data-tilt src="${element.zdjecie_glowne}" alt="${element.nazwa}">
              </a>
              <div class="gallery-description">
                <p>${element.nazwa} <br> <span>${element.lokalizacja} • ${element.ukonczono}</span></p>
              </div>
            </div>
          </div>
         `;
        });
        AOS.init();
        //clear DOM elements
        document.getElementById("swiper-wrapper").innerHTML = "";
        all_w.forEach((element) => {
          document.getElementById(
            "swiper-wrapper"
          ).innerHTML += `<div class="swiper-slide">
          <a href="./projekty/${element.nazwa_projektu}.html" target="_blank">
            <img src="${element.zdjecie_glowne}" alt="${element.nazwa}">
          </a>
        </div>`;
        });
        swiperFunction();
        tiltFunction();
        if (all.length === all_full_length) {
          document.getElementById("btn").style.display = "none";
        } else {
          document.getElementById("btn").style.display = "block";
        }
      });

      //click "Jednorodzinne"
      $(document).on("click", "#btn-jednorodzinne", function () {
        //clear DOM elements
        document.getElementById("gallery").innerHTML = "";

        number_of_elements = 5;
        //create number of elements
        jednorodzinne_all = jednorodzinne_all.slice(0, number_of_elements);
        jednorodzinne_all.forEach((element) => {
          document.getElementById("gallery").innerHTML += `
          <div class="projekt-lista">
            <div class="${element.grupa}">
            <div class="grid-dots"></div>
              <a href="./projekty/${element.nazwa_projektu}.html" target="_blank">
                <img data-aos="fade-left" class="card" data-tilt src="${element.zdjecie_glowne}" alt="${element.nazwa}">
              </a>
              <div class="gallery-description">
                <p>${element.nazwa} <br> <span>${element.lokalizacja} • ${element.ukonczono}</span></p>
              </div>
            </div>
          </div>
         `;
        });
        AOS.init();
        //clear DOM elements
        document.getElementById("swiper-wrapper").innerHTML = "";
        jednorodzinne_all_w.forEach((element) => {
          document.getElementById(
            "swiper-wrapper"
          ).innerHTML += `<div class="swiper-slide">
          <a href="./projekty/${element.nazwa_projektu}.html" target="_blank">
            <img src="${element.zdjecie_glowne}" alt="${element.nazwa}">
          </a>
        </div>`;
        });
        swiperFunction();
        tiltFunction();
        if (jednorodzinne_all.length === jednorodzinne_full_length) {
          document.getElementById("btn").style.display = "none";
        } else {
          document.getElementById("btn").style.display = "block";
        }
      });

      //click "Wielorodzinne"
      $(document).on("click", "#btn-wielorodzinne", function () {
        //clear DOM elements
        document.getElementById("gallery").innerHTML = "";

        number_of_elements = 5;
        //create number of elements
        wielorodzinne_all = wielorodzinne_all.slice(0, number_of_elements);
        wielorodzinne_all.forEach((element) => {
          document.getElementById("gallery").innerHTML += `
          <div class="projekt-lista">
            <div class="${element.grupa}">
            <div class="grid-dots"></div>
              <a href="./projekty/${element.nazwa_projektu}.html" target="_blank">
                <img data-aos="fade-left" class="card" data-tilt src="${element.zdjecie_glowne}" alt="${element.nazwa}">
              </a>
              <div class="gallery-description">
                <p>${element.nazwa} <br> <span>${element.lokalizacja} • ${element.ukonczono}</span></p>
              </div>
            </div>
          </div>
         `;
        });
        AOS.init();
        //clear DOM elements
        document.getElementById("swiper-wrapper").innerHTML = "";
        wielorodzinne_all_w.forEach((element) => {
          document.getElementById(
            "swiper-wrapper"
          ).innerHTML += `<div class="swiper-slide">
          <a href="./projekty/${element.nazwa_projektu}.html" target="_blank">
            <img src="${element.zdjecie_glowne}" alt="${element.nazwa}">
          </a>
        </div>`;
        });
        swiperFunction();
        tiltFunction();

        if (wielorodzinne_all.length === wielorodzinne_full_length) {
          document.getElementById("btn").style.display = "none";
        } else {
          document.getElementById("btn").style.display = "block";
        }
      });

      //click "Publiczne"
      $(document).on("click", "#btn-publiczne", function () {
        //clear DOM elements
        document.getElementById("gallery").innerHTML = "";

        number_of_elements = 5;
        //create number of elements
        publiczne_all = publiczne_all.slice(0, number_of_elements);
        publiczne_all.forEach((element) => {
          document.getElementById("gallery").innerHTML += `
          <div class="projekt-lista">
            <div class="${element.grupa}">
            <div class="grid-dots"></div>
              <a href="./projekty/${element.nazwa_projektu}.html" target="_blank">
                <img data-aos="fade-left" class="card" data-tilt src="${element.zdjecie_glowne}" alt="${element.nazwa}">
              </a>
              <div class="gallery-description">
                <p>${element.nazwa} <br> <span>${element.lokalizacja} • ${element.ukonczono}</span></p>
              </div>
            </div>
          </div>
         `;
        });
        AOS.init();
        //clear DOM elements
        document.getElementById("swiper-wrapper").innerHTML = "";
        publiczne_all_w.forEach((element) => {
          document.getElementById(
            "swiper-wrapper"
          ).innerHTML += `<div class="swiper-slide">
           <a href="./projekty/${element.nazwa_projektu}.html" target="_blank">
             <img src="${element.zdjecie_glowne}" alt="${element.nazwa}">
           </a>
         </div>`;
        });
        swiperFunction();
        tiltFunction();
        if (publiczne_all.length === publiczne_full_length) {
          document.getElementById("btn").style.display = "none";
        } else {
          document.getElementById("btn").style.display = "block";
        }
      });

      //click "Wnetrza"
      $(document).on("click", "#btn-wnetrza", function () {
        //clear DOM elements
        document.getElementById("gallery").innerHTML = "";

        number_of_elements = 5;
        //create number of elements
        wnetrza_all = wnetrza_all.slice(0, number_of_elements);
        wnetrza_all.forEach((element) => {
          document.getElementById("gallery").innerHTML += `
          <div class="projekt-lista">
            <div class="${element.grupa}">
            <div class="grid-dots"></div>
              <a href="./projekty/${element.nazwa_projektu}.html" target="_blank">
                <img data-aos="fade-left" class="card" data-tilt src="${element.zdjecie_glowne}" alt="${element.nazwa}">
              </a>
              <div class="gallery-description">
                <p>${element.nazwa} <br> <span>${element.lokalizacja} • ${element.ukonczono}</span></p>
              </div>
            </div>
          </div>
         `;
        });
        AOS.init();
        //clear DOM elements
        document.getElementById("swiper-wrapper").innerHTML = "";
        wnetrza_all_w.forEach((element) => {
          document.getElementById(
            "swiper-wrapper"
          ).innerHTML += `<div class="swiper-slide">
          <a href="./projekty/${element.nazwa_projektu}.html" target="_blank">
            <img src="${element.zdjecie_glowne}" alt="${element.nazwa}">
          </a>
        </div>`;
        });
        swiperFunction();
        tiltFunction();
        if (wnetrza_all.length === wnetrza_full_length) {
          document.getElementById("btn").style.display = "none";
        } else {
          document.getElementById("btn").style.display = "block";
        }
      });

      //click "wczytaj wiecej"
      $(document).on("click", "#btn", function () {
        //clear DOM elements
        document.getElementById("gallery").innerHTML = "";
        number_of_elements += 5;

        //btn-all  -  wszystkie
        if (document.getElementById("btn-all").classList.contains("active")) {
          all = obj
            .filter(
              (element) =>
                element.grupa !== "" &&
                element.zrealizowano_wtrakcie === "zrealizowano"
            )
            .slice(0, number_of_elements);
          all.forEach((element) => {
            document.getElementById("gallery").innerHTML += `
            <div class="projekt-lista">
              <div class="${element.grupa}">
              <div class="grid-dots"></div>
                <a href="./projekty/${element.nazwa_projektu}.html" target="_blank">
                  <img data-aos="fade-left" class="card" data-tilt src="${element.zdjecie_glowne}" alt="${element.nazwa}">
                </a>
                <div class="gallery-description">
                  <p>${element.nazwa} <br> <span>${element.lokalizacja} • ${element.ukonczono}</span></p>
                </div>
              </div>
            </div>
           `;
          });
          AOS.init();
          tiltFunction();
          if (all.length === all_full_length) {
            document.getElementById("btn").style.display = "none";
          } else {
            document.getElementById("btn").style.display = "block";
          }
          return 0;
        }
        //btn-jednorodzinne  -  jednorodzinne
        else if (
          document
            .getElementById("btn-jednorodzinne")
            .classList.contains("active")
        ) {
          jednorodzinne_all = obj
            .filter(
              (element) =>
                element.grupa === "jednorodzinne" &&
                element.zrealizowano_wtrakcie === "zrealizowano"
            )
            .slice(0, number_of_elements);
          jednorodzinne_all.forEach((element) => {
            document.getElementById("gallery").innerHTML += `
            <div class="projekt-lista">
              <div class="${element.grupa}">
              <div class="grid-dots"></div>
                <a href="./projekty/${element.nazwa_projektu}.html" target="_blank">
                  <img data-aos="fade-left" class="card" data-tilt src="${element.zdjecie_glowne}" alt="${element.nazwa}">
                </a>
                <div class="gallery-description">
                  <p>${element.nazwa} <br> <span>${element.lokalizacja} • ${element.ukonczono}</span></p>
                </div>
              </div>
            </div>
           `;
          });
          AOS.init();
          tiltFunction();
          if (jednorodzinne_all.length === jednorodzinne_full_length) {
            document.getElementById("btn").style.display = "none";
          } else {
            document.getElementById("btn").style.display = "block";
          }
          return 0;
        }
        //btn-wielorodzinne  -  wielorodzinne
        else if (
          document
            .getElementById("btn-wielorodzinne")
            .classList.contains("active")
        ) {
          wielorodzinne_all = obj
            .filter(
              (element) =>
                element.grupa === "wielorodzinne" &&
                element.zrealizowano_wtrakcie === "zrealizowano"
            )
            .slice(0, number_of_elements);
          wielorodzinne_all.forEach((element) => {
            document.getElementById("gallery").innerHTML += `
            <div class="projekt-lista">
              <div class="${element.grupa}">
              <div class="grid-dots"></div>
                <a href="./projekty/${element.nazwa_projektu}.html" target="_blank">
                  <img data-aos="fade-left" class="card" data-tilt src="${element.zdjecie_glowne}" alt="${element.nazwa}">
                </a>
                <div class="gallery-description">
                  <p>${element.nazwa} <br> <span>${element.lokalizacja} • ${element.ukonczono}</span></p>
                </div>
              </div>
            </div>
           `;
          });
          AOS.init();
          tiltFunction();
          if (wielorodzinne_all.length === wielorodzinne_full_length) {
            document.getElementById("btn").style.display = "none";
          } else {
            document.getElementById("btn").style.display = "block";
          }
          return 0;
        }
        //btn-publiczne  -  publiczne
        else if (
          document.getElementById("btn-publiczne").classList.contains("active")
        ) {
          publiczne_all = obj
            .filter(
              (element) =>
                element.grupa === "publiczne" &&
                element.zrealizowano_wtrakcie === "zrealizowano"
            )
            .slice(0, number_of_elements);
          publiczne_all.forEach((element) => {
            document.getElementById("gallery").innerHTML += `
            <div class="projekt-lista">
              <div class="${element.grupa}">
              <div class="grid-dots"></div>
                <a href="./projekty/${element.nazwa_projektu}.html" target="_blank">
                  <img data-aos="fade-left" class="card" data-tilt src="${element.zdjecie_glowne}" alt="${element.nazwa}">
                </a>
                <div class="gallery-description">
                  <p>${element.nazwa} <br> <span>${element.lokalizacja} • ${element.ukonczono}</span></p>
                </div>
              </div>
            </div>
           `;
          });
          AOS.init();
          tiltFunction();
          if (publiczne_all.length === publiczne_full_length) {
            document.getElementById("btn").style.display = "none";
          } else {
            document.getElementById("btn").style.display = "block";
          }
          return 0;
        }
        //btn-wnetrza  -  wnetrza
        else if (
          document.getElementById("btn-wnetrza").classList.contains("active")
        ) {
          wnetrza_all = obj
            .filter(
              (element) =>
                element.grupa === "wnetrza" &&
                element.zrealizowano_wtrakcie === "zrealizowano"
            )
            .slice(0, number_of_elements);
          wnetrza_all.forEach((element) => {
            document.getElementById("gallery").innerHTML += `
            <div class="projekt-lista">
              <div class="${element.grupa}">
              <div class="grid-dots"></div>
                <a href="./projekty/${element.nazwa_projektu}.html" target="_blank">
                  <img data-aos="fade-left" class="card" data-tilt src="${element.zdjecie_glowne}" alt="${element.nazwa}">
                </a>
                <div class="gallery-description">
                  <p>${element.nazwa} <br> <span>${element.lokalizacja} • ${element.ukonczono}</span></p>
                </div>
              </div>
            </div>
           `;
          });
          AOS.init();
          tiltFunction();
          if (wnetrza_all.length === wnetrza_full_length) {
            document.getElementById("btn").style.display = "none";
          } else {
            document.getElementById("btn").style.display = "block";
          }
          return 0;
        }
      });
    })
    .finally(function () {
      swiperFunction();
      tiltFunction();
      AOS.init();
    });
});

const swiperFunction = () => {
  mySwiper.update();
};

const tiltFunction = () => {
  $(document).ready(function () {
    $(".card").tilt({
      maxTilt: 7.5,
      scale: 1.04,
      glare: false,
      speed: 1000,
      reverse: true,
      perspective: 1000,
    });
  });
};

// const tilt = $(`${element.zdjecie_glowne}`).tilt();
// VanillaTilt.init(document.querySelector(`${element.zdjecie_glowne}`), {
//   max: 25,
//   speed: 400,
// });
// data - tilt >
//   VanillaTilt.init(document.querySelectorAll(`${element.zdjecie_glowne}`));

// parallax
var winScrollTop = 0;

$.fn.is_on_screen = function () {
  var win = $(window);
  var viewport = {
    top: win.scrollTop(),
    left: win.scrollLeft(),
  };
  viewport.bottom = viewport.top + win.height();

  var bounds = this.offset();
  bounds.bottom = bounds.top + this.outerHeight();

  return !(viewport.bottom < bounds.top || viewport.top > bounds.bottom);
};

function parallax() {
  var scrolled = $(window).scrollTop();
  $(".projekt-lista").each(function () {
    if ($(this).is_on_screen()) {
      var firstTop = $(this).offset().top;
      var $img = $(this).find(".grid-dots");
      var moveTop = (firstTop - winScrollTop) * -0.15;
      $img.css("transform", "translateY(" + -moveTop + "px)");
    }
  });
}

$(window).scroll(function (e) {
  winScrollTop = $(this).scrollTop();
  parallax();
});
