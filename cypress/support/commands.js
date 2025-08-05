Cypress.Commands.add('login', (usuario, senha) => {
  cy.get('#usuario').type(usuario);
  cy.get('#senha').type(senha);
  cy.get('#login').click();
});