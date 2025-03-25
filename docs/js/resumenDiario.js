
export function verResumenDiario() {
	const container = document.createElement("div")
	container.className = "resumenDiario"
	const titulo = document.createElement("h3")
	titulo.textContent = "Resumen Diario"
	const $tabla = document.createElement("table")
	$tabla.className = "tablaResumen"
	$tabla.innerHTML = `
	<thead>
	<th></th>
	<th>Inicial</th>
	<th>Ingresos</th>
	<th>Egresos</th>
	<th>Totales</th>
	</thead>
	<tr>
		<td>Efectivo:</td>
		<td id="initEf"></td>
		<td id="ingEf"></td>
		<td id="egrEf"></td>
		<td id="totEf"></td>
		</tr>
		<tr>
		<td id="">En cuenta:</td>
		<td id="intCta"></td>
		<td id=""></td>
		<td id=""></td>
		<td id="totCta"></td>
		</tr>
		<tr>
		<td id="">Transferencia:</td>
		<td id=""></td>
		<td id="ingTransf"></td>
		<td id="egrTransf"></td>
		<td id="totTransf"></td>
		</tr>
		<tr>
		<td id="">Débito:</td>
		<td id=""></td>
		<td id="ingDeb"></td>
		<td id="egrDeb"></td>
		<td id="totDeb"></td>
		</tr>
		<tr>
		<td id="">Crédito:</td>
		<td></td>
		<td id="ingCred"></td>
		<td id="egrCred"></td>
		<td id="totCred"></td>
		</tr>
	`
	container.appendChild(titulo)
	container.appendChild($tabla)
	return container
}
