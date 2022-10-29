describe('logout case', () => {
    it('visit gallery app, log in, wait 5 seconds and logout', () => {
        cy.visit('')
        cy.get('a[href="/login"]').click()
        cy.get('input[id="email"]').type('jovan.jovanovic@gmail.com')
        cy.get('input[id="password"]').type('jovan.jovanovic1')
        cy.get('button[type="submit"]').click()
        cy.wait(5000)
        cy.get('a[role="button "]')
    })
})