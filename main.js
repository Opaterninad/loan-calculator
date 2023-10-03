document.getElementById("capital").addEventListener("input", function (event) {
  const capital1 = event.target.value.replace(/\,/g, "");
  event.target.value = capital1.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
});

function calcularPrestamo() {
  var contenido = document.getElementById("foot");
  let capitalPagar,
    capitalTotal,
    interesesMensuales,
    interesesPagar,
    total,
    totalPagar;
  document.getElementById("tab").innerHTML = "";
  let capital2 = document.getElementById("capital").value.replace(/\,/g, "");
  let capital = parseFloat(capital2);
  let cuota = Number(document.getElementById("cuota").value);
  let interes = Number(document.getElementById("interes").value);
  if (capital > 0) {
    contenido.style.display === "none";
    contenido.style.display = "block";
    for (num = 1; num <= cuota; num++) {
      capitalTotal = capital / cuota;
      capitalPagar = capitalTotal.toFixed(2);
      interesesMensuales = (capital * interes) / (100 * cuota);
      interesesPagar = interesesMensuales.toFixed(2);
      total = capitalTotal + interesesMensuales;
      totalPagar = total.toFixed(2);
      document.getElementById("tab").innerHTML += `<tr>
        <td>${num}</td>
        <td>${capitalPagar}</td>
        <td>${interesesPagar}</td>
        <td>${totalPagar}</td>
      </tr>`;
    }
    let capitalaPagar = capital.toFixed(2);
    let interesCuota = (interesesMensuales * cuota).toFixed(2);
    let totalCuota = (total * cuota).toFixed(2);

    document.getElementById("t1").innerHTML = capitalaPagar;
    document.getElementById("t2").innerHTML = interesCuota;
    document.getElementById("t3").innerHTML = totalCuota;
  } else {
    Swal.fire(
      "Información incompleta",
      "Parece ser que falta por ingresar algún número. ",
      "question"
    );
  }
}
