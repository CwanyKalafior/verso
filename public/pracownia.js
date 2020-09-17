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
// VANTA.FOG({
//   el: "#vanta",
//   mouseControls: true,
//   touchControls: true,
//   gyroControls: false,
//   minHeight: 200.0,
//   minWidth: 200.0,
//   highlightColor: 0x464646,
//   midtoneColor: 0x575757,
//   lowlightColor: 0x222222,
//   baseColor: 0x252525,
//   blurFactor: 0.15,
//   speed: 1.1,
//   zoom: 2.0,
// });

// V2
// VANTA.FOG({
//   el: "#vanta",
//   mouseControls: true,
//   touchControls: true,
//   gyroControls: false,
//   minHeight: 200.00,
//   minWidth: 200.00,
//   highlightColor: 0x222222,
//   midtoneColor: 0x202020,
//   lowlightColor: 0x252525,
//   baseColor: 0x2d2d2d,
//   blurFactor: 0.56,
//   speed: 0.10,
//   zoom: 0.50
// })

// V3
// VANTA.FOG({
//   el: "#vanta",
//   mouseControls: true,
//   touchControls: true,
//   gyroControls: false,
//   minHeight: 200.00,
//   minWidth: 200.00,
//   highlightColor: 0x2a2a2a,
//   midtoneColor: 0x343434,
//   lowlightColor: 0x464646,
//   baseColor: 0x252525,
//   blurFactor: 0.40,
//   speed: 0.10,
//   zoom: 0.60
// })

// V4
VANTA.FOG({
  el: "#vanta",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  highlightColor: 0x313131,
  midtoneColor: 0x393939,
  lowlightColor: 0x212121,
  baseColor: 0x272727,
  blurFactor: 0.45,
  speed: 0.1,
  zoom: 0.5,
})