import botonCerrarModal from "./botonCerrarModal.js";
import leerMesaAbierta from "./leerMesaAbierta.js";
import { validarCobro } from "./validarCobro.js";
import { dbTicket } from "./leerDb.js";

export function mostrarTicket() {
  info = dbTicket()
  const $encabezado = `
<h3 class="ticketNombre">${info.nombre}</h3>
<p class="ticketDescr">${info.descr}</p>
<br>
`;
  const $container = document.createElement("div");
  $container.className = "mostrarDatos";
  const $botonCobrarMesa = document.createElement("button");
  // $ticketFinal.addEventListener("keydown", (e) => quitarElemento(e));
  $botonCobrarMesa.innerText = "Cobrar Mesa";
  $botonCobrarMesa.id = "cobrar";
  $botonCobrarMesa.disabled = true;
  const $ticketFinal = document.createElement("div");
  $ticketFinal.className = "ticket";
  $container.innerHTML = $encabezado;
  const datos = leerMesaAbierta();

  const $li = document.createElement("ul");
  $li.classList.add("imprimir");

  let dato = `<li class='negrita'>
    <textarea class='col11' readonly=true>Detalle</textarea> 
    <textarea class='centr col21' readonly=true>Precio</textarea>
    </li>`;

  datos.forEach((el, n) => {
    dato += `
      <li class="leerTicket final">
      <textarea readonly class="col-1">${el[0]}</textarea>
      <textarea readonly class="col-2">$ ${el[1]}</textarea></li>
      `;
  });
  dato += `
    <li class="leerTicket final" id="aCobrar">
    <textarea readonly class="col1">TOTAL</textarea>
    <textarea readonly class="col2">$ ${
      document.querySelector(" #total").value
    }</textarea></li>
    `;
  $li.innerHTML = dato;
  $container.appendChild($li);

  const template = `
    <ul id="formasPago">
    <li><span>Efectivo</span><input class="parcial" placeholder=${
      document.querySelector(" #total").value
    } type="number" id="efvo"></li>
    <li><span>Transferencia</span><input class="parcial" placeholder =${
      document.querySelector(" #total").value
    } type="number" id="transf"></li>
    <li><span>Débito</span><input class="parcial" placeholder=${
      document.querySelector(" #total").value
    } type="number" id="debito"></li>
    <li><span>Crédito</span><input class="parcial" placeholder =${
      document.querySelector(" #total").value
    } type="number" id="credito"></li>
    <li><span>Propina x transf</span><input type="number" id="propina"></li>
    <li><span id="totalPago">Monto Total:</span><textarea id="pago" readonly>${
      document.querySelector(" #total").value
    }</textarea></li>
    </ul>
    `;
  const $formasPago = document.createElement("div");
  $formasPago.className = "formasPago";
  $formasPago.innerHTML = template;
  $formasPago.appendChild($botonCobrarMesa);
  const botonCerrar = botonCerrarModal()
  $ticketFinal.appendChild($container);
  $ticketFinal.appendChild(botonCerrar);
  $ticketFinal.appendChild($formasPago);
  
$ticketFinal.addEventListener("keyup", e => validarCobro())

return $ticketFinal
}
