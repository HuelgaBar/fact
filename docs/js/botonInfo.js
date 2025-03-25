
export function botonInfo(){
	const boton = document.createElement("button")
	boton.textContent = "Informacion"
	boton.addEventListener("click", e=>{
		document.querySelector(".anularFondo").style.display = "flex";
		document.querySelector("#informacion").style.display = "flex"
	})
	return boton
}