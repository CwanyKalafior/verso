
//page name (eg. 0001/0002...)
var page = location.pathname.substring(location.pathname.lastIndexOf("/") + 1).substring(0, 4);;
console.log("Page ID: " + page);

//fetch data from JSON and generate subpage content
$(function () {
    var obj;

    fetch("https://raw.githubusercontent.com/CwanyKalafior/verso/master/galeria.json")
        .then((res) => res.json())
        .then((data) => (obj = data))
        .then(() => {
            //search database for object
            for (var i = 0; i < obj.length; i++) {
                //if object exists
                if (obj[i].nazwa_projektu == page) {
                    //display data in console
                    var obj_active = obj[i];
                    console.log(obj_active);

                    //checking if data exists
                    //working with data and creating elements

                    //Add metadata
                    document.head.innerHTML += `<title>grupaVERSO • ${obj_active.nazwa}</title>
                    <meta name="url" content="https://www.grupaverso.pl/projekty/${obj_active.nazwa_projektu}.html" />
                    <meta property="og:title" content="grupaVERSO • ${obj_active.nazwa}" />
                    <meta property="og:image" content="../content/${obj_active.nazwa_projektu}/${obj_active.nazwa_projektu}.webp" />


  <meta
    name="description"
    content="✔️ Indywiduale projekty ∘ Wyceny ∘ Nowoczesne domy jednorodzinne ∘ Biurowce ∘ Apartamentowce ∘ Projektownie wnętrz ∘ Urbanistyka ∘ Planownie krajobrazowe ∘ Nazdór budowlany ∘ Instalacje przestrzenne ∘ Design"
  />
  <meta
    name="og:description"
    content="✔️ Indywiduale projekty ∘ Wyceny ∘ Nowoczesne domy jednorodzinne ∘ Biurowce ∘ Apartamentowce ∘ Projektownie wnętrz ∘ Urbanistyka ∘ Planownie krajobrazowe ∘ Nazdór budowlany ∘ Instalacje przestrzenne ∘ Design"
/>
                    `;

                    //Display "nazwa"
                    if (obj_active.nazwa === "") {
                        console.log("nazwa - empty");
                    } else {
                        document.getElementById("nazwa_id").innerHTML += `<p class="main-title">${obj_active.nazwa}</p>`
                    }

                    //Display "typ_obiektu"
                    if (obj_active.typ_obiektu === "") {
                        console.log("typ_obiektu - empty");
                    } else {
                        document.getElementById("description").innerHTML += `<div class="obiekt"><span>Typ obiektu:</span> </br> ${obj_active.typ_obiektu}</div>`
                    }

                    //Display "lokalizacja"
                    if (obj_active.lokalizacja === "") {
                        console.log("lokalizacja - empty");
                    } else {
                        document.getElementById("description").innerHTML += `<div class="lokalizacja"><span>Lokalizacja:</span> </br> ${obj_active.lokalizacja}</div>`
                    }

                    //Display "zakres"
                    if (obj_active.zakres === "") {
                        console.log("zakres - empty");
                    } else {
                        document.getElementById("description").innerHTML += `<div class="zakres"><span>Zakres:</span> </br> ${obj_active.zakres}</div>`
                    }

                    //Display "ukonczono"
                    if (obj_active.ukonczono === "") {
                        console.log("ukonczono - empty");
                    } else {
                        document.getElementById("description").innerHTML += `<div class="data"><span>Ukończono:</span> </br> ${obj_active.ukonczono}</div>`
                    }

                    //Display "powierzchnia_uzytkowa"
                    if (obj_active.powierzchnia_uzytkowa === "") {
                        console.log("powierzchnia_uzytkowa - empty");
                    } else {
                        document.getElementById("description").innerHTML += `<div class="powierzchnia"><span>Powierzchnia użytkowa:</span> </br> ${obj_active.powierzchnia_uzytkowa}</div >`
                    }


                    //Display "autorzy"
                    if (obj_active.autorzy.length === 0) {
                        console.log("autorzy - empty");
                    } else {
                        var i = 0;
                        var template_autorzy = `<div class="autorzy">
                        <span>Autorzy:</span> </br>`;
                        for (i = 0; i < obj_active.autorzy.length; i++) {
                            template_autorzy += `${obj_active.autorzy[i]}</br >`
                        }
                        document.getElementById("description").innerHTML += template_autorzy += `</div >`;
                    }

                    //Display "zdjecia"
                    if (obj_active.zdjeca === "") {
                        console.log("zdjecia - empty");
                    } else {
                        var i = 0;
                        var template_zdjecia = `<div class="pictures"></br>`;
                        for (i = 0; i < obj_active.zdjecia.length; i++) {
                            template_zdjecia += `<img src=".${obj_active.zdjecia[i]}" alt=""> </br>`
                        }
                        document.getElementById("element-container").innerHTML += template_zdjecia += `</div >`;
                    }

                    //Display "fotograf"
                    if (obj_active.fotograf.length === 0) {
                        console.log("fotograf - empty");
                    } else {
                        var i = 0;
                        var template_fotograf_title = `<div class="description"></br>
                        <div class="oprawa">
                        <span>Fotografia: </span>`;
                        var template_fotograf = ``;
                        for (i = 0; i < obj_active.fotograf.length; i++) {
                            template_fotograf += ` ${obj_active.fotograf[i]} </br>`
                        }
                        document.getElementById("element-container").innerHTML += template_fotograf_title += template_fotograf += `</div></div >`;
                    }
                    //Stopka
                    document.getElementById('stopka').innerHTML += `<div class="about_us-info">
                    <div class="verso-arrow-up">
                        <div class="container">
                        <div class="background"></div>
                        <div class="line-1"></div>
                        <div class="line-2"></div>
                        <div class="line-3"></div>
                        </div>
                    </div>
                    <span>Dowiedz się co możemy zaproponować Tobie.</span>
                    <a href="mailto:biuro@grupaverso.com.pl">biuro@grupaverso.com.pl</a></br>
                    <a href="tel:+48 502 327 654">+48 502 327 654</a></br></br>
                    <a href="tel:+48 667 249 109">+48 667 249 109</a>
                    <p>Copyright © 2020 grupaVERSO</br>All rights reserved.</p>
                </div>
                <footer>
                <p>Designed and developed with ❤</p>
                <p>by <a href="https://www.jackowskivisuals.com/about" target="_blank">Jackowski Visuals</a>
                </p>
                </footer>
                <script>

    jQuery(function ($) {
      $.scrollTo(0);
      $(".verso-arrow-up").click(function () {
        $.scrollTo($("#class-scroll-indicator"), 500);
      });
    });
  </script>`;

                    return 0;
                }
            }
        });
});