/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// Palabras para generar los dominios, he tenido que meter la motosierra a todos los arrays, no era capaz de que no explotara de ninguna manera con cadenas tan largas en los arrays :S
let casa = ["casa", "house", "maison", "Haus", "дом"];
let grande = ["grande", "big", "grand", "groß"];
let libro = ["libro", "book", "livre", "Buch", "книга"];
let rapidamente = [
  "rápidamente",
  "quickly",
  "rapidement",
  "schnell",
  "velocemente"
];
let correr = ["correr", "run", "courir", "laufen"];
let extensiones = [".com", ".org", ".net", ".edu"];

let domainList = [];
function generateAllDomains() {
  casa.forEach(name1 => {
    grande.forEach(adjective => {
      libro.forEach(name2 => {
        rapidamente.forEach(adverb => {
          correr.forEach(verb => {
            extensiones.forEach(ext => {
              let domain = name1 + adjective + name2 + adverb + verb + ext;
              domainList.push(domain);
            });
          });
        });
      });
    });
  });
}

generateAllDomains();

let currentIndex = 0;

function generateAndShowDomain() {
  if (currentIndex < domainList.length) {
    const domain = domainList[currentIndex];
    const div = document.createElement("div");
    div.textContent = domain;
    document.getElementById("generator").appendChild(div);

    // Incrementar el índice para el siguiente dominio
    currentIndex++;

    // Programar la generación del siguiente dominio
    setTimeout(generateAndShowDomain, 5000);
  }
}

document.getElementById("toggleButton").addEventListener("click", function() {
  // Limpiar el área de generación si se hace clic durante la generación
  document.getElementById("generator").innerHTML = "";

  // Reiniciar el índice
  currentIndex = 0;

  // Iniciar la generación y visualización de dominios
  generateAndShowDomain();
});
