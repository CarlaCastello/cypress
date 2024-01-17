/// <reference types="cypress" />

 import { faker } from '@faker-js/faker';

import commun_page from '../support/page/commun_page'
import cadastro_page from '../support/page/cadastro_usuario_page'

describe ('Cadastro de usuario', () => {

    beforeEach ('Acessar Cadastro de usuario', () => {
        commun_page.acessarCadastroUsuario()
    })
    
    it('Campo nome vazio', () => {
        cadastro_page.cadastrarUsuario()
        cadastro_page.validarMensagemErro('O campo nome deve ser prenchido')

    })

    it('Campo email vazio', () => {
        cadastro_page.preencheNome(faker.person.fullName())
        cadastro_page.cadastrarUsuario()
        cadastro_page.validarMensagemErro('O campo e-mail deve ser prenchido corretamente')
    })

    it('Campo email invalido', () => {
        cadastro_page.preencheNome(faker.person.fullName())
        cadastro_page.preencheEmail(faker.person.firstName())
        cadastro_page.cadastrarUsuario()
        cadastro_page.validarMensagemErro('O campo e-mail deve ser prenchido corretamente')

    })

    it('Campo senha vazio', () => {
        cadastro_page.preencheNome(faker.person.fullName())
        cadastro_page.preencheEmail(faker.internet.email())
        cadastro_page.cadastrarUsuario()
        cadastro_page.validarMensagemErro('O campo senha deve ter pelo menos 6 dígitos')

    })

    it('Campo senha invalido', () => {
        cadastro_page.preencheNome(faker.person.fullName())
        cadastro_page.preencheEmail(faker.internet.email())
        cadastro_page.preencheSenha('1234')
        cadastro_page.cadastrarUsuario()
        cadastro_page.validarMensagemErro('O campo senha deve ter pelo menos 6 dígitos')

    })
  
     it('Cadastro com sucesso', async () => {

        const name = await faker.person.fullName()

        cadastro_page.preencheNome(name)
        cadastro_page.preencheEmail(faker.internet.email())
        cadastro_page.preencheSenha('123456')
        cadastro_page.cadastrarUsuario()
        cadastro_page.validarMensagemSucesso(name)


  })

})