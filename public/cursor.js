const cursorFunction = () => {
  var cursor = $(".cursor"),
    follower = $(".cursor-follower");
  const removeDisplayBlock = () => {
    cursor.removeClass("displayBlock");
    follower.removeClass("displayBlock");
    cursor.addClass("displayNone");
    follower.addClass("displayNone");
  };
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    removeDisplayBlock();
  } else if (
    /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
      ua
    )
  ) {
    removeDisplayBlock();
  } else {
    cursor.removeClass("displayNone");
    follower.removeClass("displayNone");
    cursor.addClass("displayBlock");
    follower.addClass("displayBlock");
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
    const setCursorActive = () => {
      cursor.addClass("active");
      follower.addClass("active");
    };
    const removeCursorActive = () => {
      cursor.removeClass("active");
      follower.removeClass("active");
    };
    const setCursorLittle = () => {
      cursor.addClass("active");
      follower.addClass("little");
    };
    const removeCursorLittle = () => {
      cursor.removeClass("active");
      follower.removeClass("little");
    };
    const noVisibleCursor = () => {
      cursor.addClass("novisible");
      follower.addClass("novisible");
    };
    const visibleCursor = () => {
      cursor.removeClass("novisible");
      follower.removeClass("novisible");
    };
    // ADD
    // strona główna
    $(".cookies-info").on("mouseenter", function () {
      setCursorActive();
    });
    $(".topnav-buttoms a").on("mouseenter", function () {
      setCursorActive();
    });
    $(".brand-name").on("mouseenter", function () {
      setCursorActive();
    });
    $(".btn-posnawr-indx").on("mouseenter", function () {
      setCursorLittle();
    });
    $(".languages-buttoms a").on("mouseenter", function () {
      setCursorActive();
    });
    $(".social-media-buttoms a").on("mouseenter", function () {
      setCursorActive();
    });
    $(".gtpbtn").on("mouseenter", function () {
      setCursorActive();
    });
    // projekty
    $(".wszy-active").on("mouseenter", function () {
      setCursorActive();
    });
    $(".projekty-links a").on("mouseenter", function () {
      setCursorActive();
    });
    $(".btn-posnawr").on("mouseenter", function () {
      setCursorLittle();
    });
    $(".projekt-lista img").on("mouseenter", function () {
      noVisibleCursor();
    });
    $(".swiper-container").on("mouseenter", function () {
      noVisibleCursor();
    });
    // galeria
    $(".grid").on("mouseenter", function () {
      noVisibleCursor();
    });
    $(".wszystkie-links a").on("mouseenter", function () {
      setCursorActive();
    });
    $(".proj-active").on("mouseenter", function () {
      setCursorActive();
    });
    // case
    $(".pictures img").on("mouseenter", function () {
      setCursorActive();
    });
    // pracownia
    $(".awards-btn").on("mouseenter", function () {
      setCursorActive();
    });
    $(".grupa-img").on("mouseenter", function () {
      setCursorActive();
    });
    $(".pracownia-btn").on("mouseenter", function () {
      setCursorLittle();
    });
    // kontakt
    $(".contact-authors a").on("mouseenter", function () {
      setCursorActive();
    });
    $(".verso-close").on("mouseenter", function () {
      setCursorActive();
    });
    // form
    $("input").on("mouseenter", function () {
      setCursorActive();
    });
    $(".checkmark").on("mouseenter", function () {
      setCursorActive();
    });
    $("textarea").on("mouseenter", function () {
      setCursorActive();
    });
    $(".form-accept_text").on("mouseenter", function () {
      setCursorActive();
    });
    // stopka
    $(".about_us-info a").on("mouseenter", function () {
      setCursorActive();
    });
    $(".verso-arrow-up").on("mouseenter", function () {
      setCursorActive();
    });
    $("footer a").on("mouseenter", function () {
      setCursorActive();
    });
    // REMOVE
    // strona główna
    $(".cookies-info").on("mouseleave", function () {
      removeCursorActive();
    });
    $(".topnav-buttoms a").on("mouseleave", function () {
      removeCursorActive();
    });
    $(".brand-name").on("mouseleave", function () {
      removeCursorActive();
    });
    $(".btn-posnawr-indx").on("mouseleave", function () {
      removeCursorLittle();
    });
    $(".languages-buttoms a").on("mouseleave", function () {
      removeCursorActive();
    });
    $(".social-media-buttoms a").on("mouseleave", function () {
      removeCursorActive();
    });
    $(".gtpbtn").on("mouseleave", function () {
      removeCursorActive();
    });
    // projekty
    $(".wszy-active").on("mouseleave", function () {
      removeCursorActive();
    });
    $(".projekty-links a").on("mouseleave", function () {
      removeCursorActive();
    });
    $(".btn-posnawr").on("mouseleave", function () {
      removeCursorLittle();
    });
    $(".projekt-lista img").on("mouseleave", function () {
      visibleCursor();
    });
    $(".swiper-container").on("mouseleave", function () {
      visibleCursor();
    });
    // galeria
    $(".grid").on("mouseleave", function () {
      visibleCursor();
    });
    $(".wszystkie-links a").on("mouseleave", function () {
      removeCursorActive();
    });
    $(".proj-active").on("mouseleave", function () {
      removeCursorActive();
    });
    // case
    $(".pictures img").on("mouseleave", function () {
      removeCursorActive();
    });
    // pracownia
    $(".awards-btn").on("mouseleave", function () {
      removeCursorActive();
    });
    $(".grupa-img").on("mouseleave", function () {
      removeCursorActive();
    });
    $(".pracownia-btn").on("mouseleave", function () {
      removeCursorLittle();
    });
    // kontakt
    $(".contact-authors a").on("mouseleave", function () {
      removeCursorActive();
    });
    $(".verso-close").on("mouseleave", function () {
      removeCursorActive();
    });
    // form
    $("input").on("mouseleave", function () {
      removeCursorActive();
    });
    $(".checkmark").on("mouseleave", function () {
      removeCursorActive();
    });
    $("textarea").on("mouseleave", function () {
      removeCursorActive();
    });
    $(".form-accept_text").on("mouseleave", function () {
      removeCursorActive();
    });
    // stopka
    $(".about_us-info a").on("mouseleave", function () {
      removeCursorActive();
    });
    $(".verso-arrow-up").on("mouseleave", function () {
      removeCursorActive();
    });
    $("footer a").on("mouseleave", function () {
      removeCursorActive();
    });
  }
};

window.addEventListener("resize", cursorFunction);
window.addEventListener("load", cursorFunction);
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
