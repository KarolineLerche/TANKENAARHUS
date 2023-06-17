

/* RESPONSIVE NAV SIDEBAR */
function openNav() {
  document.getElementById("mySidenav").style.width = "200px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

/* Åben - Lukket funktion baseret på klokkeslæt */

/* Vi definere vores variabler */
let open = document.getElementById("openNow");
let closed = document.getElementById("closed");


/* MODALT VINDUE - RANGOM ØL GENERATOR */
/* Vi definerer vores variabler med ID */
let modal = document.getElementById("myModal");
let btn = document.getElementById("modalButton");
let span = document.getElementsByClassName("close")[0];

/* Funktion der viser det modale vindue ved klik på knap */
btn.onclick = function() {
  modal.style.display = "block";
}

/* Funktion der lukker vinduet igen ved tryk på span */
span.onclick = function() {
  modal.style.display = "none";
}

/* Funktion der lukker vinduet igen ved tryk på alt andet end det modale vindue */
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

/* Funktion med et array der indeholder forskellige øl. 
Vi bruger math random til at vælge en tilfældig øl fra arrayet, 
og innerHTML til at sætte resultatet ind i vores HTML */
btnBeer.onclick = function random(){
  let beer = ["Kings County - Infinite Machine", "Kings County - Superhero Sidekicks", "Kings County - Venemous Villains", "Ebeltoft Gårdbryggeri - Wildflower IPA", "Ebeltoft Gårdbryggeri - Raw Power Double IPA", "Ebeltoft Gårdbryggeri - Imperial Stout", "Odense Classic", "Odense Pilsner", "Anarkist - Bloody Weizen", "Sol (0%)", "Galipette (0%)", "Anarkist (0%)", "Ceres top", "Anarkist - Crisp 'N Cold", "Anarkist - Mighty Mild", "Anarkist - White Dragon", "Anarkist - Fizzy Lime IPA", "To Øl - Snublejuice", "To Øl - House of Pale", "To Øl - Implosion", "To Øl - Whirl Domination"]
  let randomBeer = Math.floor(Math.random() * beer.length);
  document.getElementById("yourBeer").innerHTML = beer[randomBeer];
}


// SCROLL TOP PIL //
let mybutton = document.getElementById("myBtn");

// Viser knappen, når brugeren scroller 500 px ned af siden //
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

/* Vi vælger den nuværende dag og får den nøjagtige time
Efterfølgende bruger vi switch til at vælge de klokkeslæt hvor henholdsvis
Lukket og Åben skal vise og ikke vise sig*/
switch (new Date().getHours()){
  case 9:
    case 10:
      case 11:
        case 12:
          case 13:
            case 14:
              case 15:
                case 16:
                  case 17:
                    case 18:
                      case 19:
                        case 20:
                          case 21:                     
    openNow.style.display = "block";
    break;
    case 22:
      case 23:
        case 0:
          case 1:
            case 2:
              case 3:
                case 4:
                  case 5:
                    case 6:
                      case 7:
                        case 8:                   
      closed.style.display = "block";

}

/* Her opdaterer vi funktionen hvert sekund */
getHours();
setInterval(myTime,1000);

// Tager brugeren til toppen, ved klik //
function topFunction() {
  document.body.scrollTop = 0; // Til Safari //
  document.documentElement.scrollTop = 0; // Til Chrome, Firefox, IE and Opera //
}






















