/// <reference types="cypress"/>

describe('Show Dashboard', () => {
    beforeEach(() => {
        cy.loginViaAPI();
})
    it('To Url Dashboard', function() {
        cy.visit('/features/dashboard')
      })
})
