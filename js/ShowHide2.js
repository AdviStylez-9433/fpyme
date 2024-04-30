function ShowHide() {
    const boton = document.querySelector("#btnShow2");
    const miDiv = document.querySelector("#cont-sucur");
  
    boton.addEventListener("click", function() {
      if (miDiv.style.height === "42vw") {
        miDiv.style.height = "123vw";
      } else {
        miDiv.style.height = "42vw";
      }
    });
  }
  
  ShowHide();