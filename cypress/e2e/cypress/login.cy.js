import { Login } from "../../cypress/pages/LoginPage";

describe('Fluxo de login', () => {

const login = new Login()

  it('deve logar com sucesso com credenciais válidas', () => {
    login.realizarLogin();
    cy.contains('Logged in as').should('be.visible');

  });
});