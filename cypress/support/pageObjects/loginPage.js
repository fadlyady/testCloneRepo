class loginPage{
    getUsernameForm(){
        return cy.get('#username');
    }
    getPasswordForm(){
        return cy.get('#password');
    }
    getSubmitButton(){
        return cy.get('.mt-4 > .btn');
    }
    getLinkForgotPassword(){
        return cy.get('#forgot-password > .text-link');
    }

    getBtnGoogle(){
        return cy.get('.btn-deo-basic');
    }
}
export default loginPage