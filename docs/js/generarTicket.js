import leerMesaAbierta from "./leerMesaAbierta.js";

export async function generarTicket() {
  const response = await fetch("http://localhost:3000/ult-orden");
//   console.log(response);
  const data = await response.json();
  const orden = data.orden;
  const time = new Date()
  const fecha = `${time.getDate()}-${time.getMonth()}-${time.getFullYear()}`

  const $ul = document.querySelector(".imprimir");
  const num = document.querySelector("#orden");
  num.innerHTML = `<p>${fecha} - Orden N°: ${orden + 1}</p><p>Mesa: ${
    document.querySelector("#mesaMostrada").innerText
  }</p>`;

  const datos = leerMesaAbierta();

  let dato = `<li class='negrita'>
    <textarea class='impr col11' readonly=true>Detalle</textarea> 
    <textarea class='impr col21' readonly=true>Precio</textarea>
    </li>`;

  datos.forEach((el, n) => {
	if(n>0){
		dato += `
      <li class="leerTicket final">
      <textarea readonly class="impr col-1">${el[0]}</textarea>
      <textarea readonly class="impr col-2">$ ${el[1]}</textarea></li>
      `;
	}
   
  });
  dato += `
    <li class="leerTicket final" id="aCobrar">
    <textarea readonly class="impr col1">TOTAL</textarea>
    <textarea readonly class="impr col2">$ ${
      document.querySelector(" #total").value
    }</textarea></li>
    `;

  $ul.innerHTML = dato;
  const $parcial = document.querySelectorAll(".parcial");
  $parcial.forEach((el) => {
    el.placeholder = document.querySelector(" #total").value;
  });
  document.querySelector("#pago").value =
    document.querySelector(" #total").value;
}
