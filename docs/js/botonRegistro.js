
export default function botonRegistro() {
	
	const boton = document.createElement("button")
	boton.textContent = "Explorar registros"
	boton.addEventListener("click", (e) => {
		document.querySelector(".anularFondo").style.display = "flex";
    document.querySelector(".registros").style.display = "flex";
  });
	return boton
}