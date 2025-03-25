import cerrarModal from "./cerrarModal.js";

export default function botonCerrarModal() {
  const $cerrarModal = document.createElement("button");
  $cerrarModal.className = "cerrarModal";
  $cerrarModal.addEventListener("click", (e) => {
	document.querySelector(".anularFondo").style.display="none"
	cerrarModal(e)});
  $cerrarModal.innerText = "X";
  return $cerrarModal;
}
