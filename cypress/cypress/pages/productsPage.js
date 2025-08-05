export class Products{

elementos={

lblSearch: () => cy.get('#search_product'),
btnSearch: () => cy.get('#submit_search'),
btnProduct1: () => cy.get('a[href="/product_details/1"]'),
btnProduct2: () => cy.get('a[href="/product_details/2"]'),
btnAddCart: () => cy.get('button.btn.btn-default.cart'),
btnViewCart: () => cy.contains('View Cart'),
btnCheckout: () => cy.get('.btn.check_out'),
btnDelete: () => cy.get('a.cart_quantity_delete[data-product-id="1"]')

}

addProductCart(){
    this.elementos.btnProduct1().should('be.visible').click()
    this.elementos.btnAddCart().should('be.visible').click()
    this.elementos.btnViewCart().should('be.visible').click()
    this.elementos.btnCheckout().should('be.visible').click()
}

    deleteProductCart(){
        this.elementos.btnProduct1().should('be.visible').click()
        this.elementos.btnAddCart().should('be.visible').click()
        this.elementos.btnViewCart().should('be.visible').click()
        this.elementos.btnDelete().should('be.visible').click()

    }
}