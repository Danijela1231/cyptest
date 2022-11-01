import { navigation } from'../page_objects/navigation.js'

describe('create gallery case', () => {
    before(() => {
        cy.loginThroughBackend('jovan.jovanovic@gmail.com', 'jovan.jovanovic1')
    })

    it('visit gallery page', () => {
        cy.visit('')
        navigation.loginButton.should('not.exist')
    })
})