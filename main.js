let output = document.getElementById("output");
let emailtxt = document.getElementById('emailtxt');

  function alerta() {
    output.innerHTML = `La fecha seleccionada es: ${emailtxt.value}`;
}
