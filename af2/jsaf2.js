// fazer data de nascimento nser maior que dia atual
//fazer confirmação de senha
//fazer que caso a opção de genero seja ''outra'' digitar

let senha = document.getElementById('senha');
let senhaC = document.getElementById('senhaC');

function validarSenha() {
  if (senha.value != senhaC.value) {
    senhaC.setCustomValidity("Senhas diferentes!");
    senhaC.reportValidity();
    return false;
  } else {
    senhaC.setCustomValidity("");
    return true;
  }
}


senhaC.addEventListener('input', validarSenha);