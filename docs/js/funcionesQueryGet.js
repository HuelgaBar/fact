const url = "http://localhost:3000";
export async function totalDiario(fecha) {
  try {
    const data = JSON.parse(localStorage.getItem("cajaInicial"));
    const fecha = data.Fecha;
  if (fecha && fecha != "") {
	  const response = await fetch(
		  `${url}/resumenVentas?fechaCobroMayor=${fecha}`
		);
		const totales = await response.json();
		return totales.data;
	}else{
		return []
	}
	} catch (error) {
		console.log("Error en base de datos, recargue el buscador", error);
	}
}

export async function llamarIngresos(datos) {
  try {
    const response = await fetch(`${url}/resumenVentas?${datos}`);
    const totales = await response.json();
    return totales.data;
  } catch (error) {
    console.log("Error en base de datos, recargue el buscador", error);
  }
}

export async function llamarEgresos(datos) {
  try {
    const response = await fetch(`${url}/egresos?${datos}`);
    const totales = await response.json();
    return totales.data;
  } catch (error) {
    console.log("Error en base de datos, recargue el buscador", error);
  }
}

export async function resumenDiaxDia(datos) {
	  try {
    const response = await fetch(`${url}/resumenDiario?${datos}`);
    const resumen = await response.json();
    return resumen.data;
  } catch (error) {
    console.log("Error en base de datos, recargue el buscador", error);
  }
}