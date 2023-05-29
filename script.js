

/* RESPONSIVE NAV SIDEBAR */
function openNav() {
  document.getElementById("mySidenav").style.width = "200px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

/* ÅBEN / LUKKET FUNKTION - UD FRA KLOKKESLÆT */
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
setInterval(myTime,100);


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

// Tager brugeren til toppen, ved klik //
function topFunction() {
  document.body.scrollTop = 0; // Til Safari //
  document.documentElement.scrollTop = 0; // Til Chrome, Firefox, IE and Opera //
}

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




















