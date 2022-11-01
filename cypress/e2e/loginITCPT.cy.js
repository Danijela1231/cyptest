import { loginPage } from '../page_objects/login'
import { navigation } from '../page_objects/navigation'

describe('login case', () => {
    beforeEach(() => {
        cy.visit('')
        cy.url('').should('include', 'gallery-app')
        navigation.clickLoginButton()
        cy.url('').should('include', '/login')
        loginPage.loginTitle.should('have.text', 'Please login')
    })

    it('negative case login / bad email', () => {
        loginPage.login('mikazika.com', 'jovan.jovanovic1')
    })

    it('negative case login / bad password', () => {
        loginPage.login('jovan.jovanovic@gmail.com', 'jovan.jov')
    })

    it('negative case bad credentials', () => {
        loginPage.login('hkhkhdksj.com', 'dfhjashfkas')
        loginPage.errorMessage.should('be.visible')
        loginPage.errorMessage.should('have.text', 'Bad Credentials')
        loginPage.errorMessage.should('have.css', 'background-color', 'rgb(248, 215, 218)')
    })



it.only('login with valid credentials', () => {
    cy.intercept('POST', 'https://gallery-api.vivifyideas.com/api/auth/login', (req) => {
    }).as('validlogin')
    loginPage.login('jovan.jovanovic@gmail.com', 'jovan.jovanovic1')
    navigation.loginButton.should('not.exist')
    navigation.clickLogoutButton()
    cy.wait('@validlogin').then((request) => {
        expect(request.response.statusCode).to.eq(200)
    })
})

})