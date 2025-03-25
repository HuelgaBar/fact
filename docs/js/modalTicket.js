import botonCerrarModal from "./botonCerrarModal.js";
import { guardarHistorial } from "./funcionesQueryPost.js";
import { validarCobro } from "./validarCobro.js";
import {imprimirMostrarDatos} from "./imprimirTicket.js"
import {dbTicket} from "./leerDb.js"

export async function modalTicket() {
   
    const infoTicket = await dbTicket()
    const $encabezado = `
  <h3 class="ticketNombre">${infoTicket.nombre}</h3>
<p class="ticketDescr">${infoTicket.descr}</p>
<p class="ticketDescr" id="orden"></p>
`;
    const $container = document.createElement("div");
    $container.className = "mostrarDatos";
	 const $contenedorBotones = document.createElement("div")
	 $contenedorBotones.id="botonesTicket"
    const $botonCobrarMesa = document.createElement("button");
    $botonCobrarMesa.innerText = "Cobrar Mesa";
    $botonCobrarMesa.id = "cobrar";
    $botonCobrarMesa.disabled = true;
	 const $botonImprimir = document.createElement("button");
	$botonImprimir.id = "imprimir"
	 $botonImprimir.textContent = "Imprimir ticket"
	 $botonImprimir.addEventListener("click", e=>imprimirMostrarDatos())

    $botonCobrarMesa.addEventListener("click", (e) =>{ 
	$botonCobrarMesa.disabled = true
	guardarHistorial()});
	$contenedorBotones.appendChild($botonCobrarMesa)
	$contenedorBotones.appendChild($botonImprimir)
    const $ticketFinal = document.createElement("div");
    $ticketFinal.className = "ticket";
    $ticketFinal.style.display = "none";
    $ticketFinal.addEventListener("keyup", (e) => validarCobro());
    const $ul = document.createElement("ul");
    $ul.classList.add("imprimir");
    $container.innerHTML = $encabezado;

    const template = `
    <ul id="formasPago">
    <li><span>Efectivo</span><input class="parcial" placeholder=0 type="number" id="efvo"></li>
    <li><span>Transferencia</span><input class="parcial" placeholder =0 type="number" id="transf"></li>
    <li><span>Débito</span><input class="parcial" placeholder=0 type="number" id="debito"></li>
    <li><span>Crédito</span><input class="parcial" placeholder =0 type="number" id="credito"></li>
    <li><span>Propina x transf</span><input type="number" id="propina"></li>
    <li><span id="totalPago">Monto Total:</span><textarea id="pago" readonly>0</textarea></li>
    </ul>
    `;
    const $formasPago = document.createElement("div");
    $formasPago.className = "formasPago";
    $formasPago.innerHTML = template;
    $formasPago.appendChild($contenedorBotones);
    const botonCerrar = botonCerrarModal();
    $container.appendChild($ul);
    $ticketFinal.appendChild($container);
    $ticketFinal.appendChild(botonCerrar);
    $ticketFinal.appendChild($formasPago);

    return $ticketFinal;
}
