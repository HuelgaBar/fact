import { mudarMesa } from "./mudarMesa.js"

export function botonMudarMesa(mesa){
const mudar = document.createElement("button")
mudar.id = "mudarMesa"
mudar.textContent = "Mudar Mesa"
mudar.addEventListener("click", e => mudarMesa(document.querySelector("#mesaMostrada").innerText))
return mudar
}