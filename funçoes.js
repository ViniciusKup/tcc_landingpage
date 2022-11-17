const EnviarFormulario = (event) => {
  nome = document.getElementById("nome").value
  email = document.getElementById("email").value
  mensagem = document.getElementById("mensagem").value
  const validar = validarCampos(nome, email, mensagem)
  if(validar) {
    alert(validar)
    event.preventDefault()
    return
  }
  return alert('Formulário preenchido com sucesso!')
}

const validarCampos = (nome, email, mensagem) => {
  if(nome === '') {
    return 'Nome precisa ser preenchido!'
  }
  if(!email.includes('@') || !email.includes('.')) {
    return 'E-mail inválido!'
  }
  if(mensagem.length < 10) {
    return 'Mensagem com no mínimo 10 caracteres!'
  }
  return false
}

module.exports = {validarCampos}