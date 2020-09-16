// galeria
var grid = document.querySelector(".grid");
var msnry;

var $grid = $(".grid").imagesLoaded(function () {
  $grid.masonry({
    itemSelector: ".grid-item",
    columnWidth: ".grid-sizer",
    percentPosition: true,
  });
  $grid.masonry("reloadItems");
  $grid.masonry("layout");
});

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

var starting_slice_point = 0;
var number_of_elements = 20;
var all;
var jednorodzinne_all;
var wielorodzinne_all;
var publiczne_all;
var wnetrza_all;
var elems;
//JSON
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

      //filter data -> publiczne
      publiczne_all = obj.filter((element) => element.grupa === "publiczne");

      //filter data -> wnetrza
      wnetrza_all = obj.filter((element) => element.grupa === "wnetrza");

      //slice data
      all = obj.slice(starting_slice_point, number_of_elements);

      //check if grouped
      console.log("all" + all);
      console.log("jednorodzinne_all" + jednorodzinne_all);
      console.log("wielorodzinne_all" + wielorodzinne_all);
      console.log("publiczne_all" + publiczne_all);
      console.log("wnetrza" + wnetrza_all);

      //display first 20
      all.forEach((element) => {
        document.getElementById(
          "grid"
        ).innerHTML += `<div class="grid-item ${element.grupa}">
        <a href="../public/projekty/${element.nazwa_projektu}.html
        ">
        <img src="${element.zdjecie_glowne}" alt="${element.nazwa}" /></a>
      </div>`;
      });

      //click "Wszystkie"
      $(document).on("click", "#btn-all", function () {
        //clear DOM elements
        document.getElementById(
          "grid"
        ).innerHTML = `<div class="grid-sizer"></div>`;

        //create number of elements
        all = all.slice(0, number_of_elements);
        all.forEach((element) => {
          elems = `<div class="grid-item ${element.grupa}">
          <a href="../public/projekty/${element.nazwa_projektu}.html
          ">
          <img src="${element.zdjecie_glowne}" alt="${element.nazwa}" /></a>
        </div>`;
          var $elems = $(elems);
          var $obj = $(".grid");
          $grid.masonry("remove", $obj);
          $grid.append($elems);
          $grid.masonry("appended", $elems).masonry("layout");

          console.log("NUMBER_OF: " + number_of_elements);
        });
      });

      //click "Jednorodzinne"
      $(document).on("click", "#btn-jednorodzinne", function () {
        //clear DOM elements
        document.getElementById(
          "grid"
        ).innerHTML = `<div class="grid-sizer"></div>`;

        //create number of elements
        jednorodzinne_all = jednorodzinne_all.slice(0, number_of_elements);
        jednorodzinne_all.forEach((element) => {
          var elems = `<div class="grid-item ${element.grupa}">
          <a href="../public/projekty/${element.nazwa_projektu}.html
          ">
          <img src="${element.zdjecie_glowne}" alt="${element.nazwa}" /></a>
        </div>`;
          var $elems = $(elems);
          $grid.append($elems).masonry("appended", $elems);
          $grid.masonry("reloadItems");
          $grid.masonry("layout");
          console.log("NUMBER_OF: " + number_of_elements);
        });
      });

      //click "Wielorodzinne"
      $(document).on("click", "#btn-wielorodzinne", function () {
        //clear DOM elements
        document.getElementById(
          "grid"
        ).innerHTML = `<div class="grid-sizer"></div>`;

        //create number of elements
        wielorodzinne_all = wielorodzinne_all.slice(0, number_of_elements);
        wielorodzinne_all.forEach((element) => {
          var elems = `<div class="grid-item ${element.grupa}">
          <a href="../public/projekty/${element.nazwa_projektu}.html
          ">
          <img src="${element.zdjecie_glowne}" alt="${element.nazwa}" /></a>
        </div>`;
          var $elems = $(elems);
          $grid.append($elems).masonry("appended", $elems);
          $grid.masonry("reloadItems");
          $grid.masonry("layout");
          console.log("NUMBER_OF: " + number_of_elements);
        });
      });

      //click "Publiczne"
      $(document).on("click", "#btn-publiczne", function () {
        //clear DOM elements
        document.getElementById(
          "grid"
        ).innerHTML = `<div class="grid-sizer"></div>`;

        //create number of elements
        publiczne_all = publiczne_all.slice(0, number_of_elements);
        publiczne_all.forEach((element) => {
          var elems = `<div class="grid-item ${element.grupa}">
          <a href="../public/projekty/${element.nazwa_projektu}.html
          ">
          <img src="${element.zdjecie_glowne}" alt="${element.nazwa}" /></a>
        </div>`;
          var $elems = $(elems);
          $grid.append($elems).masonry("appended", $elems);
          $grid.masonry("reloadItems");
          $grid.masonry("layout");
          console.log("NUMBER_OF: " + number_of_elements);
        });
      });

      //click "Wnetrza"
      $(document).on("click", "#btn-wnetrza", function () {
        //clear DOM elements
        document.getElementById(
          "grid"
        ).innerHTML = `<div class="grid-sizer"></div>`;
        //create number of elements
        wnetrza_all = wnetrza_all.slice(0, number_of_elements);
        wnetrza_all.forEach((element) => {
          var elems = `<div class="grid-item ${element.grupa}">
          <a href="../public/projekty/${element.nazwa_projektu}.html
          ">
          <img src="${element.zdjecie_glowne}" alt="${element.nazwa}" /></a>
        </div>`;
          var $elems = $(elems);
          $grid.append($elems).masonry("appended", $elems);
          $grid.masonry("reloadItems");
          $grid.masonry("layout");
          console.log("NUMBER_OF: " + number_of_elements);
        });
      });

      //click "wczytaj wiecej"
      $(document).on("click", "#btn", function () {
        //btn-all  -  wszystkie
        if (document.getElementById("btn-all").classList.contains("active")) {
          all = obj
            .filter((element) => element.grupa !== "")
            .slice(20, number_of_elements + 20);
          all.forEach((element) => {
            elems = `<div class="grid-item ${element.grupa}">
            <a href="../public/projekty/${element.nazwa_projektu}.html
            ">
            <img src="${element.zdjecie_glowne}" alt="${element.nazwa}" /></a>
          </div>`;
            $elems = $(elems);
            $grid.append($elems).masonry("appended", $elems);
            $grid.masonry("reloadItems");
            $grid.masonry("layout");
            console.log("NUMBER_OF: " + number_of_elements);
          });

          console.log("ALL ROZMIAR" + all.length);
          number_of_elements += 20;
          return 0;
        }
        //btn-jednorodzinne  -  jednorodzinne
        else if (
          document
            .getElementById("btn-jednorodzinne")
            .classList.contains("active")
        ) {
          jednorodzinne_all = obj
            .filter((element) => element.grupa === "jenorodzinne")
            .slice(20, number_of_elements + 20);
          jednorodzinne_all.forEach((element) => {
            elems = `<div class="grid-item ${element.grupa}">
            <a href="../public/projekty/${element.nazwa_projektu}.html
            ">
            <img src="${element.zdjecie_glowne}" alt="${element.nazwa}" /></a>
          </div>`;
            $elems = $(elems);
            $grid.append($elems).masonry("appended", $elems);
            $grid.masonry("reloadItems");
            $grid.masonry("layout");
            console.log("NUMBER_OF: " + number_of_elements);
            console.log("NUMBER_OF: " + number_of_elements);
          });

          console.log("ALL ROZMIAR" + all.length);
          number_of_elements += 20;
          return 0;
        }
        //btn-wielorodzinne  -  wielorodzinne
        else if (
          document
            .getElementById("btn-wielorodzinne")
            .classList.contains("active")
        ) {
          wielorodzinne_all = obj
            .filter((element) => element.grupa === "wielorodzinne")
            .slice(20, number_of_elements + 20);
          wielorodzinne_all.forEach((element) => {
            elems = `<div class="grid-item ${element.grupa}">
            <a href="../public/projekty/${element.nazwa_projektu}.html
            ">
            <img src="${element.zdjecie_glowne}" alt="${element.nazwa}" /></a>
          </div>`;
            $elems = $(elems);
            $grid.append($elems).masonry("appended", $elems);
            $grid.masonry("reloadItems");
            $grid.masonry("layout");
            console.log("NUMBER_OF: " + number_of_elements);
            console.log("NUMBER_OF: " + number_of_elements);
          });

          console.log("ALL ROZMIAR" + all.length);
          number_of_elements += 20;
          return 0;
        }
        //btn-publiczne  -  publiczne
        else if (
          document.getElementById("btn-publiczne").classList.contains("active")
        ) {
          publiczne_all = obj
            .filter((element) => element.grupa === "publiczne")
            .slice(20, number_of_elements + 20);
          publiczne_all.forEach((element) => {
            elems = `<div class="grid-item ${element.grupa}">
            <a href="../public/projekty/${element.nazwa_projektu}.html
            ">
            <img src="${element.zdjecie_glowne}" alt="${element.nazwa}" /></a>
          </div>`;
            $elems = $(elems);
            $grid.append($elems).masonry("appended", $elems);
            $grid.masonry("reloadItems");
            $grid.masonry("layout");
            console.log("NUMBER_OF: " + number_of_elements);
            console.log("NUMBER_OF: " + number_of_elements);
          });

          console.log("ALL ROZMIAR" + all.length);
          number_of_elements += 20;
          return 0;
        }

        //btn-wnetrza  -  wnetrza
        else if (
          document.getElementById("btn-wnetrza").classList.contains("active")
        ) {
          wnetrza_all = obj
            .filter((element) => element.grupa === "wnetrza")
            .slice(20, number_of_elements + 20);
          wnetrza_all.forEach((element) => {
            elems = `<div class="grid-item ${element.grupa}">
            <a href="../public/projekty/${element.nazwa_projektu}.html
            ">
            <img src="${element.zdjecie_glowne}" alt="${element.nazwa}" /></a>
          </div>`;
            $elems = $(elems);
            $grid.append($elems).masonry("appended", $elems);
            $grid.masonry("reloadItems");
            $grid.masonry("layout");
            console.log("NUMBER_OF: " + number_of_elements);
          });
          number_of_elements += 20;
          return 0;
        }
      });
    })
    .finally(function () {
      masonryFunction();
    });
});

const masonryFunction = () => {
  var $grid = $(".grid").imagesLoaded(function () {
    $grid.masonry({
      itemSelector: ".grid-item",
      columnWidth: ".grid-sizer",
      percentPosition: true,
      transitionDuration: 0,
    });
    $grid.masonry("reloadItems");
    $grid.masonry("layout");
  });
};
window.addEventListener("click", masonryFunction);

// top arrow
jQuery(function ($) {
  $.scrollTo(0);
  $(".verso-arrow-up").click(function () {
    $.scrollTo($(".wszystkie-wrapper"), 500);
  });
});

Outlayer.Item.prototype.removeElem = function () {
  this.element.parentNode.removeChild(this.element);
  // remove display: none
  this.css({ display: "" });
  this.emitEvent("remove", [this]);
};
