import { llamarEgresos, llamarIngresos, resumenDiaxDia } from "./funcionesQueryGet.js";

export async function mostrarRegistro(){

	const datos = document.querySelectorAll("[id^=resp]");

	// armando los datos para la query
	const data = {
		fechaInicio: datos[0].value != "" ? new Date(datos[0].value).getTime() : null,
		fechaFin: datos[1].value != "" ? new Date(datos[1].value).getTime() : null,
		tipoEgreso: datos[2].value != "" != "" ?datos[2].value : null,
		formaPago: datos[3].value != "" ?datos[3].value : null,
		descripcion: datos[4].value != "" ?datos[4].value : null,
	};

	// armando las query
	let param = ""
	let paramResumen = ""
	if(data.fechaInicio && data.fechaFin && data.fechaInicio<data.fechaFin){
		param=`fechaInicio=${data.fechaInicio}&fechaFin=${data.fechaFin}`
		paramResumen = `fechaCobroInicio=${data.fechaInicio}&fechaCobroFin=${data.fechaFin}`;
		if(data.tipoEgreso)param +=`&tipoEgreso=${data.tipoEgreso}`
		if(data.formaPago)param +=`&formaPago=${data.formaPago}`
		if(data.descripcion)param +=`&descripcion=${data.descripcion}`		
	document.querySelector(".mostrarDatosResumen").style.opacity = "1";
	}else{
		return window.alert("Completar Fecha Inicio y fecha Cierre, fecha Cierre debe ser mayor a fecha Inicio")
	}
	
	const respEgresos = await llamarEgresos(param)
	const respIngresos = await llamarIngresos(paramResumen)

	const containerIngresos = document.querySelector("#mostrarIngresos")
	const containerEgresos = document.querySelector("#mostrarEgresos")
	let lineaIngresos=""
	let lineaEgresos=""
	const totales = {
	monto: 0,
	efectivo: 0,
	transferencia: 0,
	debito: 0,
	credito: 0,
	propinaTransf:0,
	cubiertos:0
 };
	if(respIngresos.length >0){
		respIngresos.forEach(el => {
			totales.monto +=Number(el.monto)
			totales.efectivo +=Number(el.efectivo)
			totales.transferencia +=Number(el.transferencia)
			totales.debito +=Number(el.debito)
			totales.credito +=Number(el.credito)
			totales.propinaTransf += Number(el.propinaTransf);
			totales.cubiertos += Number(el.cubiertos);
			let fecha = new Date(el.fechaCobro)
			  const dia = fecha.getDate().toString().padStart(2, "0");
        const mes = (fecha.getMonth() + 1).toString().padStart(2, "0"); 
        const horas = fecha.getHours().toString().padStart(2, "0");
        const minutos = fecha.getMinutes().toString().padStart(2, "0");

			if(datos[5].value==="detalles"){
			lineaIngresos += `
		<tr>
		<td class="center">${dia}-${mes}</td>
		<td class="center">${el.mesa}</td>
		<td>${el.monto}</td>
		<td>${el.efectivo}</td>
		<td>${el.transferencia}</td>
		<td>${el.debito}</td>
		<td>${el.credito}</td>
		<td>${el.propinaTransf}</td>
		<td>${el.cubiertos}</td>
		<td>${el.orden}</td>
		</tr>
		`;
			}
	});
		
		lineaIngresos += `
		<tr style="font-weight:bold">
		<td></td>
		<td class="center">TOTALES:</td>
		<td>${totales.monto}</td>
		<td>${totales.efectivo}</td>
		<td>${totales.transferencia}</td>
		<td>${totales.debito}</td>
		<td>${totales.credito}</td>
		<td>${totales.propinaTransf}</td>
		<td>${totales.cubiertos}</td>
		<td></td>
		</tr>
		`;

	containerIngresos.innerHTML = lineaIngresos
	}

	const egresos = {
	monto: 0,
	efectivo: 0,
	transferencia: 0,
	debito: 0,
	credito: 0,
	propinaTransf: 0,
 }
	if(respEgresos.length > 0){
	 respEgresos.forEach(el =>{
		
			egresos.efectivo += el.formaPago === "efectivo" ? el.monto : 0
			egresos.transferencia += el.formaPago === "transferencia" ? el.monto : 0;
			egresos.debito += el.formaPago === "debito" ? el.monto : 0;
			egresos.credito += el.formaPago === "credito" ? el.monto : 0;
			egresos.monto += el.monto;
    
      let fecha = new Date(el.fecha);
      const dia = fecha.getDate().toString().padStart(2, "0");
      const mes = (fecha.getMonth() + 1).toString().padStart(2, "0");
      const horas = fecha.getHours().toString().padStart(2, "0");
      const minutos = fecha.getMinutes().toString().padStart(2, "0");
		if (datos[6].value === "detalles") {
      lineaEgresos += `
			<tr>
			<td>${el.id}</td>
			<td class="center">${dia}-${mes}</td>
			<td class="center">${el.tipoEgreso}</td>
			<td class="center">${el.formaPago}</td>
			<td class="center">${el.descripcion}</td>
			<td>${el.monto}</td>
			</tr>
			`;
    }
	 })
	 lineaEgresos += `
	 <tr style="font-weight:bold">
	 <td></td>
	 <td></td>
	 <td></td>
	 <td></td>
	 <td>TOTALES:</td>
	 <td>${egresos.monto}</td>
	 </tr>
	 `;
	containerEgresos.innerHTML = lineaEgresos
	}

	const resumen = document.querySelector("#balance")
	resumen.innerHTML = `
	<tr style="font-weight:bold">
	<td class="center">Balance:</td>
	<td>${totales.efectivo - egresos.efectivo}</td>
	<td>${totales.transferencia - egresos.transferencia}</td>
	<td>${totales.debito - egresos.debito}</td>
	<td>${totales.credito - egresos.credito}</td>
	</tr>
	`;
	
}

