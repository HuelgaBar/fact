import botonCerrarCaja from "./BotonCerrarCaja.js";
import botonCerrarModal from "./botonCerrarModal.js";
import { guardarCajaInicial} from "./funcionesLibroDiario.js";
import {mostrarIngresos} from "./ingresos.js";
import manejoResumenDiario from "./manejoResumenDiario.js";
import mostrarEgresos from "./mostrarEgresos.js";
import { mostrarNumerales } from "./mostrarNumerales.js";
import { verResumenDiario } from "./resumenDiario.js";

export default function modalLibroDiario() {
  const $ingresos = mostrarIngresos();
  const cerrarCaja = botonCerrarCaja()
  /* console.log($ingresos); */
  const $modal = document.createElement("div");
  $modal.className = "libroDiario";
  $modal.style.display = "none";

  const $cerrar = botonCerrarModal();
	// const $egresos = verEgresosDiario()
	const $mostrarEgresos = mostrarEgresos()
	const $resumen = verResumenDiario()
	const numerales = mostrarNumerales()
  //   INICIO CAJA

  const inicioCaja = document.createElement("div");
  inicioCaja.className = "cajaInicial";
  const contenedor = document.createElement("div");
  contenedor.className = "inicial";
  contenedor.addEventListener("change", (e) => {
    guardarCajaInicial();
	 manejoResumenDiario()
  });
  let inicial = {Fecha:"",Efectivo:0,EnCuenta:0}
  let fecha = ""
  if(localStorage.getItem("cajaInicial")){
inicial = JSON.parse(localStorage.getItem("cajaInicial"));
fecha = new Date(inicial.Fecha).toString().split(" ");
  };
  const $titInicial = document.createElement("h3");
  $titInicial.textContent = "Caja inicial";
  const meses = {
    Ene: "01",
    Feb: "02",
    Mar: "03",
    Abr: "04",
    May: "05",
    Jun: "06",
    Jul: "07",
    Ago: "08",
    Sep: "09",
    Oct: "10",
    Nov: "11",
    Dic: "12",
  };
  let hoy = [];
  hoy.push(fecha[3], meses[fecha[1]], fecha[2] + "T" + fecha[4]);
  fecha = hoy.join("-");

  contenedor.innerHTML = `
  	<label> Hora de apertura:</label><input class="inicioCaja" type="datetime-local" value=${
      fecha
    }>
	<label>Cantidad en Efvo: </label><input class="inicioCaja" type="number" value=${
    Number(inicial.Efectivo) || ""
  }>
	<label>Cantidad en cuenta: </label><input class="inicioCaja" type="number" value=${
    Number(inicial.EnCuenta) || ""
  }>
  `;

  inicioCaja.appendChild($titInicial);
  inicioCaja.appendChild(contenedor);
  const mesasAbiertas=document.createElement("span")
  mesasAbiertas.className="avisoMesas"
  mesasAbiertas.textContent = "Aún hay mesas abiertas"


  $modal.appendChild(inicioCaja);
  $modal.appendChild($cerrar);
  $modal.appendChild($ingresos);
  $modal.appendChild($resumen);
  $modal.appendChild($mostrarEgresos);
  $modal.appendChild(cerrarCaja);
  $modal.appendChild(mesasAbiertas);
  $modal.appendChild(numerales);
  return $modal;
}
