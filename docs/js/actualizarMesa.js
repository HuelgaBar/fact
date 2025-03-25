import leerMesaAbierta from "./leerMesaAbierta.js";

export default function actualizarMesaAbierta(){
  const datos = leerMesaAbierta()
const mesa = document
  .querySelector("#mesaMostrada")
  .innerText.replace(" ", "-");
  localStorage.setItem(`${mesa}`, JSON.stringify(datos));
}