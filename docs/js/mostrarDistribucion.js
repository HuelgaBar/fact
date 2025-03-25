import {dbMesas} from "./leerDb.js";
import mostrarMesa from "./mostrarMesa.js";

export default async function mostrarDistribucion() {
  try {

      const distribMesas = document.createElement("div");
  const datos = await dbMesas();
  Object.entries(datos).forEach(([clave, valores]) => {
    const div = document.createElement("div");
    valores.forEach((valor) => {
      const boton = document.createElement("button");
      boton.className = clave;
      boton.textContent = `${clave} ${valor}`;
      boton.addEventListener("click", (e) => mostrarMesa(`${clave}-${valor}`));
      div.appendChild(boton);
    });
    distribMesas.appendChild(div);
  });
  distribMesas.classList.add("mesas");
  return distribMesas;
  } catch (error) {
        console.log("error: ", error);
  }

}
