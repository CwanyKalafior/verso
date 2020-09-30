var myCookie = Cookies.get("cookie_grupaverso");
console.log(myCookie)
if (myCookie) {
    document.getElementById("cookies-info").style.display = "none";
    console.log("COOKIE ISTNIEJE");
} else {
    document.getElementById("cookies-info").style.display = "block";
    console.log("COOKIE NIE ISTNIEJE");
    Cookies.set("cookie_grupaverso", "true", { expires: 30 });
}
