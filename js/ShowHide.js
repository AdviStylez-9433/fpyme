function ShowHide() {
    const boton = document.querySelector("#btnShow");
    const miDiv = document.querySelector("#cont-galeria");
  
    boton.addEventListener("click", function() {
      if (miDiv.style.height === "267px") {
        miDiv.style.height = "100%";
      } else {
        miDiv.style.height = "267px";
      }
    });
  }
  
  ShowHide();