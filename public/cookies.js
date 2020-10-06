var myCookie = Cookies.get("cookie_grupaverso");
console.log(myCookie)


var cookie_content = `<div class="cookies-close" onclick="document.getElementById('cookies-info').style.display='none'">
<div class="container">
  <div class="background"></div>
  <div class="part-1"></div>
  <div class="part-2"></div>
</div>
</div>
<div class="cookies-text">
<span>Ciasteczka!</span>
<p>
  W celu poprawienia wygody użytkowania oraz prowadzenia badań rynkowych, nasza strona wykorzystuje pliki cookies (tzw. ciasteczka). Każdy ma
  możliwość ich wyłączenia bezpośrednio w ustawieniach przeglądarki. Dalsze korzystanie ze strony oznacza ich
  akceptację.</br>
  <a href="">Polityka Prywatności</a>
</p>
</div>`;


const addCookieFunction = () => {
  Cookies.set("cookie_grupaverso", "true", { expires: 30 });
};

if (myCookie) {
  document.getElementById("cookies-info").style.display = "none";
  console.log("COOKIE ISTNIEJE");
} else {
  document.getElementById("cookies-info").style.display = "block";
  document.getElementById("cookies-info").innerHTML += cookie_content;
  window.addEventListener("click", addCookieFunction);
}
