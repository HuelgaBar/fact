import { botonInfo } from "./botonInfo.js";
import botonLibroDiario from "./BotonLibroDiario.js";
import botonMesasCobradas from "./botonMesasCobradas.js";
import botonRegistro from "./botonRegistro.js";

export async function contenedorBotonesDiario() {
  const contenedor = document.createElement("div");
  contenedor.className = "botonesDiario";
const verBotonLibroDiario = botonLibroDiario()
const registros = botonRegistro()
const info = botonInfo()
const verBotonMesasCobradas = await botonMesasCobradas()
  contenedor.appendChild(verBotonLibroDiario);
  contenedor.appendChild(verBotonMesasCobradas);
  contenedor.appendChild(registros);
  contenedor.appendChild(info);
  return contenedor;
}
