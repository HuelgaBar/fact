import { generarTicket } from "./generarTicket.js";
import { validarCobro } from "./validarCobro.js";

export function botonTicket() {
  let fecha = "";
  const $botonTicket = document.createElement("button");
  $botonTicket.className = "botonTicket";
  $botonTicket.innerHTML = "Hacer<br>Ticket";
  $botonTicket.addEventListener("click", (e) => {
    const data = JSON.parse(localStorage.getItem("cajaInicial"));
    if (data) {
      fecha = data.Fecha;
    }
    if (fecha === "") {
      return window.alert("Abrir caja, seleccione hora de apertura");
    }
    if (document.querySelector("#mesaMostrada").innerHTML != "Mesa") {
      if (!document.querySelector(".art")) {
        return window.alert("No hay articulos que cobrar");
      }
      document.querySelector(".mesasAbiertas").style.display = "none";
      validarCobro();
      generarTicket();
      document.querySelector(".anularFondo").style.display = "flex";
      document.querySelector(".ticket").style.display = "flex";
    } else {
      return window.alert("No hay mesa seleccionada");
    }
  });
  return $botonTicket;
}
