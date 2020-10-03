//readmore
function readmoref() {
  var readmoredots = document.getElementById("readmoredots");
  var readmoreText = document.getElementById("readmore");
  const setReadMoreStyle = (readmore, display) => {
    readmore.style.display = display;
  };
  if (readmoredots.style.display === "none") {
    setReadMoreStyle(readmoredots, "inline");
    setReadMoreStyle(readmoreText, "none");
  } else {
    setReadMoreStyle(readmoredots, "none");
    setReadMoreStyle(readmorebtn, "none");
    setReadMoreStyle(readmoreText, "inline");
  }
}
var cursor = $(".cursor"),
  follower = $(".cursor-follower");

var posX = 0,
  posY = 0,
  mouseX = 0,
  mouseY = 0;

TweenMax.to({}, 0.016, {
  repeat: -1,
  onRepeat: function () {
    posX += (mouseX - posX) / 9;
    posY += (mouseY - posY) / 9;

    TweenMax.set(follower, {
      css: {
        left: posX - 20,
        top: posY - 20,
      },
    });

    TweenMax.set(cursor, {
      css: {
        left: mouseX,
        top: mouseY,
      },
    });
  },
});

// PosnAwr Button (readmore)
$(function () {
  $(".pracownia-btn-posnawr")
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
AOS.init();
$(".grupa-img").tilt({
  maxTilt: 7.5,
  scale: 1.04,
  glare: false,
  speed: 1000,
  reverse: true,
  perspective: 1000,
});

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
  $(".grupa-img").each(function () {
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
