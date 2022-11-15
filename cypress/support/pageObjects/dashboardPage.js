class dashboardPage{
    getLinkProfile(){
        return cy.get('.username');
    }
    getLinkSignOut(){
        return cy.get('.ant-dropdown-menu-title-content');
    }
    getHeader(){
        return cy.get('.d-flex > .title');
    }
}
export default dashboardPage