jQuery(function ($) {
  $.scrollTo(0);
  $(".verso-arrow-up").click(function () {
    $.scrollTo($(".realizacje-wrapper"), 500);
  });
});

// scroll-indicator
$(window).scroll(function () {
  var wintop = $(window).scrollTop();
  docheight = $(document).height();
  winheight = $(window).height();
  var scrolled = (wintop / (docheight - winheight)) * 100;
  $(".class-scroll-indicator").css("width", scrolled + "%");
});
