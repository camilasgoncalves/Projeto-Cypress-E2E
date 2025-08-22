export class Cart {


    elementos = {

        lblCartWithItem: () => cy.get('#product-1'),
        lblCartWithoutItem: () => cy.contains('Cart is empty'),
        btnCartDelete: () => cy.get('a.cart_quantity_delete[data-product-id="1"]'),
        btnProceedToCheckout: () => cy.get('a.btn.btn-default.check_out'),
        lblComents: () => cy.get('textarea.form-control'),
        btnPlaceOrder: () => cy.get('a[href="/payment"]'),
        txtAdressDetails: () => cy.contains('Address Details'),
        lblNameOnCard: () => cy.get('[data-qa="name-on-card"]'),
        lblCardNumber: () => cy.get('[data-qa="card-number"]'),
        lblCVC: () => cy.get('[data-qa="cvc"]'),
        lblExpirationMM: () => cy.get('[data-qa="expiry-month"]'),
        lblExpirationYYYY: () => cy.get('[data-qa="expiry-year"]'),
        btnPayAndConfirmOrder: () => cy.get('#submit'),
        txtOrderPlaced: () => cy.contains('Order Placed!')

    }

    validateCartWithItens() {
        this.elementos.lblCartWithItem().should('be.visible')
    }

    validadeCartWithoutItens() {
        this.elementos.lblCartWithoutItem().should('be.visible')
    }

    placeOrder() {
        this.elementos.btnProceedToCheckout().click()
        this.elementos.txtAdressDetails().should('be.visible')
        this.elementos.lblComents().type('This is an automated test')
        this.elementos.btnPlaceOrder().click()
        this.elementos.lblNameOnCard().type('Camila')
        this.elementos.lblCardNumber().type('5545 6655 8987 6546')
        this.elementos.lblCVC().type('123')
        this.elementos.lblExpirationMM().type('06')
        this.elementos.lblExpirationYYYY().type('2032')
        this.elementos.btnPayAndConfirmOrder().click()
        this.elementos.txtOrderPlaced().should('be.visible')
    }

}