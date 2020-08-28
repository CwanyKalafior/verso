//Input number validation
$('input.number').keyup(function (event) {
    if (event.which !== 8 && event.which !== 107 && event.which !== 0 && event.which < 48 || event.which > 57) {
        $(this).val(function (index, value) {
            return value.replace(/\D/g, "");
        });
    }
});




$('form').on('submit', (e) => {
    e.preventDefault();

    //Pulling data to var (or const)
    var name = $('#name').val().trim();
    var number = $('#number').val().trim();
    var email = $('#email').val().trim();
    var text = $('#message').val().trim();

    //Container for data
    const data = {
        name,
        number,
        email,
        text
    };


    var nameCheck = $('#name').val();
    var numberCheck = $('#number').val();
    var emailCheck = $('#email').val();
    var textCheck = $('#message').val();
    var checkBox = document.getElementById("radio");

    if (emailCheck.length > 2 && emailCheck.includes('@') && emailCheck.includes('.')
        && checkBox.checked == true
        && numberCheck.length >= 9
        && textCheck.length > 0
        && nameCheck.length > 0) {

        //Sending data to Server
        $.post('/email', data, function () {
            console.log('SERVER RECEIVED OUR DATA');
        });
        //Email validation - Server
        $.ajax({
            url: "form.html",

            //Throw success
            success: function (data) {
                alert("Wiadomość została wysłana. Odpowiemy najszybciej jak to możliwe.");
                var delay = 1;
                setTimeout(function () { window.location = "index.html"; }, delay);
            },

            //Throw error
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                if (XMLHttpRequest.status == 0) {
                    alert("Błąd. Wiadomość nie została wysłana. Sprawdź swoje połączenie internetowe.");
                } else if (XMLHttpRequest.status == 404) {
                    alert("Błąd. Wiadomość nie została wysłana.");
                    var delay = 1;
                    setTimeout(function () { window.location = "kontakt.html"; }, delay);
                } else if (XMLHttpRequest.status == 500) {
                    alert("Błąd. Wiadomość nie została wysłana.");
                    var delay = 1;
                    setTimeout(function () { window.location = "kontakt.html"; }, delay);
                } else {
                    alert('Błąd. Wiadomość nie została wysłana.\n' + XMLHttpRequest.responseText);
                    var delay = 1;
                    setTimeout(function () { window.location = "kontakt.html"; }, delay);
                }
            }
        });
    }


    //All
    else if (emailCheck.length <= 2 && !emailCheck.includes('@') && !emailCheck.includes('.')
        && checkBox.checked == false
        && numberCheck.length < 9
        && textCheck.length == 0
        && nameCheck.length == 0) {
        alert("Prosimy, uzupełnij prawidłowo wszystkie pola.");
    }



    //Name and email
    else if (emailCheck.length <= 2 && !emailCheck.includes('@') && !emailCheck.includes('.')
        && nameCheck.length == 0) {
        alert("Prosimy, uzupełnij prawidłowo wszystkie pola.");
    }
    //Name and checker
    else if (checkBox.checked == false
        && nameCheck.length == 0) {
        alert("Prosimy, uzupełnij prawidłowo wszystkie pola.");
    }
    //Name and number
    else if (numberCheck.length < 9
        && nameCheck.length == 0) {
        alert("Prosimy, uzupełnij prawidłowo wszystkie pola.");
    }
    //Name and message
    else if (textCheck.length == 0
        && nameCheck.length == 0) {
        alert("Prosimy, uzupełnij prawidłowo wszystkie pola.");
    }
    //Name and number and mail
    else if (emailCheck.length <= 2 && !emailCheck.includes('@') && !emailCheck.includes('.')
        && numberCheck.length < 9
        && nameCheck.length == 0) {
        alert("Prosimy, uzupełnij prawidłowo wszystkie pola.");
    }
    //Name and number and message
    else if (numberCheck.length < 9
        && textCheck.length == 0
        && nameCheck.length == 0) {
        alert("Prosimy, uzupełnij prawidłowo wszystkie pola.");
    }
    //Name and number and checker
    else if (checkBox.checked == false
        && numberCheck.length < 9
        && nameCheck.length == 0) {
        alert("Prosimy, uzupełnij prawidłowo wszystkie pola.");
    }
    //Name and mail and text
    else if (emailCheck.length <= 2 && !emailCheck.includes('@') && !emailCheck.includes('.')
        && textCheck.length == 0
        && nameCheck.length == 0) {
        alert("Prosimy, uzupełnij prawidłowo wszystkie pola.");
    }
    //Name and mail and checker
    else if (emailCheck.length <= 2 && !emailCheck.includes('@') && !emailCheck.includes('.')
        && checkBox.checked == false
        && nameCheck.length == 0) {
        alert("Prosimy, uzupełnij prawidłowo wszystkie pola.");
    }
    //Name and text and checker
    else if (checkBox.checked == false
        && textCheck.length == 0
        && nameCheck.length == 0) {
        alert("Prosimy, uzupełnij prawidłowo wszystkie pola.");
    }
    //Name and number and mail and text
    else if (emailCheck.length <= 2 && !emailCheck.includes('@') && !emailCheck.includes('.')
        && numberCheck.length < 9
        && textCheck.length == 0
        && nameCheck.length == 0) {
        alert("Prosimy, uzupełnij prawidłowo wszystkie pola.");
    }
    //Name and number and mail and checker
    else if (emailCheck.length <= 2 && !emailCheck.includes('@') && !emailCheck.includes('.')
        && checkBox.checked == false
        && numberCheck.length < 9
        && nameCheck.length == 0) {
        alert("Prosimy, uzupełnij prawidłowo wszystkie pola.");
    }
    else if (checkBox.checked == false
        && numberCheck.length < 9
        && textCheck.length == 0
        && nameCheck.length == 0) {
        alert("Prosimy, uzupełnij prawidłowo wszystkie pola.");
    }

    else if (emailCheck.length <= 2 && !emailCheck.includes('@') && !emailCheck.includes('.')
        && checkBox.checked == false
        && textCheck.length == 0
        && nameCheck.length == 0) {
        alert("Prosimy, uzupełnij prawidłowo wszystkie pola.");
    }



    //Mail and checker
    else if (emailCheck.length <= 2 && !emailCheck.includes('@') && !emailCheck.includes('.')
        && checkBox.checked == false) {
        alert("Prosimy, uzupełnij prawidłowo wszystkie pola.");
    }
    //Mail and number
    else if (emailCheck.length <= 2 && !emailCheck.includes('@') && !emailCheck.includes('.')
        && numberCheck.length < 9) {
        alert("Prosimy, uzupełnij prawidłowo wszystkie pola.");
    }
    //Mail and message
    else if (emailCheck.length <= 2 && !emailCheck.includes('@') && !emailCheck.includes('.')
        && textCheck.length == 0) {
        alert("Prosimy, uzupełnij prawidłowo wszystkie pola.");
    }
    //Checker and number
    else if (checkBox.checked == false
        && numberCheck.length < 9
    ) {
        alert("Prosimy, uzupełnij prawidłowo wszystkie pola.");
    }
    //Checker and message
    else if (checkBox.checked == false
        && textCheck.length == 0) {
        alert("Prosimy, uzupełnij prawidłowo wszystkie pola.");
    }
    //Number and message
    else if (numberCheck.length < 9
        && textCheck.length == 0) {
        alert("Prosimy, uzupełnij prawidłowo wszystkie pola.");
    }



    //Mail and number and message
    else if (emailCheck.length <= 2 && !emailCheck.includes('@') && !emailCheck.includes('.')
        && numberCheck.length < 9
        && textCheck.length == 0) {
        alert("Prosimy, uzupełnij prawidłowo wszystkie pola.");
    }
    //Mail and checker and message
    else if (emailCheck.length <= 2 && !emailCheck.includes('@') && !emailCheck.includes('.')
        && checkBox.checked == false
        && textCheck.length == 0) {
        alert("Prosimy, uzupełnij prawidłowo wszystkie pola.");
    }
    //Mail and number and checker
    else if (emailCheck.length <= 2 && !emailCheck.includes('@') && !emailCheck.includes('.')
        && checkBox.checked == false
        && numberCheck.length < 9) {
        alert("Prosimy, uzupełnij prawidłowo wszystkie pola.");
    }
    //Checker and number and message
    else if (checkBox.checked == false
        && numberCheck.length < 9
        && textCheck.length == 0) {
        alert("Prosimy, uzupełnij prawidłowo wszystkie pola.");
    }


    //Name
    else if (nameCheck.length == 0) {
        alert("Podaj swoje imię i nazwisko.");
    }
    //Email
    else if (emailCheck.length <= 2 && !emailCheck.includes('@') && !emailCheck.includes('.')) {
        alert("Podany adres email nie jest poprawny.");
    }
    //Checker
    else if (checkBox.checked == false) {
        alert("Musisz zaakceptować warunki przed wysłaniem zgłoszenia.");
    }
    //Number
    else if (numberCheck.length < 9) {
        alert("Upewnij się, że podany numer telefonu jest prawidłowy.");
    }
    //Message
    else if (textCheck.length == 0) {
        alert("Uzupełnij wiadomość.");
    }

});;

$(document).ready(function () {
    $(document).on('mouseenter', '.divbutton', function () {
        $(this).find(":button").show();
    }).on('mouseleave', '.divbutton', function () {
        $(this).find(":button").hide();
    }).on('click', ':button', function () {
        $(this).parent().remove();
    });
});