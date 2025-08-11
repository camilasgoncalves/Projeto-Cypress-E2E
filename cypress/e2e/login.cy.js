import { Login } from "../PO/loginPO";

describe('Fluxo de login', () => {

const login = new Login()

  it('deve logar com sucesso com credenciais válidas', () => {
    login.realizarLogin()
    cy.contains('Logged in as').should('be.visible')

  })
})