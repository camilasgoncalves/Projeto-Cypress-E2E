import { Products } from "../PO/produtosPO";
import { Login } from "../PO/loginPO";
import { Home } from "../PO/homePO";

describe('Fluxo de Compra', () =>{

    const login = new Login()
    const home = new Home()
    const products = new Products()
    const cart = new Cart()


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

    it('Aumentar quantidade de itens para compra', () =>{
        login.realizarLogin()
        home.validarBtnProducts()
        cart.validarQuantidade()
    })

} )