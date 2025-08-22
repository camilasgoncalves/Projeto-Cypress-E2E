export class Login{
    
    elementos = {
        lblEmail: () => cy.get('[data-qa="login-email"]'),
        lblPassword: () => cy.get('[data-qa="login-password"]'),
        lblLoginIncorrect: () => cy.contains('Your email or password is incorrect!'),
        btnLogin: () => cy.get('[data-qa="login-button"]')
    }

    login(){
        this.elementos.lblEmail().should('be.visible').type('camila.goncalves24@hotmail.com')
        this.elementos.lblPassword().type('camilaAuto1')
        this.elementos.btnLogin().click()
    }

    incorrectLogin(){
        this.elementos.lblEmail().should('be.visible').type('camila.goncalves24@hotmail.com')
        this.elementos.lblPassword().type('ffffffff')
        this.elementos.btnLogin().click()
    }


}
