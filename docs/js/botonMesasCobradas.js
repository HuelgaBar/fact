import { totalDiario } from "./funcionesQueryGet.js"
import {revisarMesasCerradas} from "./funcionesLibroDiario.js" 

export default async function botonMesasCobradas() {
	
	const boton = document.createElement("button")
	boton.textContent = "Ver mesas cobradas"
	boton.addEventListener("click", async() => {
		const inicial = JSON.parse(localStorage.getItem("cajaInicial"));
		const fecha = inicial.Fecha
		if(!fecha || fecha ===""){
			return window.alert("Abrir libro diario, definir hora de apertura")
		 }
		const $verMesas = await revisarMesasCerradas()
		document.querySelector("#dinamicoMesasCerradas").innerHTML = $verMesas.innerHTML;
		document.querySelector(".anularFondo").style.display = "flex";
		document.querySelector(".mesasCobradas").style.display="flex"})
	return boton
}
