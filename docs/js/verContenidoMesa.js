import { botonMudarMesa } from "./botonMudarMesa.js";

export default function detalle(){
	const mudarMesa = botonMudarMesa()
const $mostrarDatos = document.createElement("div")
$mostrarDatos.id="mostrarDatos"
$mostrarDatos.innerHTML = `
<h4 id="mesaMostrada">Mesa</h4>
<div>
<ul id="detalles" class="titulos">
<li>Cant cubiertos<textarea name="cubiertos" id="cubiertos" class="monto" placeholder="Ingrese cubiertos"></textarea></li>
  <li class="negrita">
    <textarea class="col11" readonly>Detalle</textarea> 
    <textarea class="centr col21" readonly>Precio</textarea>
  </li>
</ul>
</div>
<div>
<ul id="datosDinamicos" class="titulos">
</ul>
</div>
<div>
<ul id="datosManuales">
<li class="leerTicket"><textarea id="artManual" class="col1" placeholder="Ingreso a mano" ></textarea> <textarea id="precioManual" class="col2" placeholder="$..." ></textarea><div class="ahora"></div></li>

</div>
<div id="resultados">
<li class="negrita total"><textarea class="col11" readonly id="resultFinal">TOTAL</textarea> <textarea id="total" readonly class="col21">0</textarea></li>
</div>`;

$mostrarDatos.appendChild(mudarMesa)
  return $mostrarDatos
}
