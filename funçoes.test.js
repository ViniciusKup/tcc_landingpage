const {validarCampos} = require('./funçoes')

describe('validarCampos testes', () => {
    test('Validar Nome vazio', () => {
      const nome = ''
      const email = 'email@valido.com'
      const mensagem = 'mensagem com mais de 10 caracteres'
      expect(validarCampos(nome, email, mensagem)).toBe('Nome precisa ser preenchido')
    })
    test('Validar Email inválido sem @', () => {
      const nome = 'nome'
      const email = 'teste.com'
      const mensagem = 'mensagem com mais de 10 caracteres'
      expect(validarCampos(nome, email, mensagem)).toBe('E-mail inválido')
    })
    test('Validar Email inválido sem .', () => {
      const nome = 'nome'
      const email = 'teste@gmail'
      const mensagem = 'mensagem com mais de 10 caracteres'
      expect(validarCampos(nome, email, mensagem)).toBe('E-mail inválido')
    })
    test('Validar Mensagem menos que 10 caracteres', () => {
      const nome = 'rodrigo'
      const email = 'teste@gmail.br'
      const mensagem = 'msg'
      expect(validarCampos(nome, email, mensagem)).toBe('Mensagem com no mínimo 10 caracteres')
    })
    test('Validar todos os campos', () => {
      const nome = 'rodrigo'
      const email = 'rodrigo@einstein.br'
      const mensagem = 'mensagem grande'
      expect(validarCampos(nome, email, mensagem)).toBe(false)
    })
  })