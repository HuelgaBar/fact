export function agregarEgreso() {
	const fecha = JSON.parse(localStorage.getItem("cajaInicial"))
	const ingreso = document.querySelector(".egresoEdit");
	const valores = document.querySelectorAll(".valor")
	const datos =document.createElement("tr")
	datos.className = "itemEgreso"
	if (
    fecha.Fecha != "" &&
    valores[0].value != "" &&
    valores[1].value != "" &&
    valores[2].textContent != "" &&
    !isNaN(valores[3].textContent.trim())
  ){
    datos.innerHTML = `
	<td>${fecha.Fecha}</td>
	<td>${valores[0].value}</td>
	<td>${valores[1].value}</td>
	<td>${valores[2].textContent.trim()}</td>
	<td>${valores[3].textContent.trim()}</td>
	<td class="remove" style="font-size:11px">x</td>
	`;
	ingreso.insertAdjacentElement("beforebegin",datos);
}else{
	window.alert("Comprobar hora de apertura y campos completos")
}
	valores[0].value = ""
	valores[1].value = ""
	valores[2].textContent=""
	valores[3].textContent=null
	valores[0].focus()
}