import actualizarMesaAbierta from "./actualizarMesa.js"

export function copiar(){
	const elCopiado = document.activeElement.parentNode.outerHTML
	const cant = window.prompt("Repetir cuantas veces?")
	if (isNaN(Number(cant))) return window.alert("No se ingresó una cantidad")
	for (let index = 0; index < Number(cant); index++) {
		document.querySelector("#datosDinamicos").innerHTML += elCopiado
	}
	actualizarMesaAbierta()
}