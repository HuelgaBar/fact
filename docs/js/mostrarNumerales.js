import { calculoNumerales } from "./funcionesLibroDiario.js";

export function mostrarNumerales() {
	const container = document.createElement("div")
	container.className = "containerNumerales"
	container.innerHTML="<h3>Cálculo Efectivo</h3>"
	const tabla = document.createElement("table")
	tabla.className="tablaNumerales"
	tabla.innerHTML = `
	<thead>
	<tr>
	<th>Valor</th>
	<th>Cant</th>
	<th>Monto</th>
	</tr>
	</thead>
	<tbody class="numerales">
	<tr>
		<td class="center">$10</td>
		<td contenteditable></td>
		<td></td>
	</tr>
	<tr>
		<td class="center">$20</td>
		<td contenteditable></td>
		<td></td>
	</tr>
	<tr>
		<td class="center">$50</td>
		<td contenteditable></td>
		<td></td>
	</tr>
	<tr>
		<td class="center">$100</td>
		<td contenteditable></td>
		<td></td>
	</tr>
	<tr>
		<td class="center">$200</td>
		<td contenteditable></td>
		<td></td>
	</tr>
	<tr>
		<td class="center">$500</td>
		<td contenteditable></td>
		<td></td>
	</tr>
	<tr>
		<td class="center">$1000</td>
		<td contenteditable></td>
		<td></td>
	</tr>
	<tr>
		<td class="center">$2000</td>
		<td contenteditable></td>
		<td></td>
	</tr>
	<tr>
		<td class="center">$10000</td>
		<td contenteditable></td>
		<td></td>
	</tr>
	<tr>
		<td class="center">$100000</td>
		<td contenteditable></td>
		<td></td>
	</tr>
	<tr style="font-weight:bold">
	<td></td>
	<td>TOTAL:</td>
	<td id="totalNum">0</td>
	</tr>
	`;
	tabla.addEventListener("keyup", e=>{calculoNumerales()})
	container.appendChild(tabla)
	return container
}