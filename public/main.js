// PosnAwr Button
$(function () {
  $(".btn-posnawr")
    .on("mouseenter", function (e) {
      var parentOffset = $(this).offset(),
        relX = e.pageX - parentOffset.left,
        relY = e.pageY - parentOffset.top;
      $(this).find("span").css({ top: relY, left: relX });
    })
    .on("mouseout", function (e) {
      var parentOffset = $(this).offset(),
        relX = e.pageX - parentOffset.left,
        relY = e.pageY - parentOffset.top;
      $(this).find("span").css({ top: relY, left: relX });
    });
  $("[href=#]").click(function () {
    return false;
  });
});
// Scroll Indicator
$(window).scroll(function () {
  var wintop = $(window).scrollTop();
  docheight = $(document).height();
  winheight = $(window).height();
  var scrolled = (wintop / (docheight - winheight)) * 100;
  $(".class-scroll-indicator").css("width", scrolled + "%");
});
