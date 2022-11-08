var Cronometro = document.getElementById("time");
var Puntos = document.getElementById("puntos");
var Rango = document.getElementById("rango");
var Final = document.getElementById("final");
var audio = null;
var audio2 = null;
var number = 30;
var puntos = 0;
var rango = "cadete";
var jugando = false;
var una = true;
//Movimiento del Pato hecho por Jhonny Castillo
function MoverPato() {
    jugando = true;
    randNum = Math.round(Math.random() * 100);
    randNum2 = Math.round(Math.random() * 600);
    var A = document.getElementById("patorobot").style.marginTop = randNum + "px";
    var B = document.getElementById("patorobot").style.marginLeft = randNum2 + "px";
}
//Audio de explosion por Jhonny Castillo
function enemigo() { // error de sintaxis fuction de puntaje 
    var fileUrl = "Sounds/impacto.wav";
    var audio = new Audio(fileUrl);
    audio.play();
    puntos += 100;
}
//Funcion de Restar tiempo por Juan Villegas
function RestarCronometro() {

    if (jugando = number > 0) { // jugando y number es argumnetar
        Cronometro.innerHTML = "<p>" + number + "s</p>";
        number--;
    } else if (number == 0) {

        if (una) {
            MostrarDatos();
            una = false;
            //it will print the time and date according to the above condition in Unix-timestamp format
        }
    }


}
//Funcion Mostrar Datos Finales por Juan Villegas
function MostrarDatos() {
    Final.innerHTML = "<a href = '#centrado'><button id ='botonFinal'></button></a>";
    Cronometro.innerHTML = "<p>0s</p>";
    Puntos.innerHTML = "<p>==== PUNTOS : " + puntos + " ====</p>";
    if (puntos >= 1000) Rango.innerHTML = "<p>==== RANGO : CAPITAN ====</p>";
    else if (puntos >= 500) Rango.innerHTML = "<p>==== RANGO : OFICIAL ====</p>";
    else if (puntos >= 100) Rango.innerHTML = "<p>==== RANGO : CADETE ====</p>";
    MusicaVictoria();
    pauseInicio();
}
setInterval(RestarCronometro, 1000);

//Musica de fondo por Jhonny Castillo
function MusicaInicio() {
    var fileUrl = "Sounds/fondomusicalproyecto.wav";
    audio = new Audio(fileUrl);
    audio.loop = true;
    audio.volume = 0.5;
    audio.play()
}

function pauseInicio() {
    audio.pause();
}

function MusicaVictoria() {
    var fileUrl = "Sounds/win.mp3";
    audio2 = new Audio(fileUrl);
    audio2.volume = 0.5;
    audio2.play();
}
//Eventos por Jhonny Castillo
document.getElementById('musica').addEventListener("click", MusicaInicio);
document.getElementById('patorobot').addEventListener("click", function() { setTimeout(MoverPato, 0); });
document.getElementById('patorobot').addEventListener("click", function() { setTimeout(enemigo, 250); });

//Sonido de pistola por Juan Villegas y Jhonny Castillo
function MouseSound() {
    var fileUrl = "Sounds/sonidopistola.wav";
    var audio = new Audio(fileUrl);
    audio.play();
}
window.addEventListener('click', MouseSound, false);

//Movimiento del Arma por Juan Villegasvar miArma = document.getElementById("arma-box")

var miArma = document.getElementById("arma-box");

function mousemove(event) {

    miArma.style.position = 'align'
    miArma.style.marginLeft = (event.clientX / 35) + "%"
    miArma.style.paddingRight = (event.clientX / 20) + "%"


}


//Animacion de Disparo por Juan Villegas
function Shoot() {
    miArma.style.animationName = "armAnim"
    miArma.style.animationPlayState = "running";
    setTimeout(function() {
        miArma.style.animationPlayState = "paused";
        miArma.style.animationName = "none"
    }, 430);
}
//Eventos por Juan Villegas
window.addEventListener('mousemove', mousemove);
window.addEventListener('click', Shoot)