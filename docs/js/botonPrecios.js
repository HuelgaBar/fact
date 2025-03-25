import { mostrarPrecios } from "./manejarPrecios.js";

export default async function botonPrecios() {
	
	const boton = document.createElement("button")
	boton.textContent = "Actualizar Precios"
	boton.addEventListener("click", async (e) => {
		await mostrarPrecios()
		document.querySelector(".anularFondo").style.display = "flex";
    document.querySelector(".dbPrecios").style.display = "flex";
  });
	return boton
}