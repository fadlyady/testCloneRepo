class balancePage {
    // Balance Page
    getHeader() {
        return cy.get('.col-auto.col-lg-auto.d-flex.flex-row.order-0.px-0');
    }

    getWidgetAll() {
        return cy.get('.pl-4.pt-4.row > div:nth-of-type(1)');
    }

    getWidgetPending() {
        return cy.get('.pl-4.pt-4.row > div:nth-of-type(2)');
    }

    getWidgetWithdraw() {
        return cy.get('.pl-4.pt-4.row > div:nth-of-type(3)');
    }

    getWidgetProcess() {
        return cy.get('.pl-4.pt-4.row > div:nth-of-type(4)');
    }
}

export default balancePage