import botonCerrarModal from "./botonCerrarModal.js"
import { borrarMesaCobrada } from "./funcionesQueryDelete.js"

export function validarPass(id) {
	const cerrar = botonCerrarModal()
	const container = document.createElement("div")
	container.innerHTML = `<h3>Ingresar datos de validación</h3>`
	container.className = "validarPass"
	const texto = document.createElement("input")
	texto.type = "password"
	texto.placeholder = "Ingrese password"
	texto.id = "pass"
	const val = document.createElement("input")
	val.type = "password"
	val.id = "val"
	val.placeholder = "Ingrese num. validación"
	const ok = document.createElement("button")
	ok.id="botonPass"
	ok.textContent = "OK"
	ok.addEventListener("click", e =>{
		ok.disabled = true
		const id = JSON.parse(localStorage.getItem("id"))
		const texto = document.querySelector("#pass").value
		const num = document.querySelector("#val").value
		setTimeout(() => {
			document.querySelector(".validarPass").style.display = "none";
			localStorage.setItem("id","")
		}, 10);
		borrarMesaCobrada(id, texto, num)
	})
	container.appendChild(texto)
	container.appendChild(val)
	container.appendChild(ok)
	container.appendChild(cerrar)
	return container
}