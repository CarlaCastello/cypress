///<reference types = "cypress" />

import { faker } from '@faker-js/faker';

import commun_page from '../support/page/commun_page'
import login_page from '../support/page/login_page'

describe('Login', () => {

  beforeEach('Acessar Login', () => {
    commun_page.clicarLogin()
  }) 
 
  it('Campo email vazio', () => {
    login_page.loginEmail()
    login_page.validarMensagemErro('E-mail inválido.')
    
 })

 it('Campo email invalido', () => {
    login_page.emailInvalido()
    login_page.loginEmail()
    login_page.validarMensagemErro('E-mail inválido.')
    
 })

 it('Campo senha vazio ', () => {
    login_page.emailValido(faker.internet.email())
    login_page.loginEmail()
    login_page.validarMensagemErro('Senha inválida.')

 })

 it('Campo senha invalido', () => {
    login_page.emailValido(faker.internet.email())
    login_page.senha('123')
    login_page.loginEmail()
    login_page.validarMensagemErro('Senha inválida.')

 })

 it('Login com sucesso', () => {

  login_page.emailValido(faker.internet.email())
  login_page.senha('123456')
  login_page.loginEmail()
  login_page.validarMensagemSucesso()

 })
})

