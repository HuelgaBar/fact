
import { revisarMesasCerradas } from "./funcionesLibroDiario.js";

const url = "http://localhost:3000";
export async function borrarMesaCobrada(id, text, num) {
	try {
		const datos = {
   	fechaCobro: Number(id),
    	texto: text,
    	val: Number(num),
  };
   const delHistorial = await fetch(`${url}/historial`, {
     method: "DELETE",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(datos),
   });
	if(delHistorial.ok){
		const dataHistorial = await delHistorial.json()
		const delResumen = await fetch(`${url}/resumenVentas`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datos)
	});
	if(delResumen.ok){
		const dataResumen = await delResumen.json();
		window.alert(dataResumen.message)
		const $verMesas = await revisarMesasCerradas()
				document.querySelector("#dinamicoMesasCerradas").innerHTML = $verMesas.innerHTML;
	}else{
		const error = await delResumen.json()
		window.alert(error.message)
	}
	}
	} catch (error) {
		window.alert("Error en local server, recargue la ventana del navegador")
	}
 
  
}
