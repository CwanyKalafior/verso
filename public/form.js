//hamburger-menu
const hamburgerMenu = document.getElementById("hamburger-menu");
const HamburgerMenuShow = () => {
  hamburgerMenu.classList.add("hamburger-menu-show");
};
const HamburgerMenuClose = () => {
  hamburgerMenu.classList.remove("hamburger-menu-show");
};

// kontakt
const contactWrapper = document.querySelector(".contact-wrapper");
function hamburgerMenuContact() {
  contactWrapper.classList.add("display");
  setTimeout(function () {
    contactWrapper.classList.add("goTop");
    hamburgerMenu.classList.add("goHigher");
  }, 1);
  setTimeout(function () {
    hamburgerMenu.classList.remove("goHigher");
  }, 600);
}
function contactClose() {
  hamburgerMenu.classList.add("goHigher");
  setTimeout(function () {
    contactWrapper.classList.add("goBottom");
    contactWrapper.classList.remove("goTop");
    hamburgerMenu.classList.add("goTop");
  }, 250);

  setTimeout(function () {
    contactWrapper.classList.remove("goBottom");
    hamburgerMenu.classList.remove("goHigher");
    hamburgerMenu.classList.remove("goTop");
    contactWrapper.classList.remove("display");
  }, 650);
}

function formClose() {
  window.history.back();
}
// noLine
const inputs = document.querySelectorAll("input");
[].forEach.call(inputs, function (input) {
  input.addEventListener("click", function () {
    input.classList.add("noLine");
  });
});
const textarea = document.querySelector("textarea");
textarea.addEventListener("click", function () {
  textarea.classList.add("noLine");
});
/*
DATA INPUT FILTER 
https://jsfiddle.net/emkey08/zgvtjc51
*/

function setInputFilter(textbox, inputFilter) {
  [
    "input",
    "keydown",
    "keyup",
    "mousedown",
    "mouseup",
    "select",
    "contextmenu",
    "drop",
  ].forEach(function (event) {
    textbox.addEventListener(event, function () {
      if (inputFilter(this.value)) {
        this.oldValue = this.value;
        this.oldSelectionStart = this.selectionStart;
        this.oldSelectionEnd = this.selectionEnd;
      } else if (this.hasOwnProperty("oldValue")) {
        this.value = this.oldValue;
        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
      } else {
        this.value = "";
      }
    });
  });
}

// Install input filters.
setInputFilter(document.getElementById("number"), function (value) {
  return (
    /^-?\d*$/.test(value) && (value === "" || parseInt(value) <= 999999999)
  );
});
