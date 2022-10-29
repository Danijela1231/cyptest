const locators = require('../fixtures/locators.json')

describe('positive login case', () => {
    it('visit gallery app', () => {
      cy.visit('')
    })
  
    it('click login button', () => {
      cy.get('a[href="/login"]').click()
    })
  
    it('fill in email input field', () => {
      cy.get("input[id='email']").type('jovan.jovanovic@gmail.com')
    })
  
    it('fill in password input field', () => {
      cy.get("input[id='password']").type('jovan.jovanovic1')
    })
  
    it('click submit button', () => {
      cy.get("button[type='submit']").click()
    })
  })
  
  describe('negative login case', () => {
    beforeEach('visit gallery page and click login button', () => {
      cy.visit('')
      cy.get('a[href="/login"]').click()
    })
  
    it('empty email field login', () => {
      cy.get("input[id='email']").type('{backspace}')
      cy.get("input[id='password']").type('jovan.jovanovic1')
      cy.get("button[type='submit']").click() 
    })
  
    it('empty password field login', () => {
      cy.get("input[id='email']").type('jovan.jovanovic@gmail.com')
      cy.get("input[id='password']").type('{backspace}')
      cy.get("button[type='submit']").click() 
    })
  
    it('bad credentials login', () => {
      cy.get("input[id='email']").type('jovan.jovanov@gmail.com')
      cy.get("input[id='password']").type('mikazika123.')
      cy.get("button[type='submit']").click() 
    })
  
    it('invalid email login', () => {
      cy.get("input[id='email']").type('jovan.jovanovgmail.com')
      cy.get("input[id='password']").type('mikazika123.')
      cy.get("button[type='submit']").click() 
    })
  
  })