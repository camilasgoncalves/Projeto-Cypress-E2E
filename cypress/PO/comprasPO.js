export class Compras {

    gerarEmailAleatorio() {
        const timestamp = Date.now();
        return `camila_${timestamp}@teste.com`;
    }

    elementos = {

        lblSearchProduct: () => cy.get('#search_product'),
        btnWomen: () => cy.get('a[href="#Women"]'),
        btnDress: () => cy.get('a[href="/category_products/1"]'),
        btnTops: () => cy.get('a[href="/category_products/2"]'),
        btnSaree: () => cy.get('a[href="/category_products/7"]'),
        btnMen: () => cy.get('a[href="#Men"]'),
        btnTshirts: () => cy.get('a[href="/category_products/3"]'),
        btnJeans: () => cy.get('a[href="/category_products/6"]'),
        btnKids: () => cy.get('a[href="#Kids"]'),
        btnDressKids: () => cy.get('a[href="/category_products/4"]'),
        btnTopseShirts: () => cy.get('a[href="/category_products/5"]'),
        btnPolo: () => cy.get('a[href="/brand_products/Polo"]'),
        btnHeM: () => cy.get('a[href="/brand_products/H&M"]'),
        btnMadame: () => cy.get('a[href="/brand_products/Madame"]'),
        btnMasteHarbour: () => cy.get('a[href="/brand_products/Mast & Harbour"]'),
        btnBabyhug: () => cy.get('a[href="/brand_products/Babyhug"]'),
        btnAllenSollyJunior: () => cy.get('a[href="/brand_products/Allen Solly Junior"]'),
        btnKookieKids: () => cy.get('a[href="/brand_products/Kookie Kids"]'),
        btnBiba: () => cy.get('a[href="/brand_products/Biba"]'),
        btnViewProduct: () => cy.get('a[href="/product_details/1"]'),
        btnAddtoCart: () => cy.get('button.cart'),
        btnViewCart: () => cy.contains('View Cart'),
        lblYourName: () => cy.get('input[placeholder="Your Name"]'),
        lblEmailAdress: () => cy.get('input[placeholder="Email Address"]'),
        lblAddReviewHere: () => cy.get('#review'),
        btnSubmit: () => cy.get('#button-review'),
        lblYourEmailAdress: () => cy.get('#susbscribe_email'),
        btnSubscribe: () => cy.get('#subscribe.btn.btn-default'),
        lblSubscribe: () => cy.contains('You have been successfully subscribed!'),
        inputQuantity: () => cy.get('#quantity'),
        inpSearch: () => cy.get('#search_product'),
        btnSearch: () => cy.get('#submit_search')

    }

    addProductsToCart() {
        this.elementos.btnViewProduct().click()
        this.elementos.btnAddtoCart().click()
        this.elementos.btnViewCart().click()
    }

    writeYourReview() {
        const email = this.gerarEmailAleatorio()
        this.elementos.lblYourName().should('be.visible').type('Camila')
        this.elementos.lblEmailAdress(email)
        this.elementos.lblAddReviewHere().type('This is an automated test')
        this.elementos.btnSubmit().click()
    }

    subscription() {
        const email = this.gerarEmailAleatorio()
        this.elementos.lblYourEmailAdress().type(email)
        this.elementos.btnSubscribe().click
        this.elementos.lblSubscribe({ timeout: 6000 }).should('be.visible')
    }

    changeQuantity() {
        this.elementos.btnViewProduct().click()
        this.elementos.inputQuantity().type('3')
        this.elementos.btnAddtoCart().click()
        this.elementos.btnViewCart().click()
    }

    purchaseAnItem() {
        this.elementos.btnViewProduct().click()
        this.elementos.btnAddtoCart().click()
        this.elementos.btnViewCart().click()
    }

    searchItem() {
        this.elementos.inpSearch().type('frozen')
        this.elementos.btnSearch().click()
        cy.get('.single-products')
            .should('contain.text', 'Frozen')

    }
}