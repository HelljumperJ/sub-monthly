let output = document.getElementById("output");
let fecha = document.getElementById('fecha');

  function leeFormulario() {
    output.innerHTML = `La fecha seleccionada es: ${fecha.value}`;
}
