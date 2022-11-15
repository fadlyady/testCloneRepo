/// <reference types="cypress"/>

import loginPage from '../../support/pageObjects/loginPage';

describe('Login Test', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.fixture('example').then(function(data)
    {
        this.data=data;
    })
  })

  xit('Login Test Valid', function() {
    const login=new loginPage();
    login.getUsernameForm().clear().type(Cypress.env('username'));
    login.getPasswordForm().clear().type(Cypress.env('password'));
    login.getSubmitButton().click();
  })

  it('Login Google', function() {
    const login=new loginPage();
    // login.getUsernameForm().clear().type(Cypress.env('username'));
    // login.getPasswordForm().clear().type(Cypress.env('password'));
    // login.getSubmitButton().click();
    login.getBtnGoogle().click();
    cy.visit('https://accounts.google.com/o/oauth2/auth/identifier?redirect_uri=storagerelay%3A%2F%2Fhttps%2Fnx-portal-web-development.shipdeo.com%3Fid%3Dauth337360&response_type=permission%20id_token&scope=email%20profile%20openid&openid.realm&include_granted_scopes=true&client_id=1028708956121-lho7gl5nggusn5q53asre6i0j722sqe8.apps.googleusercontent.com&ss_domain=https%3A%2F%2Fnx-portal-web-development.shipdeo.com&prompt&fetch_basic_profile=true&gsiwebsdk=2&flowName=GeneralOAuthFlow');
  })

})