// CAC-TAT.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test


/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
    beforeEach(function() {
        cy.visit('./src/index.html')
    })

    it('verifica o título da aplicação', function() {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })

    it.only('preenche os campos obrigatorios e envia o formulario', function(){
        cy.get('#firstName').type('Victor');
        cy.get('#lastName').type('Chaves');
        cy.get('#email').type('victor@gmail.com');
        cy.get('#open-text-area').type('Lorem ipsum');
        cy.get('button[type="submit"]').click();
        cy.get('.success').should('be.visible');
        
    })
  })