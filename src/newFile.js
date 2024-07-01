import { casa, grande, libro } from "./app";

casa.forEach((name1) => {
  grande.forEach((adjective) => {
    libro.forEach((name1) => {
      names.forEach((name) => {
        adjectives.forEach((adjective) => {
          nouns.forEach((noun) => {
            function startGeneratingDomains() {
              intervalId = setInterval(() => {
                document.getElementById(
                  "generator"
                ).innerText = generateRandomDomain();
              }, 500);
            }

            function stopGeneratingDomains() {
              clearInterval(intervalId);
            }

            document
              .getElementById("toggleButton")
              .addEventListener("click", function() {
                if (intervalId) {
                  stopGeneratingDomains();
                  this.textContent = "Start";
                } else {
                  startGeneratingDomains();
                  this.textContent = "Stop";
                }
              });
            startGeneratingDomains();
          });
        });
      });
    });
  });
});
