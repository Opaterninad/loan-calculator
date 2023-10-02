function calcularPrestamo() {
  document.getElementById("tab").innerHTML = "";
  let capital = Number(document.getElementById("capital").value);
  let cuota = Number(document.getElementById("cuota").value);
  let interes = Number(document.getElementById("interes").value);

  if (capital > 0) {
    for (num = 1; num <= cuota; num++) {
      capitalTotal = capital / cuota;
      capitalPagar = capitalTotal.toFixed(2);
      intereses = ((capital / cuota) * interes) / 100;
      interesesPagar = intereses.toFixed(2);
      total = capitalTotal + intereses;
      totalPagar = total.toFixed(2);
      document.getElementById("tab").innerHTML =
        document.getElementById("tab").innerHTML +
        `<tr>
                        <td> ${num}</td>
                        <td> ${capitalPagar}</td>
                        <td> ${interesesPagar}</td>
                        <td> ${totalPagar}</td>
                    </tr>`;
    }
    capitalaPagar = capital.toFixed(2);
    interesCuota = (intereses * cuota).toFixed(2);
    totalCuota = (totalPagar * cuota).toFixed(2);
    document.getElementById("t1").innerHTML = capitalaPagar;
    document.getElementById("t2").innerHTML = interesCuota;
    document.getElementById("t3").innerHTML = totalCuota;
  } else {
    alert("Falta ingresar un Número");
  }
}
