import datosMesaModif from "./cargarDatosModif.js";
import { mostrarPrecios } from "./manejarPrecios.js";

const url = 'http://localhost:3000'
export async function actualizarMesaCobrada(orden) {
	try {
    const datos = datosMesaModif(orden);
    if (!datos) {
      return console.log("No se cargaron datos para actualizar mesa");
    }
    const response = await fetch(`${url}/resumenVentas/${orden}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datos),
    });
    if (!response.ok) {
      throw new Error(`Error al actualizar datos: ${response.status}`);
    }

    const resultado = await response.json();
   window.alert(`Datos de orden ${orden} actualizados correctamente`)
  } catch (error) {window.alert("No se actualizaron valores de la mesa",error)}
}

export async function putPrecios(precios) {
    try {
      const respuesta = await fetch(`${url}/datos`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(precios),
      });

      if (!respuesta.ok) {
        throw new Error(`Error HTTP: ${respuesta.status}`);
      }

      const resultado = await respuesta.json();
		window.alert("Precios actualizados correctamente")
		mostrarPrecios()
      return resultado;
    } catch (error) {
		window.alert(error, "Ejecute nuevamente facturacion.bat");
      console.error("Error al reemplazar datos:", error);
      throw error;
    }

}