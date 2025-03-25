
export function guardarEgresos(){
	const egresos = []
	const rows = document.querySelectorAll(".itemEgreso");
	rows.forEach(row => {
		const celdas = row.querySelectorAll("td")

      const item = {
        fecha: celdas[0].innerText,
        tipoEgreso: celdas[1].innerText,
        formaPago: celdas[2].innerText,
        descripcion: celdas[3].innerText,
        monto: celdas[4].innerText.trim(),
      };
      egresos.push(item);
    
	});
	localStorage.setItem("egresosDiario",JSON.stringify( egresos))
}