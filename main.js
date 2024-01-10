function alerta() {
  var email = document.getElementById('emailtxt').value; 
  window.location.href = `success.html?email=${encodeURIComponent(email)}`;
}