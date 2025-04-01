export function imprimirResumen() {
	const ventanaImpresion = window.open("", "Impresión Resumen", "width=1200,height=600");
	const nombre = document.createElement("table")
  nombre.innerHTML = document.querySelector("#mostrarResumenDiaxDia").innerHTML;

  let texto = `
  <h2 style="text-align:center">INFORME DE MOVIMIENTOS</h2>
  <br>
  <div style="display:flex;padding:auto">
  ${nombre.outerHTML}
  </div>
  `;
  ventanaImpresion.document.open();
 
  ventanaImpresion.document.write(
    `
	 <html>
	 	<head>
	 		<style>
	 		html{
	 			margin:0; 
	 			padding:0
	 		}
	 		table{
	 			margin:auto;
	 			border: solid black 1px;
	 		}
	 		th{
				min-width:25px;
				padding:10px
				border: solid black 1px;
			}
			tr{
				border: solid black 1px;
	 			text-align:right;
	 		}
	 		table tr:nth-child(odd){
	 			background-color: rgb(182, 182, 182)
			}
	 		table tr:nth-child(even){
	 			background-color: var(--fondoNoBlanco)
			}
		</style>	
	<title>Impresión</title>
	</head>
	<body>`
  );
  ventanaImpresion.document.write(texto);
  ventanaImpresion.document.write("</body></html>");
  ventanaImpresion.document.close();
  ventanaImpresion.focus();
  ventanaImpresion.print();
  ventanaImpresion.close();
}