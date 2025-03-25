import botonCerrarModal from "./botonCerrarModal.js";
import habilitarBotonActualizarMesaCobrada from "./manejoActualizarMesasCobradas.js";

export function verMesasCobradas() {
  const $cerrar = botonCerrarModal();

  const $mesas = document.createElement("div");
  $mesas.className = "mesasCobradas";
  const $titulo = document.createElement("h3");
  $titulo.textContent = "Mesas Cobradas";
  $mesas.appendChild($titulo);
  const $descr = document.createElement("p");
  $descr.className = "descr";
  $descr.textContent = "Efvo, Transf, Déb, Créd, y Propina son editables";
  $mesas.appendChild($descr);
  const $tabla = document.createElement("table");
  $tabla.id = "containerMesasCobradas";
  $tabla.innerHTML = `
<thead>
<tr>
<th>Hora</th>
<th>Mesa</th>
<th>Efvo</th>
<th>Transf</th>
<th>Déb</th>
<th>Créd</th>
<th>Propina</th>
<th style="font-weight:bold">Total</th>
<th>Orden N</th>
<th>Cubiertos</th>
</tr>
</thead>
<tbody id="dinamicoMesasCerradas"></tbody>
	`;
  $mesas.appendChild($tabla);
  $mesas.appendChild($cerrar);
  $tabla.addEventListener("keyup", (e) => {
    if ((e.target.className === "cobradaData")) {
      habilitarBotonActualizarMesaCobrada();
    }
    });
  return $mesas;
}
