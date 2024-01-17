/// <reference types="cypress" />

   export default {
    acessarCadastroUsuario() {
        cy.visit('/')
           .get('#top_header')

        cy.get('.fa-lock') // clicar em cadastro
          .click()
      
    } ,

     clicarLogin() {
      cy.visit('/')
        .get('#top_header')
        
      cy.get('.fa-user') //clicar login
         .click()

      }
      

    }
   