export function modalDiaxDia() {

	const container = document.createElement("div")
	container.id = "resumenxDia"
	container.style.display = "none"
	const tabla = document.createElement("table")
	tabla.id = "mostrarResumenDiaxDia"
	tabla.innerHTML = `
	<thead>
	<tr>
	<th></th>
	<th></th>
	<th></th>
	<th colspan=5>INGRESOS</th>
	<th colspan=5>EGRESOS</th>
	</tr>
	<tr>
	<th>Fecha</th>
	<th>Mesas</th>
	<th>Cubiertos</th>
	<th>Efvo</th>
	<th>Transf</th>
	<th>Débito</th>
	<th>Crédito</th>
	<th>TOTAL</th>
	<th>Efvo</th>
	<th>Transf</th>
	<th>Débito</th>
	<th>Crédito</th>
	<th>TOTAL</th>
	</tr>
	</thead>
	<tbody id="verResumen"></tbody>
	`;
	container.appendChild(tabla)
	return container
}

export async function mostrarResumen() {

  const fecha=(dato) =>{
	let hoy =new Date (dato)
	let dia = hoy.getDate()
	let mes = hoy.getMonth()
	let mesNum = String(mes + 1).padStart(2, "0");
	let anio = hoy.getFullYear()
	return `${dia}-${mesNum}-${anio}`
}
		const datos = document.querySelectorAll("[id^=resp]");
    const data = {
      fechaInicio:
        datos[0].value != "" ? new Date(datos[0].value).getTime() : null,
      fechaFin:
        datos[1].value != "" ? new Date(datos[1].value).getTime() : null,
    };
	 const param = `fechaInicio=${data.fechaInicio}&fechaFin=${data.fechaFin}`
	 console.log(param)
    const resp = await resumenDiaxDia(param);
	 const container = document.querySelector("#verResumen")
	 container.innerHTML = ""
	 const total = {
		"ingresoTotal":0,
		"ingresoEfvo":0,
		"ingresoTransf":0,
		"ingresoDeb":0,
		"ingresoCred":0,
		"egresoTotal":0,
		"egresoEfvo":0,
		"egresoTransf":0,
		"egresoDeb":0,
		"egresoCred":0,
		"mesas":0,
		"cubiertos":0
	 }
	 resp.forEach(el =>{
		let hoy = fecha(el.fecha);
		total.ingresoTotal += Number(el.ingresoTotal);
		total.ingresoEfvo += Number(el.ingresoEfvo);
		total.ingresoTransf += Number(el.ingresoTransf);
		total.ingresoDeb += Number(el.ingresoDeb);
		total.ingresoCred += Number(el.ingresoCred);
		total.egresoTotal += Number(el.egresoTotal);
		total.egresoEfvo += Number(el.egresoEfvo);
		total.egresoTransf += Number(el.egresoTransf);
		total.egresoDeb += Number(el.egresoDeb);
		total.egresoCred += Number(el.egresoCred);
		total.mesas += Number(el.mesas)
		total.cubiertos += Number(el.cubiertos)
		const linea = document.createElement("tr")
		const datos = `
		<td>${hoy}</td>
		<td>${el.mesas}</td>
		<td>${el.cubiertos}</td>
		<td>${el.ingresoEfvo}</td>
		<td>${el.ingresoTransf}</td>
		<td>${el.ingresoDeb}</td>
		<td>${el.ingresoCred}</td>
		<td>${el.ingresoTotal}</td>
		<td>${el.egresoEfvo}</td>
		<td>${el.egresoTransf}</td>
		<td>${el.egresoDeb}</td>
		<td>${el.egresoCred}</td>
		<td>${el.egresoTotal}</td>
		`
		linea.innerHTML = datos
		container.appendChild(linea)
	 })
	 const totales = document.createElement("tr")
	 const balance = document.createElement("tr")
	 balance.style.fontWeight = "bold"
	 const lineaTotales = `
	 <td>Totales:</td>
		<td>${total.mesas}</td>
		<td>${total.cubiertos}</td>
		<td>${total.ingresoEfvo}</td>
		<td>${total.ingresoTransf}</td>
		<td>${total.ingresoDeb}</td>
		<td>${total.ingresoCred}</td>
		<td>${total.ingresoTotal}</td>
		<td>${total.egresoEfvo}</td>
		<td>${total.egresoTransf}</td>
		<td>${total.egresoDeb}</td>
		<td>${total.egresoCred}</td>
		<td>${total.egresoTotal}</td>
		`
		const lineaBalance = `
		<td></td>
		<td></td>
		<td>Balance: </td>
		 <td>${total.ingresoEfvo - total.egresoEfvo}</td>
		 <td>${total.ingresoTransf - total.egresoTransf}</td>
		 <td>${total.ingresoDeb - total.egresoDeb}</td>
		 <td>${total.ingresoCred - total.egresoCred}</td>
		<td>${total.ingresoTotal - total.egresoTotal}</td>
		`;
	totales.innerHTML = lineaTotales
	balance.innerHTML = lineaBalance
	container.appendChild(totales)
	container.appendChild(balance)
}
