

import {dbPrecios} from "./leerDb.js";
import actualizarMesaAbierta from "./actualizarMesa.js";
import mostrarMesa from "./mostrarMesa.js";

export async function crearInputConLista() {
  const datos = await dbPrecios()
  const listaOriginal = datos
  // Crear el contenedor principal
  const contenedor = document.createElement("div");
  contenedor.className = "input-con-lista";

  // Crear el input
  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Buscar...";
  input.className = "precios";
  contenedor.appendChild(input);

  // Crear la lista desplegable
  const listaDesplegable = document.createElement("ul");
  listaDesplegable.className = "lista-desplegable";
  contenedor.appendChild(listaDesplegable);

  // Función para filtrar la lista
  function filtrarLista() {
    const valor = input.value.toLowerCase();
    if (valor.length > 0) {
      const listaFiltrada = listaOriginal
        .filter((item) => {
          return item[0].toLowerCase().includes(valor);
        })
        .slice(0, 12); // Limitar a 10 elementos

      // Mostrar la lista filtrada
      listaDesplegable.innerHTML = listaFiltrada
        .map((item, n) => `<li class="finder" TABINDEX=${n}>${item[0]} - ${item[1]}</li>`)
        .join("");
      listaDesplegable.style.display = "block";
    } else {
      listaDesplegable.innerHTML = "";
      listaDesplegable.style.display = "none";
    }
  }

  function manejo(e) {
    switch (e.key) {
      case "ArrowDown":
			document.querySelectorAll(".finder")[0].focus()
			break;
      case "Enter":
        {
          if (document.querySelector(".precios").value != "") {
            agregarItem();
            input.value = "";
            input.focus();
            actualizarMesaAbierta();
            let mesa = document
              .querySelector("#mesaMostrada")
              .innerHTML.replace(" ", "-");
            mostrarMesa(mesa);
          }
        }
        break;
      case "Escape":
        {
          input.value = "";
          input.focus();
        }

        break;

      default:
        break;
    }
  }

  // Función para seleccionar un item de la lista
  function seleccionarItem(item) {
    input.value = item[0] + " - " + item[1]; // Llenar el input con el valor seleccionado
    listaDesplegable.style.display = "none"; // Ocultar la lista
    let lista = document.querySelector(".precios");
    lista.focus();
  }
function leerItem(){

//   const value = input.value.split(" - ")[0];
//   const dato = listaOriginal.find((item) => item[0]===(value));

const dato = input.value
  return dato

}

function agregarItem() {
    let dato = leerItem()
	 const datoIng = dato.split(" - ");
    const horaActual = new Date();
    const hora = horaActual.getHours();
    const minutos =
      horaActual.getMinutes() < 10
        ? `0${horaActual.getMinutes()}`
        : horaActual.getMinutes();
    const ahora = `${hora}:${minutos}`;
    let nuevoItem = document.createElement("li");
    nuevoItem.className="leerTicket"
    nuevoItem.innerHTML = `<textarea class="art col1">${datoIng[0]}</textarea> <textarea class="monto col2">${datoIng[1]}</textarea><span class="delete">x</span><div class="ahora">${ahora}</div>`

    const lineas = document.querySelectorAll("#datosDinamicos")
    const ult = lineas[lineas.length - 1]
    ult.insertAdjacentElement("beforeend",nuevoItem)

  }

  // Evento para filtrar la lista al escribir en el input
  input.addEventListener("keyup", filtrarLista);
  input.addEventListener("keydown", (e) => manejo(e));

  // Evento para seleccionar un item de la lista
  listaDesplegable.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
      const texto = event.target.textContent.split(" - ")[0];
      const itemSeleccionado = listaOriginal.find((item) => item[0] === texto);
      if (itemSeleccionado) {
        seleccionarItem(itemSeleccionado);
      }
    }
  });

  listaDesplegable.addEventListener("keydown", e =>{
    
          switch (e.key) {
            case "ArrowUp":
					if (document.activeElement.previousSibling){
            document.activeElement.previousSibling.focus();}
				else{
					const lista = document.querySelectorAll(".finder")
					const ult = lista[lista.length-1]
					ult.focus()
				}
              break;
            case "ArrowDown":
					if (document.activeElement.nextSibling){
            document.activeElement.nextSibling.focus();
					}else{
						document.querySelectorAll(".finder")[0].focus()
					}
              
              break;
            case "Enter":
           
                const texto = document.activeElement.textContent.split(" - ")[0];
                const itemSeleccionado = listaOriginal.find(
                  (item) => item[0] === texto
                );
                if (itemSeleccionado) {
                  seleccionarItem(itemSeleccionado);
                }
            
              break;
    
            default:
              break;
          }
        
  })

  // Retornar el contenedor con el input y la lista
  return contenedor;
}
