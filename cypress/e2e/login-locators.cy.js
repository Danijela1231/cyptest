const locators = require('../fixtures/locators.json')

describe('positive login case', () => {
    it('visit gallery app', () => {
      cy.visit('')
    })
  
    it('click login button', () => {
      cy.get(locators.header.loginButton).click()
    })
  
    it('fill in email input field', () => {
      cy.get(locators.login.emailInput).type('jovan.jovanovic@gmail.com')
    })
  
    it('fill in password input field', () => {
      cy.get(locators.login.passwordInput).type('jovan.jovanovic1')
    })
  
    it('click submit button', () => {
      cy.get(locators.login.submitButton).click()
    })
  })
  
  describe('negative login case', () => {
    beforeEach('visit gallery page and click login button', () => {
      cy.visit('')
      cy.get(locators.header.loginButton).click()
    })
  
    it('empty email field login', () => {
      cy.get(locators.login.emailInput).type('{backspace}')
      cy.get(locators.login.passwordInput).type('jovan.jovanovic1')
      cy.get(locators.login.submitButton).click() 
    })
  
    it('empty password field login', () => {
      cy.get(locators.login.emailInput).type('jovan.jovanovic@gmail.com')
      cy.get(locators.login.passwordInput).type('{backspace}')
      cy.get(locators.login.submitButton).click() 
    })
  
    it('bad credentials login', () => {
      cy.get(locators.login.emailInput).type('jovan.jovanov@gmail.com')
      cy.get(locators.login.passwordInput).type('mikazika123.')
      cy.get(locators.login.submitButton).click() 
    })
  
    it('invalid email login', () => {
      cy.get(locators.login.emailInput).type('jovan.jovanovgmail.com')
      cy.get(locators.login.passwordInput).type('mikazika123.')
      cy.get(locators.login.submitButton).click() 
    })
  
  })