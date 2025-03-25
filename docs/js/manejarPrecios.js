import botonCerrarModal from "./botonCerrarModal.js";
import { putPrecios } from "./funcionesQueryPut.js";
import { dbPrecios } from "./leerDb.js";
export async function modalPrecios() {
  const container = document.createElement("div");
  container.className = "dbPrecios";
  container.innerHTML = `
	<h3>Lista de Precios</h3>
	<p>Para borrar un artículo, dejar la línea vacía</p>
	`;
//   const cuerpo = await mostrarPrecios();
  const tabla = document.createElement("table")
  tabla.className = "actualizarPrecios"
//   tabla.innerHTML = cuerpo

  const guardarPrecios = document.createElement("button");
  guardarPrecios.className = "guardarPrecios"
  guardarPrecios.textContent = "Actualizar Precios";
  guardarPrecios.addEventListener("click", (e) => actualizarPrecios());
  const agregarItems = document.createElement("button")
  agregarItems.textContent = "Agregar artículo"
  agregarItems.addEventListener(
    "click",
    (e) =>
      (document.querySelector(".listaPrecios").innerHTML += `
  <tr><td class="dbItem" contenteditable></td>
  <td class="dbPrecio" contenteditable></td></tr>`)
  );
  const cerrarModal = botonCerrarModal()
  container.appendChild(tabla);
  container.appendChild(cerrarModal)
  container.appendChild(agregarItems);
  container.appendChild(guardarPrecios);
  return container
}

export async function mostrarPrecios() {

	let precios = await dbPrecios();
 
	let listado = `<thead>
	<th>Artículo</th>
	<th>Precio</th>
	</thead>
	<tbody class='listaPrecios'>`
  for (const el of precios) {
    listado += `
		<tr>
		<td class="dbItem" contenteditable>${el[0]}</td>
		<td class="dbPrecio" contenteditable>${el[1]}</td>
		</tr>
		`;
  }
  listado +=`</tbody>`;
  document.querySelector(".actualizarPrecios").innerHTML = listado
}

export async function actualizarPrecios() {
  const items = document.querySelectorAll(".dbItem");
  const precios = document.querySelectorAll(".dbPrecio");
  const exportar = [];
  items.forEach((i, n) => {
	if (i.innerText != "" && i.innerText != "\n") {
    exportar.push([i.innerText, Number(precios[n].innerText)]);
  }
	});
	console.log(exportar);
	  putPrecios(exportar);
}
