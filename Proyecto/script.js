document.addEventListener("DOMContentLoaded", function() {
    // Obtener la referencia al contenedor de gatos
    var catsContainer = document.getElementById("cats-container");
  
    // Realizar una solicitud a la API de TheCatAPI para obtener imágenes aleatorias de gatos
    fetch("https://api.thecatapi.com/v1/images/search?limit=10")
      .then(response => response.json())
      .then(data => {
        // Procesar los datos y construir las tarjetas de gatos
        data.forEach(cat => {
          var catCard = document.createElement("div");
          catCard.classList.add("cat-card");
  
          var catImage = document.createElement("img");
          catImage.src = cat.url;
          catImage.alt = "Gato";
  
          catCard.appendChild(catImage);
  
          catsContainer.appendChild(catCard);
        });
      })
      .catch(error => {
        console.error("Error al obtener los datos de la API:", error);
      });
  });
  