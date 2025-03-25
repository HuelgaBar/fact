import mostrarMesa from "./mostrarMesa.js";
import {dbMesas} from "./leerDb.js";

export default async function actualizarModalMesas() {
  event.stopPropagation();
  const mesasAbiertas = document.querySelector(".mesasAbiertas");
  const allMesas = await dbMesas();
  const mesas=allMesas

  const container = document.createElement("div");
  container.id = "container";

  for (const mesa in mesas) {
    const seccion = document.createElement("div")
    mesas[mesa].forEach(num =>{
      const artic = JSON.parse(localStorage.getItem(`${mesa}-${num}`))
      if(artic && artic.length > 1){
        const boton = document.createElement("button")
        boton.className=mesa
        boton.classList.add("abierta")
        boton.textContent = `${mesa} ${num}`;
        boton.addEventListener("click", (e) =>
          mostrarMesa(`${mesa}-${num}`)
        );
        seccion.appendChild(boton)
      }
    })
    if(seccion.innerHTML !=""){
      container.appendChild(seccion)
    }
}

  const aReemplazar = document.querySelector("#container");
  mesasAbiertas.replaceChild(container, aReemplazar);
}
