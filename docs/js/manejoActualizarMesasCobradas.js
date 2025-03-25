export default function habilitarBotonActualizarMesaCobrada() {
  const actual = document.activeElement.classList[0].replace("orden", "");
  const datos = document.querySelectorAll(
    `.${document.activeElement.classList[0]}`
  );
  const total = Number(document.querySelector(`.total${actual}`).innerText);
  let suma = 0;
  datos.forEach((el) => {
    if (!isNaN(el.innerHTML)&& !(el.classList.contains("cubiertos"))) {
      if (el.classList.contains("prop")) {
        suma -= Number(el.innerHTML);
      } else {
        suma += Number(el.innerHTML);
      }
    }
  });
  
  if (total === suma) {
    document.querySelector(`#b${actual}`).disabled = false;
  } else {
    document.querySelector(`#b${actual}`).disabled = true;
  }
}
