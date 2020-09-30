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
const homeLink = document.querySelector(".hamburger-menu-bg li a.home");
const projektLink = document.querySelector(".hamburger-menu-bg li a.projekty");
const pracowniaLink = document.querySelector(
  ".hamburger-menu-bg li a.pracownia"
);
const kontaktLink = document.querySelector(".hamburger-menu-bg li a.kontakt");
const HamburgerMenuShow = () => {
  hamburgerMenu.classList.add("hamburger-menu-show");
  homeLink.classList.add("left");
  setTimeout(function () {
    projektLink.classList.add("left");
  }, 200);
  setTimeout(function () {
    pracowniaLink.classList.add("left");
  }, 400);
  setTimeout(function () {
    kontaktLink.classList.add("left");
  }, 600);
};
const HamburgerMenuClose = () => {
  hamburgerMenu.classList.remove("hamburger-menu-show");
  homeLink.classList.remove("left");
  projektLink.classList.remove("left");
  pracowniaLink.classList.remove("left");
  kontaktLink.classList.remove("left");
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
  $(".btn-posnawr-indx")
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
const topNavButtons = document.querySelector(".topnav-buttoms a");
const videoClose = () => {
  video.classList.toggle("displayNone");
};

projBtn.addEventListener("click", videoClose);
formLink.addEventListener("click", videoClose);
topNavButtons.addEventListener("click", videoClose);

AOS.init();
