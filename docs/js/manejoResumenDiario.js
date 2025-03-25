export default function manejoResumenDiario() {
  const inicial = document.querySelectorAll(".inicioCaja");
  const $tabla = document.querySelector(".tablaResumen");
  const celdas = $tabla.querySelectorAll("td");

  const efvo = document.querySelector("#diarioEfvo");
  const transf = document.querySelector("#diarioTransf");
  const deb = document.querySelector("#diarioDeb");
  const cred = document.querySelector("#diarioCred");
		 

  const egresos = JSON.parse(localStorage.getItem("egresosDiario"));
  const total = { efvo: 0, transf: 0, deb: 0, cred: 0 };
  if (egresos) {
    egresos.forEach((el) => {
      switch (el.formaPago) {
        case "efectivo":
          total.efvo += Number(el.monto);
          break;

        case "transferencia":
          total.transf += Number(el.monto);
          break;

        case "debito":
          total.deb += Number(el.monto);
          break;

        case "credito":
          total.cred += Number(el.monto);
          break;

			 default:
				 break;
				}
			});
		}
    celdas[1].innerText = inicial[1].value || 0;
    celdas[2].innerText = efvo.value;
    celdas[3].innerText = total.efvo;
    celdas[4].innerText =
      Number(celdas[1].innerText) + Number(celdas[2].innerText)-Number(celdas[3].innerText);

    celdas[6].innerText = inicial[2].value ||0;
    celdas[7].innerText =
      Number(celdas[12].innerText) +
      Number(celdas[17].innerText) +
      Number(celdas[22].innerText);
    celdas[8].innerText =
      Number(celdas[13].innerText) +
      Number(celdas[18].innerText) +
      Number(celdas[23].innerText);
    celdas[9].innerText =
      Number(celdas[6].innerText) +
      Number(celdas[14].innerText) +
      Number(celdas[19].innerText) +
      Number(celdas[24].innerText);

    celdas[12].innerText = transf.value;
    celdas[13].innerText = total.transf;
    celdas[14].innerText = Number(transf.value) - Number(total.transf);

    celdas[17].innerText = deb.value;
    celdas[18].innerText = total.deb;
    celdas[19].innerText = Number(deb.value) - Number(total.deb);

    celdas[22].innerText = cred.value;
    celdas[23].innerText = total.cred;
    celdas[24].innerText = Number(cred.value) - Number(total.cred);
}
