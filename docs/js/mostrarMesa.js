import agregarArtManual from "./agregarArtManual.js";

export default function mostrarMesa(mesa) {

  const artics = JSON.parse(localStorage.getItem(mesa));
  const $nombreMesa = document.querySelector("#mesaMostrada");
  const $datosDinamicos = document.querySelector("#datosDinamicos");

  $nombreMesa.className = mesa.replace(/-\w+$/, "");
  $nombreMesa.innerHTML = mesa.replace("-", " ");

  // creo los tr para mostrar los articulos
  let $lineaPrecios = new String();
  let total = 0;
  if (artics && artics.length>0) {
	  artics.forEach((el, n) => {
		  if(n>0){
			  total += Number(el[1]);
			  // console.log(el[0],el[1])
			  $lineaPrecios += `<li class="leerTicket">
			  <textarea class="art col1">${el[0]}</textarea> <textarea class="monto col2">${el[1]}</textarea>
			  <span class="delete">x</span>
			  <div class="ahora">${el[2]}</div>
			  </li>
			  `;}else{
			  document.querySelector("#cubiertos").value = el[1]
			  }
    });
  }else{
	document.querySelector("#cubiertos").value = ""
  }

  $datosDinamicos.innerHTML = $lineaPrecios;
  const $suma = document.querySelector("#total");
  $suma.innerHTML = total;

  document.querySelector("#precioManual").addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      agregarArtManual();
    }
  });
}
