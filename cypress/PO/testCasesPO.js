export class TestCases {

    elementos = {

        itmTestCase1: () => cy.get('a[data-toggle="collapse"][href="#collapse1"]'),
        itmTestCase2: () => cy.get('a[data-toggle="collapse"][href="#collapse2"]'),
        itmTestCase3: () => cy.get('a[data-toggle="collapse"][href="#collapse3"]'),
        itmTestCase4: () => cy.get('a[data-toggle="collapse"][href="#collapse4"]'),
        itmTestCase5: () => cy.get('a[data-toggle="collapse"][href="#collapse5"]'),
        itmTestCase6: () => cy.get('a[data-toggle="collapse"][href="#collapse6"]'),
        itmTestCase7: () => cy.get('a[data-toggle="collapse"][href="#collapse7"]'),
        itmTestCase8: () => cy.get('a[data-toggle="collapse"][href="#collapse8"]'),
        itmTestCase9: () => cy.get('a[data-toggle="collapse"][href="#collapse9"]'),
        itmTestCase10: () => cy.get('a[data-toggle="collapse"][href="#collapse10"]'),
        itmTestCase11: () => cy.get('a[data-toggle="collapse"][href="#collapse11"]'),
        itmTestCase12: () => cy.get('a[data-toggle="collapse"][href="#collapse12"]'),
        itmTestCase13: () => cy.get('a[data-toggle="collapse"][href="#collapse13"]'),
        itmTestCase14: () => cy.get('a[data-toggle="collapse"][href="#collapse14"]'),
        itmTestCase15: () => cy.get('a[data-toggle="collapse"][href="#collapse15"]'),
        itmTestCase16: () => cy.get('a[data-toggle="collapse"][href="#collapse16"]'),
        itmTestCase17: () => cy.get('a[data-toggle="collapse"][href="#collapse17"]'),
        itmTestCase18: () => cy.get('a[data-toggle="collapse"][href="#collapse18"]'),
        itmTestCase19: () => cy.get('a[data-toggle="collapse"][href="#collapse19"]'),
        itmTestCase20: () => cy.get('a[data-toggle="collapse"][href="#collapse20"]'),
        itmTestCase21: () => cy.get('a[data-toggle="collapse"][href="#collapse21"]'),
        itmTestCase22: () => cy.get('a[data-toggle="collapse"][href="#collapse22"]'),
        itmTestCase23: () => cy.get('a[data-toggle="collapse"][href="#collapse23"]'),
        itmTestCase24: () => cy.get('a[data-toggle="collapse"][href="#collapse24"]'),
        itmTestCase25: () => cy.get('a[data-toggle="collapse"][href="#collapse25"]'),
        itmTestCase26: () => cy.get('a[data-toggle="collapse"][href="#collapse26"]'),
        btnTestCases: () => cy.contains('Test Cases')
    }

    validateTestCases() {
        this.elementos.itmTestCase1().should('be.visible').click()
        cy.contains('12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number').should('be.visible')
        this.elementos.itmTestCase2().should('be.visible').click()
        cy.contains('6. Enter correct email address and password').should('be.visible')
        this.elementos.itmTestCase3().should('be.visible').click()
        cy.contains('6. Enter incorrect email address and password').should('be.visible')
        this.elementos.itmTestCase4().should('be.visible').click()
        cy.contains('10. Verify that user is navigated to login page').should('be.visible')
        this.elementos.itmTestCase5().should('be.visible').click()
        cy.contains('6. Enter name and already registered email address').should('be.visible')
        this.elementos.itmTestCase6().should('be.visible').click()
        cy.contains('9. Click OK button').should('be.visible')
        this.elementos.itmTestCase7().should('be.visible').click()
        cy.contains('5. Verify user is navigated to test cases page successfully').should('be.visible')
        this.elementos.itmTestCase8().should('be.visible').click()
        cy.contains('5. Verify user is navigated to ALL PRODUCTS page successfully').should('be.visible')
        this.elementos.itmTestCase9().should('be.visible').click()
        cy.contains('6. Enter product name in search input and click search button').should('be.visible')
        this.elementos.itmTestCase10().should('be.visible').click()
        cy.contains('6. Enter email address in input and click arrow button').should('be.visible')
        this.elementos.itmTestCase11().should('be.visible').click()
        cy.contains('7. Enter email address in input and click arrow button').should('be.visible')
        this.elementos.itmTestCase12().should('be.visible').click()
        cy.contains('9. Verify both products are added to Cart').should('be.visible')
        this.elementos.itmTestCase13().should('be.visible').click()
        cy.contains('9. Verify that product is displayed in cart page with exact quantity').should('be.visible')
        this.elementos.itmTestCase14().should('be.visible').click()
        cy.contains('14. Verify Address Details and Review Your Order').should('be.visible')
        this.elementos.itmTestCase15().should('be.visible').click()
        cy.contains('12. Verify Address Details and Review Your Order').should('be.visible')
        this.elementos.itmTestCase16().should('be.visible').click()
        cy.contains('13. Enter payment details: Name on Card, Card Number, CVC, Expiration date').should('be.visible')
        this.elementos.itmTestCase17().should('be.visible').click()
        cy.contains('8. Verify that product is removed from the cart').should('be.visible')
        this.elementos.itmTestCase18().should('be.visible').click()
        cy.contains('8. Verify that user is navigated to that category page').should('be.visible')
        this.elementos.itmTestCase19().should('be.visible').click()
        cy.contains('8. Verify that user is navigated to that brand page and can see products').should('be.visible')
        this.elementos.itmTestCase20().should('be.visible').click()
        cy.contains('11. Again, go to Cart page').should('be.visible')
        this.elementos.itmTestCase21().should('be.visible').click()
        cy.contains('7. Enter name, email and review').should('be.visible')
        this.elementos.itmTestCase22().should('be.visible').click()
        cy.contains('7. Verify that product is displayed in cart page').should('be.visible')
        this.elementos.itmTestCase23().should('be.visible').click()
        cy.contains('13. Verify that the billing address is same address filled at the time registration of account').should('be.visible')
        this.elementos.itmTestCase24().should('be.visible').click()
        cy.contains('16. Enter payment details: Name on Card, Card Number, CVC, Expiration date').should('be.visible')
        this.elementos.itmTestCase25().should('be.visible').click()
        cy.contains('6. Click on arrow at bottom right side to move upward').should('be.visible')
        this.elementos.itmTestCase26().should('be.visible').click()
        cy.contains('6. Scroll up page to top').should('be.visible')

    }

}