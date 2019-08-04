/*$(window).ready(function(){
    $(".button").click(function(){
        $(this).hide();
 });

 document.getElementById('demo').innerHTML = Date();

});

function myFunc(){
    $(".button").click(function(){
        $("#Demo").fadeIn();
    });
}*/

$(window).ready(function () {
  var date = Date();

  document.getElementById('demo').innerHTML = date;
});

$(window).ready(function () {

});

// Skapa en ny funktion
// I funktionen, skapa en ny variabel som fångar datum --> Date();
// Därefter så uppdatera elementets innerHTML med variabelns värde.
// Elementet har IDt #demo.











/* 
    function getDate(){
        var d = new date();
        console.log(d.getDate());
        console.log("Testar funktionen getDate().")
        console.log("Slutet på funktionen getDate().")
    }
 
    $("btn2").click(function(){
        $(this).hide();
    });
    var d = new Date();*/





/*window.onload = function() {
    
    }
    
    document.ready = function() {
    
    }
    
    // jQuery
    
    /*$(document).ready(function() {
        // $('#myModal').modal('show');
    });
    
    $(window).ready(function() {
        var ChoiceFieldGroupElements = document.querySelectorAll(".ms-ChoiceFieldGroup");
        for (var i = 0; i < ChoiceFieldGroupElements.length; i++) {
            new fabric['ChoiceFieldGroup'](ChoiceFieldGroupElements[i]);
        }
    
        var PersonaCardElement = document.querySelectorAll(".ms-PersonaCard");
        for (var i = 0; i < PersonaCardElement.length; i++) {
            new fabric.PersonaCard(PersonaCardElement[i]);
        }
    
        var storageInformation = localStorage.getItem("userData");
        if (!storageInformation) {
            $('#myModal').modal('show');
        } else if (storageInformation) {
            var data = storageInformation;
            data = JSON.parse(data);
            $('#spoFirstName').append(data[0].firstName);
            $('#spoProfession').append(data[0].profession);
            $('#personInfo').show();
    
        }
    
    });
    
    function saveSettings() {
        const firstName = $('#inputFirstName')[0].value;
        const profession = $('#inputProfession')[0].value;
        const language = getLanguage();
        var settings = [{ "firstName": firstName, "profession": profession, "language": language }];
    
        console.log(firstName);
        console.log(profession);
        console.log(language);
    
        settings = JSON.stringify(settings);
        localStorage.setItem("userData", settings);
    }
    
    function getLanguage() {
        const elements = $('.ms-RadioButton');
        for (var i = 0; i < elements.length; i++) {
            var elementHTML = elements[i].innerHTML;
            if (elementHTML.indexOf("aria-checked=\"true\"") > 0) {
                switch (i) {
                    case 0:
                        return "Svenska";
                        break;
                    case 1:
                        return "English";
                        break;
                    case 2:
                        return "Espanol";
                        break;
                    default:
                        break;
                }
            }
        }
    }*/
