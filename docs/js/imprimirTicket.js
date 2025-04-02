export function imprimirMostrarDatos() {
  const ventanaImpresion = window.open("", "Impresión", "width=600,height=600");
  const nombre= document.querySelector(".ticketNombre").innerHTML
  const descr = document.querySelectorAll(".ticketDescr")
  const lineas = document.querySelectorAll(".impr")
  console.log(descr)
  let texto = `
  <h3 style="text-align:center; font-size:3.5mm;width:80%">${nombre}</h3>
  <p style="text-align:center; font-size:3.1mm;width:80%">${descr[0].innerHTML}</p>
  <p style="text-align:center; font-size:3.1mm;width:80%">${descr[1].innerText}</p>
  <br>
  `;
  let bold=''
  for (let i = 0; i < lineas.length; i=i+2) {
	if(i===lineas.length-2){
		bold='font-weight:bold;'; texto+='<div style="height:2.6mm"></div>'}else{
			bold=''
	}
	texto += `
	<div style="display:flex;flex-direction:row; justify-content:flex-start;width:85%;flex-wrap:no-wrap">
 		<div style="text-align:left;width:50%;${bold} font-size:2.6mm">${lineas[i].innerHTML}</div>
 		<div style="width:35%;text-align:right;${bold} font-size:2.6mm">${lineas[i + 1].innerHTML}</div>
 	</div>
	`;
  }
  ventanaImpresion.document.open();
  ventanaImpresion.document.write(
    "<html style='font-family: 'Courier New', Courier, monospace;margin:0;padding:0'><head><title>Impresión</title></head><body>"
  );
  ventanaImpresion.document.write(texto);
  ventanaImpresion.document.write("</body></html>");
  ventanaImpresion.document.close();
  ventanaImpresion.focus();
  ventanaImpresion.print();
  ventanaImpresion.close();
}
