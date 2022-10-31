const locators = require('../fixtures/locators.json')

describe('logout case', () => {
    it('visit gallery app, log in, wait 5 seconds and logout', () => {
        cy.visit('')
        cy.get(locators.header.loginButton).click()
        cy.get(locators.login.emailInput).type('jovan.jovanovic@gmail.com')
        cy.get(locators.login.passwordInput).type('jovan.jovanovic1')
        cy.get(locators.login.submitButton).click()
        cy.wait(5000)
        cy.get(locators.header.logoutButton).click()
    })
})