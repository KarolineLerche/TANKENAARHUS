


function openNav() {
  document.getElementById("mySidenav").style.width = "200px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}



/* Åben - Lukket funktion baseret på klokkeslæt */

/* Vi vælger den nuværende dag og får den nøjagtige time */
let date = new Date();
let hour = date.getHours();

/* Vi definere vores variabler */
let openNow = document.getElementById("openNow");
let closed = document.getElementById("closed");


/* Funktion der viser "Åbent" når klokkeslættet er over den ottende time 
dvs. klokken er 9 eller over og under 22. "else" viser "Lukket"*/
function myTime(){

  if (hour > 8, hour < 22) {
    openNow.style.display = "block";
  }
  else{
    closed.style.display = "block";
  }
}


myTime();
setInterval(myTime,10000);






// SCROLL TOP PIL //
// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}









/* Modalt vindue med et funktion der vælger tilfældig øl i et array */


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
  let beer = ["Anarkist", "Kings Country", "To øl", "Ebeltoft Bryghus", "Odense Classic", "Odense Pilsner", "Anarkist", "Sol (0%)", "Galipette (0%)", "Anarkist (0%)", "Ceres top",]
  let randomBeer = Math.floor(Math.random() * beer.length);
  document.getElementById("yourBeer").innerHTML = beer[randomBeer];
}




// ANIMATIONER //
AOS.init(); 


















