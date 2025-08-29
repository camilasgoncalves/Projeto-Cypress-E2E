import { Login } from "./loginPO"

export class Home {

    elementos = {

        btnSignIn: () => cy.contains('Signup / Login'),
        btnLogout: () => cy.contains('Logout'),
        btnContactUs: () => cy.contains('Contact us'), 
        btnProducts: () => cy.contains('Products'),
        btnCart: () => cy.contains('Cart'),
        btnTestCases: () => cy.contains('Test Cases'),
        btnAPITesting: () => cy.contains('API Testing'),

    }

    accessWebsite(){
        cy.visit('https://automationexercise.com/')
    }

    accessLogin(){
        this.elementos.btnSignIn().should('be.visible').click()
    }

    logout(){
        this.elementos.btnLogout().should('be.visible').click()
        this.elementos.btnSignIn().should('be.visible')
    }

    accessContactUs(){
        this.elementos.btnContactUs().should('be.visible').click()
    }

    accessProducts(){
        this.elementos.btnProducts().should('be.visible').click()
    }

     acessTestCases() {
        this.elementos.btnTestCases().click()
    }

    accessAPI() {
        this.elementos.btnAPITesting().should('be.visible').click()
    }
}