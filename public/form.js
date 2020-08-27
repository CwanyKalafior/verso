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

[].forEach.call(inputs, function (input) {
  input.addEventListener("click", function () {
    input.classList.add("noLine");
  });
});
const textarea = document.querySelector("textarea");
textarea.addEventListener("click", function () {
  textarea.classList.add("noLine");
});
// accept form
const checkmark = document.querySelector(".checkmark");

checkmark.addEventListener("click", function () {
  checkmark.classList.toggle("checkmark_white");
});
