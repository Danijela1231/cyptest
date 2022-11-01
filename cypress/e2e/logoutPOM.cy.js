import { loginPage } from '../page_objects/login.js'
import { navigation } from'../page_objects/navigation.js'

describe('logout case', () => {
    it('visit gallery app, log in, wait 5 seconds and logout', () => {
        cy.visit('')
        navigation.clickLoginButton()
        loginPage.login('jovan.jovanovic@gmail.com', 'jovan.jovanovic1')
        navigation.clickSubmitButton()
        cy.wait(5000)
        navigation.loginButton.should('not.exist')
    })
    it('logout', () => {
        cy.wait(5000)
        navigation.clickLogoutButton()
        navigation.logoutButton.should('not.exist')
    })
})