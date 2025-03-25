import { totalDiario } from "./funcionesQueryGet.js";
import manejoResumenDiario from "./manejoResumenDiario.js";

export function guardarCajaInicial() {
  let guardarInicio = "";

  const cajaInicial = {
    Fecha: "",
    Efectivo: "",
    EnCuenta: "",
  };

  guardarInicio = setTimeout(() => {
    const inicio = document.querySelectorAll(".inicioCaja");

    cajaInicial.Fecha = new Date(inicio[0].value).getTime() || "";
    cajaInicial.Efectivo = inicio[1].value.trim() || "";
    cajaInicial.EnCuenta = inicio[2].value.trim() || "";

    localStorage.setItem("cajaInicial", JSON.stringify(cajaInicial));
   //  console.log("Inicial guardado", new Date(inicio[0].value).getTime());
  }, 500);
}

export function calculoNumerales() {
	event.stopPropagation()
	const tabla= document.querySelector(".numerales");
	const $celda = tabla.querySelectorAll("td")
	const $total=document.querySelector("#totalNum")
	let suma =0
	for (let i = 0; i < $celda.length-3; i=i+3) {
		$celda[i + 2].innerHTML = Number($celda[i].innerHTML.replace("$","")) * Number($celda[i + 1].innerHTML);
		suma += Number($celda[i + 2].innerHTML);
	}
	$total.innerHTML = suma
}

export async function cargarTotalesDiario() {
  if (
    document.querySelector("#agregarEgreso").innerHTML != "" ||
    document.querySelector("#agregarEgreso").innerHTML != undefined
  ) {
    const totales = await totalDiario();
    const resultado = totales.reduce((acumulador, objeto) => {
      for (const key in objeto) {
        acumulador[key] = (Number(acumulador[key]) || 0) + Number(objeto[key]);
      }
      acumulador.total = (acumulador.total || 0) + 1;
      return acumulador;
    }, {});
    setTimeout(() => {
      document.querySelector("#diarioMesas").value = resultado.total || 0;
      document.querySelector("#diarioCubiertos").value = Number(resultado.cubiertos) || 0;
      document.querySelector("#diarioEfvo").value = resultado.efectivo || 0;
      document.querySelector("#diarioTransf").value =
		resultado.transferencia || 0;
      document.querySelector("#diarioDeb").value = resultado.debito || 0;
      document.querySelector("#diarioCred").value = resultado.credito || 0;
      document.querySelector("#diarioTotal").value =
        resultado.monto + resultado.propinaTransf || 0;
      manejoResumenDiario();
	}, 5);
}else{
    setTimeout(() => {
      document.querySelector("#diarioMesas").value = 0;
      document.querySelector("#diarioEfvo").value = 0;
      document.querySelector("#diarioTransf").value = 0;
      document.querySelector("#diarioDeb").value = 0;
      document.querySelector("#diarioCred").value = 0;
      document.querySelector("#diarioTotal").value = 0;
      manejoResumenDiario();
    }, 5);
}
}

export async function revisarMesasCerradas() {
    const $tbody = document.createElement("tbody");
    let fecha =""
	 if(localStorage.getItem("cajaInicial")){
		fecha = localStorage.getItem("cajaInicial").Fecha;
	 }
	if(fecha != ""){
    const mesas = await totalDiario();

    mesas.forEach((mesa, n) => {
        const $actualizar = document.createElement("button");
        $actualizar.textContent = `Modif. orden ${mesa.orden}`;
        $actualizar.id = `b${mesa.orden}`;
        const td = document.createElement("td");
        $actualizar.className = "botonMesaCobrada";
        td.appendChild($actualizar);
		  const tdDel = document.createElement("td")
		  const $borrar = document.createElement("button")
		  $borrar.textContent = `Borrar orden ${mesa.orden}`
		  $borrar.id=`del${mesa.fechaCobro}`
		  $borrar.className = "borrarMesaCobrada";
		  tdDel.appendChild($borrar)
    	const $fecha = new Date(mesa.fechaCobro);
    	const minutos =
    	$fecha.getMinutes() < 10 ? `0${$fecha.getMinutes()}` : $fecha.getMinutes();

    	const $tr = document.createElement("tr");
    	$tr.innerHTML = `
			<td class="cobradaData">${$fecha.getHours()}:${minutos}</td>
			<td class="cobradaData">${mesa.mesa.replace("-", " ")}</td>
			<td contenteditable class="orden${mesa.orden} cobradaData">${mesa.efectivo}</td>
			<td contenteditable class="orden${mesa.orden} cobradaData">${
        mesa.transferencia
      }</td>
			<td contenteditable class="orden${mesa.orden} cobradaData">${mesa.debito}</td>
			<td contenteditable class="orden${mesa.orden} cobradaData">${mesa.credito}</td>
			<td contenteditable class="orden${mesa.orden} cobradaData prop">${
        mesa.propinaTransf
      }</td>
			<td style="font-weight:bold" class="total${mesa.orden} cobradaData">${
        mesa.monto
      }</td>
			<td class="cobradaData">${mesa.orden}</td>
			<td contenteditable class="orden${mesa.orden} cubiertos cobradaData">${
        mesa.cubiertos
      }</td>
			`;
    	$tr.insertAdjacentElement("beforeend", td);
    	$tr.insertAdjacentElement("beforeend", tdDel);
    	$tbody.appendChild($tr);
	});

  return $tbody;
	}else{
	return window.alert("Seleccione hora de apertura en libro diario")
	}
}
