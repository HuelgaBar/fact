
export default function mostrarEgresos() {
	const mostrarEgresos = document.createElement("div")
	mostrarEgresos.className = "mostrarEgresos"
	mostrarEgresos.innerHTML = "<h3>Egresos</h3>"
	const tabla = document.createElement("table");
	tabla.className = "egresos"
	tabla.innerHTML = `
	<thead>
		<tr>
			<th>Fecha</th>
			<th>Tipo</th>
			<th>M. Pago</th>
			<th>Descripcion</th>
			<th>Monto</th>
			<th></th>
		</tr>
	</thead>
	<tbody class="egresosDinam">
		<tr class="egresoEdit">
			<td contenteditable></td>
    <td>
      <select class="valor">
        <option value="Proveedores">Proveedores</option>
        <option value="Sueldos">Sueldos</option>
        <option value="Gastos">Gastos</option>
      </select>
    </td>
	 <td>
      <select class="valor">
        <option value="efectivo">Efvo</option>
        <option value="transferencia">Transf</option>
        <option value="debito">Débito</option>
        <option value="credito">Crédito</option>
      </select>
    </td>
			<td class="valor" contenteditable></td>
			<td class="valor" id="agregarEgreso" contenteditable></td>
		</tr>
		<tr class="egresosResult">
			<td></td>
			<td></td>
			<td></td>
			<td>TOTAL</td>
		</tr>
		</tbody>
	`;
mostrarEgresos.appendChild(tabla)
return mostrarEgresos

}