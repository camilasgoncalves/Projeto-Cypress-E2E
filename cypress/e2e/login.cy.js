import { Login } from "../PO/loginPO";
import { Home } from "../PO/homePO";

describe('Fluxos de Login', () => {

    const login = new Login()
    const home = new Home()

    it('Realizar Login', () => {
        home.accessWebsite()
        home.accessLogin()
        login.login()
        cy.contains('Logged in as').should('be.visible')
    })

    it('Deve logar com as credenciais incorretas', () => {
        home.accessWebsite()
        home.accessLogin()
        login.incorrectLogin()
    })

    it('Logout', () => {
        home.accessWebsite()
        home.accessLogin()
        login.login()
        home.logout()

    })
})