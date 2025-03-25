import mostrarMesa from "./mostrarMesa.js"

export function mudarMesa(mesa) {
	const mesaActual = JSON.parse(localStorage.getItem(`${mesa.replace(" ","-")}`))
	if(mesa === "Mesa"){return window.alert("No hay mesa seleccionada");}
	if(!mesaActual || mesaActual.length<1){return window.alert(`${mesa} no tiene pedidos aún`)}
	window.alert("Haga click en la mesa destino")
	function cambiarMesa(e){
			e.preventDefault()
		const nombreMesaNueva = e.target.innerText.replace(" ", "-");
		const mesaNueva = JSON.parse(
      localStorage.getItem(e.target.innerText.replace(" ", "-")));
		let mudar
		let adjuntar
	 if(!mesaNueva || mesaNueva.length <1){
		 mudar = window.confirm(`Mudar ${mesa} a ${e.target.innerText}?`);
	 }else{
		adjuntar = window.confirm(`${e.target.innerText} está ocupada, juntar con ${mesa}?`)
	 }
	 if(mudar){
		localStorage.setItem(`${e.target.innerText.replace(" ", "-")}`, JSON.stringify(mesaActual));
		localStorage.setItem(`${mesa.replace(" ", "-")}`, "[]");
		setTimeout(() => {
			mostrarMesa(nombreMesaNueva);
			}, 2);
	 }
	 if (adjuntar){
		 mesaNueva[0][1] =Number(mesaNueva[0][1])+Number(mesaActual[0][1])
		 mesaActual.forEach((el,n)=> {
	if(n>0){
			mesaNueva.push(el)
			localStorage.setItem(nombreMesaNueva, JSON.stringify(mesaNueva)) 
			localStorage.setItem(`${mesa.replace(" ", "-")}`, "[]");
			setTimeout(() => {
        mostrarMesa(nombreMesaNueva);
      }, 2);}
		});
	 }
		
			document.querySelector(".mesas").removeEventListener("click",cambiarMesa)
	}
	document.querySelector(".mesas").addEventListener("click",cambiarMesa)
}