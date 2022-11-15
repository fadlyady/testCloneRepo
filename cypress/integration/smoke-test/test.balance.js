/// <reference types="cypress"/>

import balancePage from "../../support/pageObjects/pageBalance";

// let datatest;
beforeEach(() => {
    cy.loginViaAPI();
    cy.visit('/features/balance/balance');
    // cy.fixture('user/dataDepartment').then(function(Tdata) {
    //     datatest=Tdata;
    // });
});

describe('Test Page Balance',() => {
    it('Positive - Validate Balance Page',() => {
        const balance = new balancePage();
        balance.getHeader().should('contain','Balance');
        balance.getWidgetAll().should('be.visible');
        balance.getWidgetPending().should('be.visible');
        balance.getWidgetWithdraw().should('be.visible');
        balance.getWidgetProcess().should('be.visible');
    });
});