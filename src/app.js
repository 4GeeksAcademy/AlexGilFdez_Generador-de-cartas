/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let palos = ["♦", "♥", "♠", "♣"];
let valores = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];
let palo1 = document.querySelector("#simboloArriba");
let numero = document.querySelector("#numero");
let palo2 = document.querySelector("#simboloAbajo");

function eleccionCarta(palo, numero) {
  let carta = [];
  carta.push(palo[Math.floor(Math.random() * palo.length)]);
  carta.push(numero[Math.floor(Math.random() * numero.length)]);
  return carta;
}
function colorPalo(paloeleccion) {
  if (paloeleccion[0] == "♥" || paloeleccion[0] == "♦") {
    document.querySelector("#simboloArriba").style.color = "red";
    document.querySelector("#simboloAbajo").style.color = "red";
  } else {
    document.querySelector("#simboloArriba").style.color = "black";
    document.querySelector("#simboloAbajo").style.color = "black";
  }
}

function asignarValor(arr) {
  console.log(arr[0]);
  palo1.innerHTML = arr[0];
  palo2.innerHTML = arr[0];
  numero.innerHTML = arr[1];
}

function generarCarta() {
  let carta = eleccionCarta(palos, valores);
  asignarValor(carta);
  colorPalo(carta);
}
window.onload = function() {
  generarCarta();
};
document.querySelector(".boton").addEventListener("click", generarCarta);
setInterval(generarCarta, 10000);
