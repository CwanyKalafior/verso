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
// V1
VANTA.FOG({
  el: "#vanta",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.0,
  minWidth: 200.0,
  highlightColor: 0x464646,
  midtoneColor: 0x575757,
  lowlightColor: 0x222222,
  baseColor: 0x252525,
  blurFactor: 0.15,
  speed: 1.1,
  zoom: 2.0,
});
