function projektClose() {
  window.history.back();
}

jQuery(function ($) {
  $.scrollTo(0);
  $(".verso-arrow-up").click(function () {
    $.scrollTo($(".realizacje-wrapper"), 500);
  });
});
