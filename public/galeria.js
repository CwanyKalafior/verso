// galeria
var grid = document.querySelector(".grid");
var msnry;

imagesLoaded(grid, function () {
  msnry = new Masonry(grid, {
    itemSelector: ".grid-item",
    columnWidth: ".grid-sizer",
    percentPosition: true,
    transitionDuration: 0,
  });
});

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
var number_of_elements = 20;
var all;
var architektura_all;
var wnetrza_all;
//JSON
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
      console.log(architektura_all);
      //filter data -> wnetrza
      wnetrza_all = obj.filter(element => element.architektura_wnetrza === "wnetrza");
      console.log(wnetrza_all);
      //filter data -> all
      all = obj.filter(element => element.architektura_wnetrza !== "")
      console.log(all);
      //slice data
      all = obj.slice(starting_slice_point, number_of_elements);
      console.log(all);

      //display first 20
      all.forEach((element) => {
        document.getElementById("grid").innerHTML += `<div class="grid-item ${element.architektura_wnetrza}" onclick="document.location='../public/projekty/${element.nazwa_projektu}.html';return false;">
        <img src="${element.zdjecie_glowne}" alt="${element.nazwa}" />
      </div>`;
      });

      //click "Wszystkie"
      $(document).on('click', '#btn-all', function () {

        //clear DOM elements
        document.getElementById("grid").innerHTML = '';

        //create number of elements
        all = all.slice(0, number_of_elements);
        all.forEach((element) => {
          document.getElementById("grid").innerHTML += `<div class="grid-item ${element.architektura_wnetrza}" onclick="document.location='../public/projekty/${element.nazwa_projektu}.html';return false;">
        <img src="${element.zdjecie_glowne}" alt="${element.nazwa}" />
      </div>`;
          console.log("NUMBER_OF: " + number_of_elements);
        });
      });

      //click "Architektura"
      $(document).on('click', '#btn-architektura', function () {

        //clear DOM elements
        document.getElementById("grid").innerHTML = '';

        //create number of elements
        architektura_all = architektura_all.slice(0, number_of_elements);
        architektura_all.forEach((element) => {
          document.getElementById("grid").innerHTML += `<div class="grid-item ${element.architektura_wnetrza}" onclick="document.location='../public/projekty/${element.nazwa_projektu}.html';return false;">
        <img src="${element.zdjecie_glowne}" alt="${element.nazwa}" />
      </div>`;
          console.log("NUMBER_OF: " + number_of_elements);
        });
      });

      //click "Wnetrza"
      $(document).on('click', '#btn-wnetrza', function () {

        //clear DOM elements
        document.getElementById("grid").innerHTML = '';

        //create number of elements
        wnetrza_all = wnetrza_all.slice(0, number_of_elements);
        wnetrza_all.forEach((element) => {
          document.getElementById("grid").innerHTML += `<div class="grid-item ${element.architektura_wnetrza}" onclick="document.location='../public/projekty/${element.nazwa_projektu}.html';return false;">
        <img src="${element.zdjecie_glowne}" alt="${element.nazwa}" />
      </div>`;
          console.log("NUMBER_OF: " + number_of_elements);
        });
      });


      //button "Zobacz wiecej"
      $(document).on('click', '#btn', function () {
        //clear DOM elements
        document.getElementById("grid").innerHTML = '';

        if (document.getElementById("btn-all").classList.contains('active')) {
          all = obj.filter(element => element.architektura_wnetrza !== "").slice(0, number_of_elements + 20);
          all.forEach((element) => {
            document.getElementById("grid").innerHTML += `<div class="grid-item ${element.architektura_wnetrza}" onclick="document.location='../public/projekty/${element.nazwa_projektu}.html';return false;">
        <img src="${element.zdjecie_glowne}" alt="${element.nazwa}" />
      </div>`;
            console.log("NUMBER_OF: " + number_of_elements);
          });

          console.log("ALL ROZMIAR" + all.length)
          number_of_elements += 20;
          return 0;
        }
        else if (document.getElementById("btn-architektura").classList.contains('active')) {
          architektura_all = architektura_all = obj.filter(element => element.architektura_wnetrza === "architektura").slice(0, number_of_elements + 20);
          architektura_all.forEach((element) => {
            document.getElementById("grid").innerHTML += `<div class="grid-item ${element.architektura_wnetrza}" onclick="document.location='../public/projekty/${element.nazwa_projektu}.html';return false;">
        <img src="${element.zdjecie_glowne}" alt="${element.nazwa}" />
      </div>`;
          });
          console.log("ARCHITEKTURA ROZMIAR" + all.length);
          number_of_elements += 20;
          return 0;
        }
        else if (document.getElementById("btn-wnetrza").classList.contains('active')) {

          wnetrza_all = obj.filter(element => element.architektura_wnetrza === "wnetrza").slice(0, number_of_elements + 20);
          wnetrza_all.forEach((element) => {
            document.getElementById("grid").innerHTML += `<div class="grid-item ${element.architektura_wnetrza}" onclick="document.location='../public/projekty/${element.nazwa_projektu}.html';return false;">
        <img src="${element.zdjecie_glowne}" alt="${element.nazwa}" />
      </div>`;
          });
          console.log("WNETRZA ROZMIAR" + all.length)
          number_of_elements += 20;
          return 0;
        }
      });

    });
});

// top arrow
jQuery(function ($) {
  $.scrollTo(0);
  $(".verso-arrow-up").click(function () {
    $.scrollTo($(".wszystkie-wrapper"), 500);
  });
});

//Grupowanie
//Żeby działało wystarczy dodać klasy do projektów tak jak w projekty.html
function wnetrzaFun() {
  var elemsWnetrza = document.getElementsByClassName("wnetrza");
  var elemsArchitektura = document.getElementsByClassName("architektura");
  for (var i = 0; i < elemsWnetrza.length; i += 1) {
    elemsWnetrza[i].style.display = "block";
  }
  for (var i = 0; i < elemsArchitektura.length; i += 1) {
    elemsArchitektura[i].style.display = "none";
  }
  msnry.layout();
}
function architekturaFun() {
  var elemsWnetrza = document.getElementsByClassName("wnetrza");
  var elemsArchitektura = document.getElementsByClassName("architektura");
  for (var i = 0; i < elemsWnetrza.length; i += 1) {
    elemsWnetrza[i].style.display = "none";
  }
  for (var i = 0; i < elemsArchitektura.length; i += 1) {
    elemsArchitektura[i].style.display = "block";
  }
  msnry.layout();
}
function wszystkieFun() {
  var elemsWnetrza = document.getElementsByClassName("wnetrza");
  var elemsArchitektura = document.getElementsByClassName("architektura");
  for (var i = 0; i < elemsWnetrza.length; i += 1) {
    elemsWnetrza[i].style.display = "block";
  }
  for (var i = 0; i < elemsArchitektura.length; i += 1) {
    elemsArchitektura[i].style.display = "block";
  }
  msnry.layout();
}


