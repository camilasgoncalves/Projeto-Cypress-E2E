export class Home{

    elementos={

        btnProducts: () => cy.contains('a', 'Products'),

    }

    validarBtnProducts(){
        this.elementos.btnProducts().should('be.visible').click()
    }
}