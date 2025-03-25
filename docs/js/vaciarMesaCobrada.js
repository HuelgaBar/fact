import mostrarMesa from "./mostrarMesa.js";

export default function limpiarMesa() {
  let mesaAbierta = document
    .querySelector("#mesaMostrada")
    .innerHTML.replace(" ", "-");
  localStorage.setItem(`${mesaAbierta}`,"[]");
  mostrarMesa(mesaAbierta)
  document.querySelector(".ticket").style.display="none"
  document.querySelector(".anularFondo").style.display="none"
  document.querySelector("#cubiertos").value=""
  }