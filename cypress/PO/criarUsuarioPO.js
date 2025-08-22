export class CriarUsuario {

    gerarEmailAleatorio() {
        const timestamp = Date.now();
        return `camila_${timestamp}@teste.com`;
    }


    elementos = {
        btnSignIn: () => cy.contains('Signup / Login'),
        lblName: () => cy.get('[data-qa="signup-name"]'),
        lblEmail: () => cy.get('[data-qa="signup-email"]'),
        btnSignUp: () => cy.get('[data-qa="signup-button"]'),
        cbxGender: () => cy.get('#id_gender2'),
        lblPassword: () => cy.get('[data-qa="password"]'),
        ddlDay: () => cy.get('[data-qa="days"]'),
        ddlMonth: () => cy.get('[data-qa="months"]'),
        ddlYear: () => cy.get('[data-qa="years"]'),
        lblFirstName: () => cy.get('#first_name'),
        lblLastName: () => cy.get('#last_name'),
        lblAddress: () => cy.get('[data-qa="address"]'),
        ddlCountry: () => cy.get('[data-qa="country"]'),
        lblState: () => cy.get('[data-qa="state"]'),
        lblCity: () => cy.get('[data-qa="city"]'),
        lblZipcode: () => cy.get('[data-qa="zipcode"]'),
        lblMobileNumber: () => cy.get('#mobile_number'),
        btnCreateAccount: () => cy.get('[data-qa="create-account"]')
    }

    signUp() {
        const email = this.gerarEmailAleatorio()
        this.elementos.lblName().type('Camila')
        this.elementos.lblEmail().type(email)
        this.elementos.btnSignUp().click()
        this.elementos.cbxGender().check();
        this.elementos.lblPassword().type('camilaAuto1')
        this.elementos.ddlDay().select('24')
        this.elementos.ddlMonth().select('May')
        this.elementos.ddlYear().select('1999')
        this.elementos.lblFirstName().type('Camila');
        this.elementos.lblLastName().type('Goncalves');
        this.elementos.lblAddress().type('Sahara Ave');
        this.elementos.ddlCountry().select('United States')
        this.elementos.lblState().type('Nevada')
        this.elementos.lblCity().type('Las Vegas')
        this.elementos.lblZipcode().type('NV 89102');
        this.elementos.lblMobileNumber().type('+17027602598');
        this.elementos.btnCreateAccount().click()

        cy.url().should('include', '/account_created')
        cy.contains('Account Created!').should('be.visible')

    }

    invalidSignUp() {
        this.elementos.lblName().type('Camila')
        this.elementos.lblEmail().type('camila.goncalves24@hotmail.com')
        this.elementos.btnSignUp().click()
        cy.contains('Email Address already exist!').should('be.visible')
    }
}