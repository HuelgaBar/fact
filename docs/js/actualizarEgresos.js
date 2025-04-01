
export function actualizarEgresos(){
	const gastosDiario = JSON.parse(localStorage.getItem("egresosDiario"));
	if (gastosDiario) {
		const $tbody = document.querySelector(".egresosDinam");
		let container = ""
		let total = 0
		gastosDiario.forEach(el => {
			total += Number(el.monto)
			container += `
			<tr class="itemEgreso">
			<td>${el.fecha}</td>
	<td>${el.tipoEgreso}</td>
	<td>${el.formaPago}</td>
	<td>${el.descripcion}</td>
	<td>${el.monto}</td>
	<td class="remove" style="font-size:11px;color:red">x</td>
			</tr>
			`;
		});
		$tbody.innerHTML = container
		const agregarEgreso = `<tr class="egresoEdit">
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
			<td id="totalEgreso" style="font-weight: bold">${total}</td>
		</tr>`;
		$tbody.innerHTML += agregarEgreso
	}
}