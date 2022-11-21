const {validarCampos} = require('./funçoes')

describe('validarCampos testes', () => {
    test('Validar Nome vazio', () => {
      const nome = ''
      const email = 'email@valido.com'
      const mensagem = 'mensagem com mais de 10 caracteres'
      expect(validarCampos(nome, email, mensagem)).toBe('block-nome')
    })
    test('Validar Email inválido sem @', () => {
      const nome = 'nome'
      const email = 'teste.com'
      const mensagem = 'mensagem com mais de 10 caracteres'
      expect(validarCampos(nome, email, mensagem)).toBe('block-email')
    })
    test('Validar Email inválido sem .', () => {
      const nome = 'nome'
      const email = 'teste@gmail'
      const mensagem = 'mensagem com mais de 10 caracteres'
      expect(validarCampos(nome, email, mensagem)).toBe('block-email')
    })
    test('Validar Mensagem menos que 10 caracteres', () => {
      const nome = 'nome'
      const email = 'teste@gmail.br'
      const mensagem = 'msg'
      expect(validarCampos(nome, email, mensagem)).toBe('block-mensagem')
    })
    test('Validar todos os campos', () => {
      const nome = 'nome'
      const email = 'teste@gmail.br'
      const mensagem = 'mensagem grande'
      expect(validarCampos(nome, email, mensagem)).toBe(false)
    })
  })

  