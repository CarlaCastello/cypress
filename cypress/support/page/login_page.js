/// <reference types = "cypress" />

export default {
    loginEmail(){
       cy.get('#btnLogin')
         .click()
},

validarMensagemErro(mensagem) {
    cy.get('.invalid_input')
       .should('be.visible')
       .should('have.text', mensagem)
  },

  emailInvalido(){
    cy.get('#user')
      .type('emailInvalido')

    },

  emailValido(email){
    cy.get('#user')
      .type(email)

  },

  senha(senha){
    cy.get('#password')
      .type(senha)
  },

  validarMensagemSucesso(nome) {
    cy.get('#swal2-title')
       .should('be.visible')
       .should('have.text', 'Login realizado')

    //cy.get('#swal2-html-container')
      // .should('be.visible')
      // .should('have.text', `Olá, ${nome}`)
  }
  
}


