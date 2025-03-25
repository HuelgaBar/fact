import { cargarTotalesDiario } from "./funcionesLibroDiario.js";
import manejoResumenDiario from "./manejoResumenDiario.js";

export function mostrarIngresos(){
    const $ingresos = document.createElement("div")
    $ingresos.className = "containerIngresos"
	 const $titulo = document.createElement("h3")
	 $titulo.textContent = "Totales del día"
    const $ul = document.createElement("ul");
    $ul.id="detalleIngresos"
    $ul.innerHTML = `
    <li><label>Total mesas:</label><textarea readonly class="itemIngreso" id="diarioMesas"></textarea></li>
    <li><label>Total cubiertos:</label><textarea readonly class="itemIngreso" id="diarioCubiertos"></textarea></li>
    <li><label>Efectivo:</label><textarea readonly class="itemIngreso" id="diarioEfvo"></textarea></li>
	 <li><label>Transf:</label><textarea readonly class="itemIngreso" id="diarioTransf"></textarea></li>
	 <li><label>Débito:</label><textarea readonly class="itemIngreso" id="diarioDeb"></textarea></li>
	 <li><label>Crédito:</label><textarea readonly class="itemIngreso" id="diarioCred"></textarea></li>
	 <li><label><strong>Total:</strong></label><textarea class="itemIngreso" readonly id="diarioTotal"></textarea></li>
        `;
   const botonMontos = document.createElement("button")
	botonMontos.textContent =  "Ver datos"
	botonMontos.addEventListener("click", e=>{
		const data = JSON.parse(localStorage.getItem("cajaInicial"))
		const fecha = data ? data.Fecha : ""
		console.log(fecha)
		if(fecha != ""){
		cargarTotalesDiario()
		manejoResumenDiario()}
		else{
			return window.alert("Defina hora de apertura")
		}
	})
	$ingresos.appendChild($titulo)
	$ingresos.appendChild($ul)
	$ingresos.appendChild(botonMontos);
	return $ingresos
}
