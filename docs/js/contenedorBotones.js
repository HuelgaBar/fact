import reloj from "./reloj.js"
import botonMesasAbiertas from "./botonMesasAbiertas.js"
import botonPrecios from "./botonPrecios.js"


export default async function contenedorBotones(){

const container = document.createElement("div")
container.className="containerBotones"
const verReloj = reloj()
const verBotonMesas = botonMesasAbiertas()
const verPrecios = botonPrecios()
container.appendChild(verReloj)
container.appendChild(verBotonMesas)
container.appendChild(await verPrecios);
return container
}