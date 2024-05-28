/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject>{
        
        /**
         * Seleciona um elemento com base no atributo data-qa-selector
         * @example
         * cy.getElement('seletor-página')
         */
        getElement(seletor: string): Chainable<any>;
        
    }
}