// galeria
var grid = document.querySelector(".grid");
var msnry;

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

// imagesLoaded(grid, function () {
//   msnry = new Masonry(grid, {
//     itemSelector: ".grid-item",
//     columnWidth: ".grid-sizer",
//     percentPosition: true,
//     transitionDuration: 0,
//   });
//   console.log("MASONRY");
// });

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
var number_of_elements = 20;
var all;
var jednorodzinne_all;
var wielorodzinne_all;
var przemyslowe_all;
var urbanistyka_all;
var uzytecznosc_publiczna_all;
var wnetrza_all;
var elems;
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
      wnetrza_all = obj.filter((element) => element.grupa === "wnetrza");

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

      //display first 20
      all.forEach((element) => {
        document.getElementById(
          "grid"
        ).innerHTML += `<div class="grid-item ${element.grupa}" onclick="document.location='../public/projekty/${element.nazwa_projektu}.html';return false;">
        <img src="${element.zdjecie_glowne}" alt="${element.nazwa}" />
      </div>`;
      });

      //click "Wszystkie"
      $(document).on("click", "#btn-all", function () {
        //clear DOM elements
        document.getElementById("grid").innerHTML = `<div class="grid-sizer"></div>`;

        //create number of elements
        all = all.slice(0, number_of_elements);
        all.forEach((element) => {
          elems = `<div class="grid-item ${element.grupa}" onclick="document.location='../public/projekty/${element.nazwa_projektu}.html';return false;">
        <img src="${element.zdjecie_glowne}" alt="${element.nazwa}" />
      </div>`;
          var $elems = $(elems);
          var $obj = $('.grid');
          $grid.masonry('remove', $obj);
          $grid.append($elems);
          $grid.masonry('appended', $elems).masonry('layout');

          console.log("NUMBER_OF: " + number_of_elements);
        });
      });

      //click "Jednorodzinne"
      $(document).on("click", "#btn-jednorodzinne", function () {
        //clear DOM elements
        document.getElementById("grid").innerHTML = `<div class="grid-sizer"></div>`;


        //create number of elements
        jednorodzinne_all = jednorodzinne_all.slice(0, number_of_elements);
        jednorodzinne_all.forEach((element) => {
          var elems = `<div class="grid-item ${element.grupa}" onclick="document.location='../public/projekty/${element.nazwa_projektu}.html';return false;">
        <img src="${element.zdjecie_glowne}" alt="${element.nazwa}" />
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
        document.getElementById("grid").innerHTML = `<div class="grid-sizer"></div>`;

        //create number of elements
        wielorodzinne_all = wielorodzinne_all.slice(0, number_of_elements);
        wielorodzinne_all.forEach((element) => {
          var elems = `<div class="grid-item ${element.grupa}" onclick="document.location='../public/projekty/${element.nazwa_projektu}.html';return false;">
        <img src="${element.zdjecie_glowne}" alt="${element.nazwa}" />
      </div>`;
          var $elems = $(elems);
          $grid.append($elems).masonry("appended", $elems);
          $grid.masonry("reloadItems");
          $grid.masonry("layout");
          console.log("NUMBER_OF: " + number_of_elements);
        });
      });

      //click "Przemyslowe"
      $(document).on("click", "#btn-przemyslowe", function () {
        //clear DOM elements
        document.getElementById("grid").innerHTML = `<div class="grid-sizer"></div>`;

        //create number of elements
        przemyslowe_all = przemyslowe_all.slice(0, number_of_elements);
        przemyslowe_all.forEach((element) => {
          var elems = `<div class="grid-item ${element.grupa}" onclick="document.location='../public/projekty/${element.nazwa_projektu}.html';return false;">
        <img src="${element.zdjecie_glowne}" alt="${element.nazwa}" />
      </div>`;
          var $elems = $(elems);
          $grid.append($elems).masonry("appended", $elems);
          $grid.masonry("reloadItems");
          $grid.masonry("layout");
          console.log("NUMBER_OF: " + number_of_elements);
        });
      });

      //click "Urbanistyka"
      $(document).on("click", "#btn-urbanistyka", function () {
        //clear DOM elements
        document.getElementById("grid").innerHTML = `<div class="grid-sizer"></div>`;

        //create number of elements
        urbanistyka_all = urbanistyka_all.slice(0, number_of_elements);
        urbanistyka_all.forEach((element) => {
          var elems = `<div class="grid-item ${element.grupa}" onclick="document.location='../public/projekty/${element.nazwa_projektu}.html';return false;">
        <img src="${element.zdjecie_glowne}" alt="${element.nazwa}" />
      </div>`;
          var $elems = $(elems);
          $grid.append($elems).masonry("appended", $elems);
          $grid.masonry("reloadItems");
          $grid.masonry("layout");
          console.log("NUMBER_OF: " + number_of_elements);
        });
      });

      //click "Uzytecznosc_publiczna"
      $(document).on("click", "#btn-uzytecznosc_publiczna", function () {
        //clear DOM elements
        document.getElementById("grid").innerHTML = `<div class="grid-sizer"></div>`;

        //create number of elements
        uzytecznosc_publiczna_all = uzytecznosc_publiczna_all.slice(
          0,
          number_of_elements
        );
        uzytecznosc_publiczna_all.forEach((element) => {
          var elems = `<div class="grid-item ${element.grupa}" onclick="document.location='../public/projekty/${element.nazwa_projektu}.html';return false;">
        <img src="${element.zdjecie_glowne}" alt="${element.nazwa}" />
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
        document.getElementById("grid").innerHTML = `<div class="grid-sizer"></div>`;
        //create number of elements
        wnetrza_all = wnetrza_all.slice(0, number_of_elements);
        wnetrza_all.forEach((element) => {
          var elems = `<div class="grid-item ${element.grupa}" onclick="document.location='../public/projekty/${element.nazwa_projektu}.html';return false;">
        <img src="${element.zdjecie_glowne}" alt="${element.nazwa}" />
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
            elems = `<div class="grid-item ${element.grupa}" onclick="document.location='../public/projekty/${element.nazwa_projektu}.html';return false;">
        <img src="${element.zdjecie_glowne}" alt="${element.nazwa}" />
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
            .filter((element) => element.grupa !== "")
            .slice(20, number_of_elements + 20);
          jednorodzinne_all.forEach((element) => {
            elems = `<div class="grid-item ${element.grupa}" onclick="document.location='../public/projekty/${element.nazwa_projektu}.html';return false;">
        <img src="${element.zdjecie_glowne}" alt="${element.nazwa}" />
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
            .filter((element) => element.grupa !== "")
            .slice(20, number_of_elements + 20);
          wielorodzinne_all.forEach((element) => {
            elems = `<div class="grid-item ${element.grupa}" onclick="document.location='../public/projekty/${element.nazwa_projektu}.html';return false;">
        <img src="${element.zdjecie_glowne}" alt="${element.nazwa}" />
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
        //btn-przemyslowe  -  przemyslowe
        else if (
          document
            .getElementById("btn-przemyslowe")
            .classList.contains("active")
        ) {
          przemyslowe_all = obj
            .filter((element) => element.grupa !== "")
            .slice(20, number_of_elements + 20);
          przemyslowe_all.forEach((element) => {
            elems = `<div class="grid-item ${element.grupa}" onclick="document.location='../public/projekty/${element.nazwa_projektu}.html';return false;">
        <img src="${element.zdjecie_glowne}" alt="${element.nazwa}" />
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
        //btn-urbanistyka  -  urbanistyka
        else if (
          document
            .getElementById("btn-urbanistyka")
            .classList.contains("active")
        ) {
          urbanistyka_all = obj
            .filter((element) => element.grupa !== "")
            .slice(20, number_of_elements + 20);
          urbanistyka_all.forEach((element) => {
            elems = `<div class="grid-item ${element.grupa}" onclick="document.location='../public/projekty/${element.nazwa_projektu}.html';return false;">
        <img src="${element.zdjecie_glowne}" alt="${element.nazwa}" />
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
        //btn-uzytecznosc_publiczna  -  uzytecznosc_publiczna
        else if (
          document
            .getElementById("btn-uzytecznosc_publiczna")
            .classList.contains("active")
        ) {
          uzytecznosc_publiczna_all = obj
            .filter((element) => element.grupa !== "")
            .slice(20, number_of_elements + 20);
          uzytecznosc_publiczna_all.forEach((element) => {
            elems = `<div class="grid-item ${element.grupa}" onclick="document.location='../public/projekty/${element.nazwa_projektu}.html';return false;">
        <img src="${element.zdjecie_glowne}" alt="${element.nazwa}" />
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
            elems = `<div class="grid-item ${element.grupa}" onclick="document.location='../public/projekty/${element.nazwa_projektu}.html';return false;">
            <img src="${element.zdjecie_glowne}" alt="${element.nazwa}" />
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
  this.css({ display: '' });
  this.emitEvent('remove', [this]);
};