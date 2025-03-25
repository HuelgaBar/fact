import botonCerrarModal from "./botonCerrarModal.js";
import { mostrarRegistro } from "./funcionesRegistro.js";

export default function modalRegistros() {
  const $modal = document.createElement("div");
  $modal.className = "registros";
  const containerIngresos = document.createElement("div");
  containerIngresos.className = "ingresoDatos";
    $modal.style.display = "none";
  for (let i = 0; i < 7; i++) {
    const label = document.createElement("label");
    label.id = `label${i}`;
    const span = document.createElement("span");
    span.id = `input${i}`;
    containerIngresos.appendChild(label);
    containerIngresos.appendChild(span);
  }
  const consulta = document.createElement("button");
  consulta.id = "consultaRegistro";
  consulta.textContent = "Consultar";
  consulta.addEventListener("click", e=> {
	mostrarRegistro()
})
  containerIngresos.appendChild(consulta);

  const titulo = document.createElement("h2");
  titulo.textContent = "Examinar registros";
  titulo.className = "registrosTitulo";

  const mostrarDatos = document.createElement("div");
  mostrarDatos.className = "mostrarDatosResumen";
  	  mostrarDatos.innerHTML = `
	  <h3 class="center">Facturación</h3>
  	<table class="Ingresos">
  		<thead class="center">
  			<th>Fecha</th>
  			<th>Mesa</th>
  			<th>Monto</th>
  			<th>Efectivo</th>
  			<th>Transf</th>
  			<th>Débito</th>
  			<th>Créd</th>
  			<th>Prop.</th>
  			<th>Cubiertos</th>
  			<th>N orden</th>
  		</thead>
  	<tbody id="mostrarIngresos"></tbody>
  </table>
    <h3 class="center">Egresos</h3>
  <table class="registroEgresos">
  <thead class="center">
  <th>Id</th>
  <th>Fecha</th>
  <th>Tipo</th>
  <th>Pago</th>
  <th>Descripcion</th>
  <th>Monto</th>
  </thead>
  <tbody id="mostrarEgresos">
  </tbody>
  </table>
    <h3 class="center">Balance</h3>
  <table class="balance">
		<thead class="center">
		<th></th>
			<th>Efectivo</th>
			<th>Transf</th>
			<th>Débito</th>
			<th>Créd</th>
	</thead>
	<tbody id="balance"></tbody>
	  </table>



  `;

  $modal.appendChild(titulo);
  $modal.appendChild(containerIngresos);
  $modal.appendChild(mostrarDatos);

  setTimeout(() => {
    const labels = document.querySelectorAll("[id^=label]");
    const inputs = document.querySelectorAll("[id^=input]");
    labels[0].textContent = "Fecha Inicio:";
    labels[1].textContent = "Fecha Cierre:";
    labels[2].textContent = "Tipo Egreso:";
    labels[3].textContent = "Forma de Pago:";
    labels[4].textContent = "Descripción Egreso:";
    labels[5].textContent = "Informe Ingresos:";
    labels[6].textContent = "Informe Egresos:";

    inputs[0].innerHTML = "<input id='resp0' type='datetime-local'>";
    inputs[1].innerHTML = "<input id='resp1' type='datetime-local'>";
    inputs[2].innerHTML = `<select id='resp2' class="valor">
	 <option value="">Todos</option>
	 <option value="Proveedores">Proveedores</option>
	 <option value="Sueldos">Sueldos</option>
	 <option value="Gastos">Gastos</option>
	 </select>`;
    inputs[3].innerHTML = `<select id='resp3' class="valor">
	 <option value="">Todos</option>
	 <option value="efectivo">Efvo</option>
	 <option value="transferencia">Transf</option>
	 <option value="debito">Débito</option>
	 <option value="credito">Crédito</option>
	 </select>`;
    inputs[4].innerHTML = "<input id='resp4' type='text'>";
    inputs[5].innerHTML = `<select id='resp5' class="valor">
	 <option value="detalles">Detalles</option>
	 <option value="resumen">Resumen</option>
	 </select>`;
    inputs[6].innerHTML = `<select id='resp6' class="valor">
	 <option value="detalles">Detalles</option>
	 <option value="resumen">Resumen</option>
	 </select>`;
  }, 100);

  const cerrar = botonCerrarModal();

  $modal.appendChild(cerrar);
  return $modal;
}
