// slogan
var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};
TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];
  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }
  this.el.innerHTML = '<span class="typewriter-bar">' + this.txt + "</span>";
  var that = this;
  var delta = 200 - Math.random() * 100;
  if (this.isDeleting) {
    delta /= 2;
  }
  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }
  setTimeout(function () {
    that.tick();
  }, delta);
};
window.onload = function () {
  var elements = document.getElementsByClassName("typewriter");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-type");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML =
    ".typewriter > .typewriter-bar { border-right: 0.07em solid #fff}";
  document.body.appendChild(css);
};
//hamburger-menu
const hamburgerMenu = document.getElementById("hamburger-menu");
const HamburgerMenuShow = () => {
  hamburgerMenu.classList.add("hamburger-menu-show");
};
const HamburgerMenuClose = () => {
  hamburgerMenu.classList.remove("hamburger-menu-show");
};

// arrow top
jQuery(function ($) {
  $.scrollTo(0);
  $(".verso-arrow-up").click(function () {
    $.scrollTo($("#wrapper"), 500);
  });
});

// closing the current subpage
const currentSubpageName = document.querySelector(".hamburger-menu a.active");
currentSubpageName.addEventListener("click", HamburgerMenuClose);

// EN alert
const englishBtn = document.querySelector(".enpopup");
englishBtn.addEventListener("click", function (e) {
  e.preventDefault();
  return alert("English version coming soon!");
});

// PosnAwr Button (index.html)

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
//lack of green screen in video
const video = document.getElementById("bgvid");
const projBtn = document.querySelector(".gtpbtn");
const formLink = document.querySelector(".btn-posnawr");
const topNavButtons = document.querySelector(".topnav-buttoms");
const videoClose = () => {
  video.classList.toggle("displayNone");
};

projBtn.addEventListener("click", videoClose);
formLink.addEventListener("click", videoClose);
topNavButtons.addEventListener("click", videoClose);

// nav
document.querySelectorAll(".topnav-buttoms a").forEach((elem) => {
  elem.onmouseenter = elem.onmouseleave = (e) => {
    const tolerance = 10;

    const left = 0;
    const right = elem.clientWidth;

    let x = e.pageX - elem.offsetLeft;

    if (x - tolerance < left) x = left;
    if (x + tolerance > right) x = right;

    elem.style.setProperty("--x", `${x}px`);
  };
});
// kursor
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

$(document).on("mousemove", function (e) {
  mouseX = e.pageX;
  mouseY = e.pageY;
});

$(".topnav-buttoms a").on("mouseenter", function () {
  cursor.addClass("active");
  follower.addClass("active");
});

$(".topnav-buttoms a").on("mouseleave", function () {
  cursor.removeClass("active");
  follower.removeClass("active");
});
