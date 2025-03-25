import { actualizarEgresos } from "./actualizarEgresos.js";
import cobrarMesa from "./cobrarMesa.js";
import { limpiarLibroDiario } from "./limpiarLibroDiario.js";
import limpiarMesa from "./vaciarMesaCobrada.js";

const url= 'http://localhost:3000'
export async function guardarHistorial() {
	try {
  const datos = cobrarMesa()
   const respuesta1 = await fetch(`${url}/historial/bulk`, {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(datos.datosHistorial),
   });

   if (!respuesta1.ok) {
     throw new Error(`Error en /historial/bulk: ${respuesta1.status}`);
   }

   const data1 = await respuesta1.json();
   // console.log("Respuesta 1:", data1);

   // Respuesta 2: fetch a resumenVentas (depende de respuesta1)
   const respuesta2 = await fetch(`${url}/resumenVentas`, {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(datos.datosResumen), // datos para resumenVentas
   });

   if (!respuesta2.ok) {
     throw new Error(`Error en /resumenVentas: ${respuesta2.status}`);
   }

   const data2 = await respuesta2.json();
   
   // console.log("Respuesta 2:", data2);
   
   limpiarMesa()
   document.querySelectorAll(".parcial").forEach(inp =>{
    inp.value=""
   })
   document.querySelector("#propina").value=""
   return [data1, data2]; // Puedes retornar ambas respuestas si lo necesitas
 } catch (error) {
	window.alert("Error general:", error);
   console.error("Error general:", error);
   document.querySelector("#cobrar").disabled=true
   // Manejo de errores, por ejemplo:
   // throw error; // Re-lanza el error para que lo capture quien llame a enviarADb()
 }
}

export async function cerrarCaja() {
	try {
		const datos = JSON.parse(localStorage.getItem("egresosDiario"));
		if(datos.length >0){
		const respuesta = await fetch(`${url}/egresos/bulk`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datos), // datos para resumenVentas
    });
	//  console.log(datos)

    if (!respuesta.ok) {
      throw new Error(`Error en egresos: ${respuesta.status}`);
    }
	}	
	 limpiarLibroDiario()
	 actualizarEgresos()
	} catch (error) {
		window.alert("Error general:", error);
      console.error("Error general:", error);
	}

}