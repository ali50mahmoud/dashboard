// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************
/// <reference types="Cypress" />
// Import commands.js using ES2015 syntax:
import './commands'
before(() => {

    Cypress.on('uncaught:exception', (err, runnable) => {
       return false;
    })
 })
beforeEach(() => {
    cy.viewport(1280, 720)
}) 
after(() => {
    cy.exec('npx cucumber-json-merge -d cypress/cucumber-json/', { failOnNonZeroExit: false })
      .then((result) => {
        // Print exit code
        console.log('Exit code:', result.code);
      });
  });



// Alternatively you can use CommonJS syntax:
// require('./commands')