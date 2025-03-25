import botonCerrarModal from "./botonCerrarModal.js";

export function info(){
const informacion = document.createElement("div")
informacion.id="informacion"
informacion.innerHTML = `
<h3>INFORMACION:</h3>
<p class="center"><strong>Presione ctrl + F para buscar dentro de la información</strong></p>
<h4>Inicio:</h4>
<ul class ="circulo"><li>&#149 Para iniciar el día, ir a &quot;Libro Diario&quot; y seleccionar hora de apertura</li>
<li>&#149 Ingresar montos de inicio de caja: Efvo y en cuenta</li>
</ul>
<h4>Facturación:</h4>
<ul class ="circulo">
<li>&#149 Hacer click en la mesa a facturar, al ingresar texto en &quot;Buscar...&quot; se van a ir filtrando las opciones, flecha arriba y abajo navega por las opciones, click o Enter selecciona ítem y otro Enter lo agrega al ticket</li>
<li>&#149 Cada artículo agregado aparece con una &quot;x&quot; en el ticket, para borrarlo con un click en caso de agregarlo por error</li>
<li>&#149 Al pasar el mouse sobre un artículo muestra la hora en que fue agregado.</li>
<li>&#149 Se pueden agregar artículos a mano en &quot;Ingreso a mano&quot;, después de agregar el monto, con Enter queda registrado, descuentos se ingresan con valores negativos</li>
<li>&#149 &quot;Ingrese cubiertos&quot; permite agregar la cantidad de personas por mesa</li>
</ul>
<h4>Mudar Mesa</h4>
<ul class ="circulo"><li>&#149 Permite mover el contenido de una mesa a otra, muestra advertencias para confirmar los cambios, o si no hay nada para mover</li></ul>
<ul class ="circulo">
<li>1- &nbsp&nbsp Seleccionar la mesa a mudar</li>
<li>2- &nbsp&nbsp Click en  mudar mesa</li>
<li>3- &nbsp&nbsp Aceptar alerta</li>
<li>4- &nbsp&nbsp Click en mesa destino</li>
</ul>
<ul class ="circulo"><li>&#149 Si la mesa destino tiene artículos agregados, los agrega al final y suma los cubiertos</li>
<li>&#149 La mesa destino no puede seleccionarse desde la ventana mesas abiertas</li></ul>

<h4>Hacer Ticket</h4>
<ul class ="circulo">
<li>&#149 El botón &quot;Hacer Ticket&quot; abre la pantalla para imprimir y cobrar el ticket.</li>
<li>&#149 El botón &quot;Imprimir Ticket&quot; abre al ventana de impresión.</li>
<li>&#149 Para habilitar el botón &quot;Cobrar Mesa&quot;, se deben ingresar los valores de las formas de pago</li>
<li>&#149 Si se agrega propina por transferencia, el monto de transferencia debe ser mayor o igual al de propina</li>
<li>&#149 El botón &quot;Cobrar Mesa&quot; cierra la mesa y la deja en blanco el ticket</li>
</ul>
<h4>Ver Mesas Abiertas</h4>
<ul class ="circulo"><li>&#149 Abre una ventana que muestra todas las mesas que tienen pedidos, los botones mostrados permiten mostrar cada mesa abierta</li></ul>
<h4>Actualizar Precios</h4>
<ul class ="circulo">
<li>&#149 Abre una ventana con todos los artículos facturables, permite cambiar nombres y precios, agregar o quitar artículos.</li>
<li>&#149 El botón &quot;Actualizar Precios&quot; guarda los cambios realizados</li>
<li>&#149 Actualizar el buscador (presionar F5) para cargar la lista actualizada</li>
</ul>
<h4>Libro Diario</h4>
<ul class ="circulo">
<li>&#149 Hora de Apertura: Seleccionar la fecha y hora de apertura de caja</li>
<li>&#149 Cantidad en Efvo: Monto en efvo al iniciar caja</li>
<li>&#149 Cantidad en cuenta: Monto en cuenta al iniciar caja</li>
<li>&#149 Cálculo efectivo: Para contar el efectivo al inicio, ingresar la cant de billetes de cada denominación, muestra el total de efvo abajo de todo</li>
<li>&#149 Egresos: Permite agregar egresos de caja en categorías:<br>
&nbsp&nbsp - Proveedores <br>
&nbsp&nbsp - Sueldos <br>
&nbsp&nbsp - Gastos <br><br>
</li>
<li>&#149 Y por medio de pago:<br>
&nbsp&nbsp - Efectivo <br>
&nbsp&nbsp - Transferencia <br>
&nbsp&nbsp - Débito <br>
&nbsp&nbsp - Crédito </li>
<li>&#149 &quot;Propina-Transf&quot; se crea automáticamente al cobrar un ticket donde se agregó propina</li>

<li>&#149 &quot;Cerrar Caja&quot; Cierra el día, guarda todos los datos de ingresos y egresos, toma los valores finales de efvo y cuenta y los anota en &quot;Caja Inicial&quot; para el día siguiente
</li>
<li>&#149 &quot;Ver Datos&quot; actualiza los montos ingresados por cobros hasta el momento
</li>
</ul>
<h4>Ver Mesas Cobradas</h4>
<ul class ="circulo">
<li>&#149 Muestra todas las mesas facturadas tomando como inicio la hora de apertura</li>
<li>&#149 Se pueden cambiar las formas de pago y la cantidad de personas por mesa en caso de errores u omisiones, pero no el monto final facturado</li>
</ul>

<h4>Explorar Registros</h4>
<ul class ="circulo">
<li>&#149 Muestra una ventana para mostrar los registros hasta la fecha actual.</li>
<li>&#149 Seleccionar fecha de inicio y fecha de cierre para los registros a mostrar</li>
<li>&#149 Seleccionar tipo de egreso: <br>
&nbsp&nbsp -  Todos <br>
&nbsp&nbsp -  Proveedores <br>
&nbsp&nbsp -  Sueldos <br>
&nbsp&nbsp -  Gastos <br><br>

</li>
<li>&#149 Seleccionar forma de pago: <br>
&nbsp&nbsp -  Efectivo <br>
&nbsp&nbsp -  Transferencia <br>
&nbsp&nbsp -  Débito <br>
&nbsp&nbsp -  Crédito <br><br>
</li>
<li>&#149 Descripción Egreso: <br>
&nbsp&nbsp -  Para filtrar mas la búsqueda, nombre de empleado, de proveedor, etc. (carne, Edesur, etc.)
<li>&#149 Informe Ingresos: <br>
&nbsp&nbsp -  Detalles (Muestra cada ingreso) <br>
&nbsp&nbsp -  Resumen (Muestra solo el total de ingresos entre las fechas seleccionadas) <br>

</li>
<li>&#149 Informe Egresos: <br>
&nbsp&nbsp -  Detalles (Muestra cada egreso) <br>
&nbsp&nbsp -  Resumen (Muestra solo el total de egresos entre las fechas seleccionadas y con el filtro seleccionado) <br>
</li>
<li>&#149 &quot;Consultar&quot;
  Muestra la consulta basada en las selecciones anteriores</li>
</ul>`;
const cerrar = botonCerrarModal()
informacion.appendChild(cerrar)
return informacion
}
