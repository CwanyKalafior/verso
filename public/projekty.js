var newElement = document.createElement("div");
var elm = document.getElementById("sec");

newElement.innerHTML += `
<div class="gallery">
    <img src="/content/archi/kuznicakied750x400.jpg" alt="">
    <div class="gallery-description">
      <p>Dom leśny <br> <span>Kuźnica | 2019</span></p>
    </div>
    <img src="/content/archi/1a46bb29da2eabc3b9965033fbb31961.jpg" alt="">
    <div class="gallery-description">
      <p>Dom leśny <br> <span>Kuźnica | 2019</span></p>
    </div>
    <img src="/content/archi/4cd8f6a530244d628b4e2295034e0da1.jpg" alt="">
    <div class="gallery-description">
      <p>Dom leśny <br> <span>Kuźnica | 2019</span></p>
    </div>
    <img src="/content/archi/6fa490ca18a99c562a60edaf01f49a77.jpg" alt="">
    <div class="gallery-description">
      <p>Dom leśny <br> <span>Kuźnica | 2019</span></p>
    </div>
    <img src="/content/archi/bc6f93ca53c4248e2e2c2eabd1d2a60f.jpg" alt="">
    <div class="gallery-description">
      <p>Dom leśny <br> <span>Kuźnica | 2019</span></p>
    </div>
</div>
`;
function onClick() {
  //    document.body.appendChild(element);
  elm.appendChild(newElement);
}
// swiper
var swiper = new Swiper(".swiper-container", {
  lazy: {
    loadPrevNext: true,
    preloadImages: false,
    lazy: true,
  },
  mousewheel: {
    invert: true,
  },
  autoplay: {
    delay: 4200,
    disableOnInteraction: false,
  },
  keyboard: {
    enabled: true,
  },
});
// pogrubianie linków
const allImages = document.querySelector(".projekty-links a:nth-of-type(1)");
const archiImages = document.querySelector(".projekty-links a:nth-of-type(2)");
const interiorsImages = document.querySelector(
  ".projekty-links a:nth-of-type(3)"
);

archiImages.addEventListener("click", function () {
  allImages.classList.remove("active");
  interiorsImages.classList.remove("active");
  archiImages.classList.add("active");
});

allImages.addEventListener("click", function () {
  allImages.classList.add("active");
  interiorsImages.classList.remove("active");
  archiImages.classList.remove("active");
});

interiorsImages.addEventListener("click", function () {
  interiorsImages.classList.add("active");
  allImages.classList.remove("active");
  archiImages.classList.remove("active");
});
