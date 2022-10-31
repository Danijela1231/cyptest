/// <reference types="Cypress" />

import { not } from 'check-more-types'
import { loginPage } from '../page_objects/login.js'
import { navigation } from '../page_objects/navigation.js'
const faker = require('faker')


describe('positive login case', () => {
    it('visit gallery app', () => {
      cy.visit('')
      cy.url().should('include', 'gallery-app')
    })
  
    it('click login button', () => {
      navigation.clickLoginButton()
      cy.url().should('include', '/login')
    })
  
    it('fill in email and password input field', () => {
      loginPage.login('jovan.jovanovic@gmail.com', 'jovan.jovanovic1')
    })
  
    it('click submit button', () => {
      navigation.clickSubmitButton()
    })
  })
  
  describe('negative login case', () => {
    beforeEach('visit gallery page and click login button', () => {
      cy.visit('')
      navigation.clickLoginButton()
      loginPage.loginTitle.should('have.text', 'Please login')
    })
  
    it('empty email field login', () => {
      loginPage.login('{backspace}', 'jovan.jovanovic1')
      navigation.clickSubmitButton()
    })
  
    it('empty password field login', () => {
      loginPage.login('jovan.jovanovic@gmail.com', '{backspace}')
      navigation.clickSubmitButton()
    })
  
    it('bad credentials login', () => {
      loginPage.login(faker.internet.email(), faker.internet.password())
      navigation.clickSubmitButton()
      loginPage.errorMessage.should('be.visible')
      loginPage.errorMessage.should('have.text', 'Bad Credentials')
      loginPage.errorMessage.should('have.css', 'background-color', 'rgb(248, 215, 218)')
    })
  
    it('invalid email login', () => {
      loginPage.login('mikazika.com', 'jovan.jovanovic1')
      navigation.clickSubmitButton() 
      
    })
  
  })