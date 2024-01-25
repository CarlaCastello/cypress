///<reference types="cypress" />

import adicionar_carrinho_page from "../support/page/adicionar_carrinho_page"
import commun_page from "../support/page/commun_page"

describe ('Adicionar item ao carinho', () => {

    beforeEach ('Acessar Cadastro de usuario', () => {
        commun_page.acessarCadastroUsuario()
    })

    it('Selecionar shop', () => {
        adicionar_carrinho_page.selecionarShop()

})

    it('clicar na loja ', () => {

})
  
    it('Clicar primeito item da lista ', () => {

})

})