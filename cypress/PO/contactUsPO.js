export class ContactUs{

    gerarEmailAleatorio() {
        const timestamp = Date.now();
        return `camila_${timestamp}@teste.com`;
    }

    elementos = {
        
        lblGetInTouch: () => cy.contains('Get In Touch'),
        lblName: () => cy.get('[data-qa="name"]'),
        lblEmail: () => cy.get('[data-qa="email"]'),
        lblSubject: () => cy.get('[data-qa="subject"]'),
        lblYourMessageHere: () => cy.get('[data-qa="message"]'),
        btnSubmit: () => cy.get('[data-qa="submit-button"]')

    }

    formContactUs(){
        const email = this.gerarEmailAleatorio()
        this.elementos.lblName().type('Camila')
        this.elementos.lblEmail().type(email)
        this.elementos.lblSubject().type('Test Automation')
        this.elementos.lblYourMessageHere('This is an automated test')
        this.elementos.btnSubmit().click()
    }

}