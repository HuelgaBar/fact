import leerMesaAbierta from "./leerMesaAbierta.js"

export default function cobrarMesa(){
  event.stopPropagation();
  const venta = leerMesaAbierta()
  const fecha =new Date().getTime()
  // console.log(venta,fecha)
  const $ = (dato) => {return document.querySelector(dato)} 

  const datosHistorial ={}
  venta.forEach((item,n) => {
	if(n>0){
    datosHistorial[n]={"fechaCobro":fecha,"articulos":item[0],"precio":item[1],"horaPedido":item[2]}}
    
  });
 
  const datosResumen = {
    fechaCobro: fecha,
	 cubiertos:document.querySelector("#cubiertos").value,
    mesa: $("#mesaMostrada").innerText.replace(" ", "-"),
    monto: Number($("#total").value) || 0,
    efectivo: Number($("#efvo").value) || 0,
    transferencia: Number($("#transf").value) || 0,
    debito: Number($("#debito").value) || 0,
    credito: Number($("#credito").value) || 0,
    propinaTransf: Number($("#propina").value) || 0
  };

  const fechaApertura = JSON.parse(localStorage.getItem("cajaInicial"));
   if (Number($("#propina").value) > 0 && fechaApertura != "") {
     const egresos = JSON.parse(localStorage.getItem("egresosDiario")) || []
     egresos.push({
       fecha: fechaApertura.Fecha,
       tipoEgreso: "Gastos",
       formaPago: "efectivo",
       descripcion: "propina-transf",
       monto: Number($("#propina").value)
     });
	  localStorage.setItem("egresosDiario",JSON.stringify(egresos));
   }
console.log(datosResumen);
return {datosHistorial, datosResumen}
}