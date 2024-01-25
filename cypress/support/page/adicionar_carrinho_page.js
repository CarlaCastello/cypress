/// <reference types="cypress" />

export default {
    selecionarShop() {
      cy.get(':nth-child(4) > .offcanvas-toggle > .fa').click()
      cy.get('#menuShopText').click()
            // selecionar SHOP
        

       cy.get(':nth-child(2) > :nth-child(1) > .mobile-sub-menu > :nth-child(1) > a').click()  
          
      
    }
}