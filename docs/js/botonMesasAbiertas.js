import actualizarModalMesas from "./actualizarMesasAbiertas.js";

export default function botonMesasAbiertas() {
  const botonMesasAbiertas = document.createElement("button");
  botonMesasAbiertas.className = "verMesas";
  botonMesasAbiertas.innerText = "Ver mesas Abiertas";
  botonMesasAbiertas.addEventListener("click", (e) => {
  actualizarModalMesas()
  document.querySelector(".mesasAbiertas").style.display="flex";
  });
  return botonMesasAbiertas;
} 
