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
