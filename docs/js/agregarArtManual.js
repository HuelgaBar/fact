import actualizarMesaAbierta from "./actualizarMesa.js";
import mostrarMesa from "./mostrarMesa.js";

export default function agregarArtManual() {
  const art = document.querySelector("#artManual").value;
  const precio = document.querySelector("#precioManual").value;
  let linea = "";
  const horaActual = new Date();
  const hora = horaActual.getHours();
  const minutos =
    horaActual.getMinutes() < 10
      ? `0${horaActual.getMinutes()}`
      : horaActual.getMinutes();
  const ahora = `${hora}:${minutos}`;
  if (art.trim() != "" && precio.trim() != "" && !isNaN(Number(precio))) {
    let $li = document.createElement("li")
    $li.className = "leerTicket"
    $li.innerHTML = `
      <textarea class="art col1">${art.trim()}</textarea>
      <textarea class="monto col2">${Number(precio.trim())}</textarea>
      <span class="delete">x</span><div class="ahora">${ahora}</div>
      `;
      document.querySelector("#datosDinamicos").appendChild($li)
      actualizarMesaAbierta()
      let mesa = document.querySelector("#mesaMostrada").innerHTML.replace(" ", "-")
      mostrarMesa(mesa)
    }
    document.querySelector("#artManual").value=""
    document.querySelector("#precioManual").value=""
}
