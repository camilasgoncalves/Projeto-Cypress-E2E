import { Products } from "../../cypress/pages/productsPage";
import { Login } from "../../cypress/pages/LoginPage";
import { Home } from "../../cypress/pages/homePage";

describe('Fluxo de Compra', () =>{

    const login = new Login()
    const home = new Home()
    const products = new Products()


    it('Adição de item ao carrinho e Checkout', () =>{
        login.realizarLogin()
        home.validarBtnProducts()
        products.addProductCart()

        cy.get('h2.heading').should('be.visible');
    })

    it('Deleta item do carrinho', () =>{
        login.realizarLogin()
        home.validarBtnProducts()
        products.deleteProductCart()

        cy.contains('Cart is empty!').should('be.visible');
    })

    
} )

