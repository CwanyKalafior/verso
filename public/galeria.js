// galeria
var gridArch = document.querySelector(".grid");
var msnry;

msnry = new Masonry(gridArch, {
  itemSelector: ".grid-item",
  columnWidth: ".grid-sizer",
  percentPosition: true,
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

// pogrubianie linków
const allImages = document.querySelector(".wszystkie-links a:nth-of-type(1)");
const archiImages = document.querySelector(".wszystkie-links a:nth-of-type(2)");
const interiorsImages = document.querySelector(
  ".wszystkie-links a:nth-of-type(3)"
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
