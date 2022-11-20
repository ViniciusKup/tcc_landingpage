const EnviarFormulario = (event) => {
  nome = document.getElementById("nome").value
  email = document.getElementById("email").value
  mensagem = document.getElementById("mensagem").value
  const validar = validarCampos(nome, email, mensagem)
  if(validar) {
    // alert(validar)
    if(validar == 'block-nome'){
      nomeInvalido.style.display = 'block'
    }
    if(validar == 'block-email'){
      emailInvalido.style.display = 'block'
    }
    if(validar == 'block-mensagem'){
      mensagemInvalida.style.display = 'block'
    }
    event.preventDefault()
    return
  }
  
  return alert('Formulário preenchido com sucesso!')
}

const validarCampos = (nome, email, mensagem) => {
  if(nome === '') {
    return 'block-nome'
  }

  if(!email.includes('@') || !email.includes('.')) {
    return'block-email'
  }

  if(mensagem.length < 10) {
    return 'block-mensagem'
  }
  return false
}

module.exports = {validarCampos}

