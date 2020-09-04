//textarea
var autoExpand = function (field) {
  // Reset field height
  field.style.height = "inherit";

  // Get the computed styles for the element
  var computed = window.getComputedStyle(field);

  // Calculate the height
  var height =
    parseInt(computed.getPropertyValue("border-top-width"), 10) +
    parseInt(computed.getPropertyValue("padding-top"), 10) +
    field.scrollHeight +
    parseInt(computed.getPropertyValue("padding-bottom"), 10) +
    parseInt(computed.getPropertyValue("border-bottom-width"), 10);

  field.style.height = height + "px";
};

document.addEventListener(
  "input",
  function (event) {
    if (event.target.tagName.toLowerCase() !== "textarea") return;
    autoExpand(event.target);
  },
  false
);

// close form
function formClose() {
  window.history.back();
}

// noLine
const inputs = document.querySelectorAll("input");
const input = document.querySelector("input");
const value = inputs.value;
const formWrapper = document.querySelector(".wrapper");
const textarea = document.querySelector("textarea");

[].forEach.call(inputs, function (input) {
  input.addEventListener("change", function () {
    let inputValue = "";
    inputValue = input.value;
    if (inputValue.length === 0) {
      formWrapper.addEventListener("change", function () {
        input.classList.add("line");
        input.classList.remove("noLine");
      });
    } else {
      formWrapper.addEventListener("change", function () {
        input.classList.add("noLine");
        input.classList.remove("line");
      });
    }
  });
});

textarea.addEventListener("change", function () {
  let textValue = "";
  textValue = document.getElementById("message").value;
  if (textValue.length === 0) {
    formWrapper.addEventListener("change", function () {
      textarea.classList.add("line");
      textarea.classList.remove("noLine");
    });
  } else {
    formWrapper.addEventListener("change", function () {
      textarea.classList.add("noLine");
      textarea.classList.remove("line");
    });
  }
});

// accept form
const checkmark = document.querySelector(".checkmark");
let check = false;
checkmark.addEventListener("click", function () {
  checkmark.classList.toggle("checkmark_white");
  if (check === true) {
    document.getElementById("radio").checked = false;
    check = false;
  } else {
    document.getElementById("radio").checked = true;
    check = true;
  }
});
