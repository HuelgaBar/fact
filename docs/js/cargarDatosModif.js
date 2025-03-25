
export default function datosMesaModif(orden) {
	const datos = document.querySelectorAll(`.orden${orden}`)
	const datosModif = {
    efectivo: datos[0].innerHTML,
    transferencia: datos[1].innerHTML,
    debito: datos[2].innerHTML,
    credito: datos[3].innerHTML,
    propinaTransf: datos[4].innerHTML,
	 cubiertos: datos[5].innerHTML,
    orden: orden
  };
	return datosModif
}