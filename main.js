function alerta() {
  var email = document.getElementById('emailtxt').value;
  window.location.href = `success.html?email=${encodeURIComponent(email)}`;
}

const urlParams = new URLSearchParams(window.location.search);
  const email = urlParams.get('email');

  if (email) {
      document.getElementById('output').innerText = decodeURIComponent(email);
  }

  function validateEmail(){
                
    let emailField = document.getElementById('emailtxt');
    let validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    let errormsg = document.getElementById('errormsg');

    if( validEmail.test(emailField.value) ){
      emailField.classList.add('bg-green-200' , 'border-green-500');
      emailField.classList.remove('bg-red-200' , 'border-red-500');
      errormsg.classList.add('hidden');
      alerta();
    }else{
      emailField.classList.add('bg-red-200' , 'border-red-500');
      emailField.classList.remove('bg-green-200' , 'border-green-500');
      errormsg.classList.remove('hidden');
    }
  } 