import { llamarEgresos, llamarIngresos } from "./funcionesQueryGet.js";

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
