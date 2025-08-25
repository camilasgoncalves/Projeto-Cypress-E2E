import { Compras } from "../PO/comprasPO";
import { Home } from "../PO/homePO";
import { Cart } from "./carrinho.cy";
import { Login } from "../PO/loginPO";

describe('Fluxos de Compras', () => {

    const compras = new Compras()
    const home = new Home()
    const cart = new Cart()
    const login = new Login()

    it('Adiciona Produtos ao carrinho', () => {
        home.accessWebsite()
        home.accessProducts()
        compras.addProductsToCart()
        cart.validateCartWithItens()
    })

    it('Adiciona Produtos ao carrinho e altera a quantidade', () => {
        home.accessWebsite()
        home.accessProducts()
        compras.changeQuantity()
        cart.validateCartWithItens()
    })

    it('Deleta itens do carrinho', () => {
        home.accessWebsite()
        home.accessProducts()
        compras.addProductsToCart()
        cart.deleteItemCart()
    })

    // it('Escreve uma review', () => {
    //     home.accessWebsite()
    //     home.accessProducts()
    //     compras.writeYourReview()
    // })

    //  it('Adiciona e-mail para recebimento de updates', () => {
    //     home.accessWebsite()
    //     home.accessProducts()
    //     compras.subscription()
    // })

    it('Realiza uma compra', () => {
        home.accessWebsite()
        home.accessLogin()
        login.login()
        home.accessProducts()
        compras.purchaseAnItem()
        cart.validateCartWithItens()
        cart.placeOrder()
    })

    it('Pesquisa produtos e valida resultado', () => {
        home.accessWebsite()
        home.accessProducts()
        compras.searchItem()
    })
})