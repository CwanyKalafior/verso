// galeria
var gridArch = document.querySelector(".grid");
var msnry;

msnry = new Masonry(gridArch, {
  itemSelector: ".grid-item",
  columnWidth: ".grid-sizer",
  percentPosition: true,
});
