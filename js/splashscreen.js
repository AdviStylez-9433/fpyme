document.addEventListener("DOMContentLoaded", function() {
    var loader = document.getElementById("loader");
    var progress = 0; // Porcentaje de carga inicial
  
    // Función para simular el progreso de carga
    function simulateLoading() {
      var interval = setInterval(function() {
        progress += 1; // Incrementa el progreso
        loader.style.width = progress + "%"; // Actualiza la anchura de la barra de carga
  
        // Si el progreso alcanza el 100%, detiene la simulación
        if (progress >= 100) {
          clearInterval(interval);
          // Aquí puedes redirigir a tu página principal o realizar cualquier otra acción
          window.location.href = "login.html";
          // O simplemente ocultar la splash screen
          loader.parentElement.parentElement.style.display = "none";
        }
      }, 50);
    }
  
    // Llama a la función para simular el progreso de carga
    simulateLoading();
  });
  