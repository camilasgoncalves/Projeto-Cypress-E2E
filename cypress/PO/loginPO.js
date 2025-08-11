export class Login{

    elementos={
        btnSignIn: () =>    cy.contains('Signup / Login'),
        lblEmail: () =>     cy.get('[data-qa="login-email"]'),
        lblPassword: () =>  cy.get('[data-qa="login-password"]'),
        btnLogin: () =>     cy.get('[data-qa="login-button"]')
    }


realizarLogin(){
    
        cy.visit('https://automationexercise.com/');
        this.elementos.btnSignIn().should('be.visible').click()
        this.elementos.lblEmail().should('be.visible').type('camila.goncalves24@hotmail.com')
        this.elementos.lblPassword().type('camilaAuto1')
        this.elementos.btnLogin().click()
}

}