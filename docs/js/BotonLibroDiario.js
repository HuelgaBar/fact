import { actualizarEgresos } from "./actualizarEgresos.js"
import actualizarModalMesas from "./actualizarMesasAbiertas.js"
import { cargarTotalesDiario } from "./funcionesLibroDiario.js"
import manejoResumenDiario from "./manejoResumenDiario.js"

export default function botonLibroDiario() {
  try {
    const botonLibroDiario = document.createElement("button")
	 botonLibroDiario.className = "verLibroDiario"
	 botonLibroDiario.innerText = "Libro diario"
	 botonLibroDiario.addEventListener("click", e =>{
		actualizarModalMesas()
		setTimeout(() => {
			if(document.querySelectorAll(".abierta").length>0){
			document.querySelector("#cerrarCaja").disabled=true
		}else{
			document.querySelector("#cerrarCaja").disabled=false
		}
		manejoResumenDiario()
		}, 500);
		
		actualizarEgresos()
		cargarTotalesDiario()
		document.querySelector(".anularFondo").style.display = "flex"
		document.querySelector(".libroDiario").style.display = "flex"
	 }
	 )
	 return botonLibroDiario

  } catch (error) {
    
  }
}
