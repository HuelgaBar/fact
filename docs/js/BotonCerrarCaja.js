import { cerrarCaja } from "./funcionesQueryPost.js"

export default function botonCerrarCaja() {
	const botonCerrar = document.createElement("button")
	botonCerrar.id = "cerrarCaja"
	botonCerrar.textContent = "Cerrar caja"
	let confirmar
	botonCerrar.addEventListener("click", e =>{
		confirmar = window.confirm("Cerrar Caja y reiniciar valores?")
		if(confirmar){cerrarCaja() }}
	)
return botonCerrar
}