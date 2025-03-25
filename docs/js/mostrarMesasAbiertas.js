import botonCerrarModal from "./botonCerrarModal.js";

export default async function mostrarMesasAbiertas(){
 
  const cerrarModal = botonCerrarModal()

  const mesasAbiertas = document.createElement("div");
  mesasAbiertas.classList.add("mesas","mesasAbiertas");
  mesasAbiertas.style.display="none"
  const container = document.createElement("div")
  container.id="container"
  mesasAbiertas.appendChild(container);
  mesasAbiertas.appendChild(cerrarModal);
  
    return mesasAbiertas;
}
