export class ApiTesting {

    elementos = {

        itmAPI1: () => cy.get('a[data-toggle="collapse"][href="#collapse1"]'),
        itmAPI2: () => cy.get('a[data-toggle="collapse"][href="#collapse2"]'),
        itmAPI3: () => cy.get('a[data-toggle="collapse"][href="#collapse3"]'),
        itmAPI4: () => cy.get('a[data-toggle="collapse"][href="#collapse4"]'),
        itmAPI5: () => cy.get('a[data-toggle="collapse"][href="#collapse5"]'),
        itmAPI6: () => cy.get('a[data-toggle="collapse"][href="#collapse6"]'),
        itmAPI7: () => cy.get('a[data-toggle="collapse"][href="#collapse7"]'),
        itmAPI8: () => cy.get('a[data-toggle="collapse"][href="#collapse8"]'),
        itmAPI9: () => cy.get('a[data-toggle="collapse"][href="#collapse9"]'),
        itmAPI10: () => cy.get('a[data-toggle="collapse"][href="#collapse10"]'),
        itmAPI11: () => cy.get('a[data-toggle="collapse"][href="#collapse11"]'),
        itmAPI12: () => cy.get('a[data-toggle="collapse"][href="#collapse12"]'),
        itmAPI13: () => cy.get('a[data-toggle="collapse"][href="#collapse13"]'),
        itmAPI14: () => cy.get('a[data-toggle="collapse"][href="#collapse14"]')

    }

    validateAPITesting(api) {
        switch (api) {
            case 'API 1':
                this.elementos.itmAPI1().should('be.visible').click()
                cy.contains('Response JSON: All products list').should('be.visible')
                break
            case 'API 2':
                this.elementos.itmAPI2().should('be.visible').click()
                cy.contains('Response Message: This request method is not supported.').should('be.visible')
                break
            case 'API 3':
                this.elementos.itmAPI3().should('be.visible').click()
                cy.contains('Response JSON: All brands list').should('be.visible')
                break
            case 'API 4':
                this.elementos.itmAPI4().should('be.visible').click()
                cy.contains('Response Message: This request method is not supported.').should('be.visible')
                break
            case 'API 5':
                this.elementos.itmAPI5().should('be.visible').click()
                cy.contains('Response JSON: Searched products list').should('be.visible')
                break
            case 'API 6':
                this.elementos.itmAPI6().should('be.visible').click()
                cy.contains('Response Message: Bad request, search_product parameter is missing in POST request.').should('be.visible')
                break
            case 'API 7':
                this.elementos.itmAPI7().should('be.visible').click()
                cy.contains('Response Message: User exists!').should('be.visible')
                break
            case 'API 8':
                this.elementos.itmAPI8().should('be.visible').click()
                cy.contains('Response Message: Bad request, email or password parameter is missing in POST request.').should('be.visible')
                break
            case 'API 9':
                this.elementos.itmAPI9().should('be.visible').click()
                cy.contains('Response Message: This request method is not supported.').should('be.visible')
                break
            case 'API 10':
                this.elementos.itmAPI10().should('be.visible').click()
                cy.contains('Response Message: User not found!').should('be.visible')
                break
            case 'API 11':
                this.elementos.itmAPI11().should('be.visible').click()
                cy.contains('Response Message: User created!').should('be.visible')
                break
            case 'API 12':
                this.elementos.itmAPI12().should('be.visible').click()
                cy.contains('Response Message: Account deleted!').should('be.visible')
                break
            case 'API 13':
                this.elementos.itmAPI13().should('be.visible').click()
                cy.contains('Response Message: User updated!').should('be.visible')
                break
            case 'API 14':
                this.elementos.itmAPI14().should('be.visible').click()
                cy.contains('Response JSON: User Detail').should('be.visible')
                break

        }
    }

}




