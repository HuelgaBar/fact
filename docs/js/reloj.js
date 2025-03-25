

export default function reloj() {
  const meses = [["Ene"], ["Feb"],["Mar"],["Abr"],["May"],["Jun"],["Jul"],["Ago"],["Sep"],["Oct"],["Nov"],["Dic"]];
  const reloj = document.createElement("div")
  reloj.className= "reloj"
  let hoy = new Date()
  let minutos = null
  let horas = null
  let mes = hoy.getMonth()
  hoy.getMinutes()<10 ? minutos =`0${hoy.getMinutes()}` : minutos = hoy.getMinutes()
  hoy.getHours() < 10
    ? (horas = `0${hoy.getHours()}`)
    : (horas = hoy.getHours());
  let fecha = `${hoy.getDate()}-${meses[mes]}-${hoy.getFullYear()}`
  let ahora = `${horas} : ${minutos}`;
  reloj.innerHTML = `${fecha}<br>${ahora}`;
  
  setInterval(() => {
    hoy = new Date()
    hoy.getHours() < 10
      ? (horas = `0${hoy.getHours()}`)
      : (horas = hoy.getHours());
    hoy.getMinutes()<10 ? minutos =`0${hoy.getMinutes()}` : minutos = hoy.getMinutes()
    fecha = `${hoy.getDate()}-${meses[mes]}-${hoy.getFullYear()}`
    ahora = `${horas} : ${minutos}`;
    reloj.innerHTML = `${fecha}<br>${ahora}`;
  }, 10000);
  return reloj
}

