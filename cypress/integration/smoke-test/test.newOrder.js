/// <reference types="cypress"/>

import newPageOrder from '../../support/pageObjects/newPageOrder';
import ordernoncod from '../../support/pageObjects/pageOrderNonCod';

// let datatest;

beforeEach(() => {
    cy.loginViaAPI();
    cy.visit('/features/shipment-order');
    // cy.fixture('order/dataOrderNonCOD').then(function(Tdata) {
    //     datatest=Tdata;
    // });
});

describe('Filter Order by Status',() => {
    it('Cek Filter by Status Entry',() => {
        const neworder = new newPageOrder();
        cy.wait(1000);
        neworder.getFieldStatus().click();
        neworder.getStatusEntry().click();
        neworder.getFieldStatus().should('contain','Entry');
        cy.wait(1000);
        neworder.getFieldStatus().click();
        neworder.getStatusEntry().should('not.be.enabled');
        neworder.getSectionFilter().should('be.visible').should('contain.text','ENTRY');
        neworder.getTableData().should('not.contain','Confirmed');
        neworder.getTableData().should('not.contain','Picked');
        neworder.getTableData().should('not.contain','On Progress');
        neworder.getTableData().should('not.contain','Delivered');
        neworder.getTableData().should('not.contain','Cancel Request');
        neworder.getTableData().should('not.contain','Cancelled');
        neworder.getTableData().should('not.contain','Other');
        neworder.getTableData().should('not.contain','On Hold');
        neworder.getTableData().should('not.contain','Problem');
        neworder.getTableData().should('not.contain','Returned');
        neworder.getTableData().should('not.contain','Lost Broken');
        neworder.getTableData().should('not.contain','Confirm Cancelled');
        neworder.getTableData().should('not.contain','Returning');
        neworder.getTableData().should('not.contain','Confirm Problem');
        neworder.getTableData().should('not.contain','Waiting For Confirmation');
    });

    it('Cek Filter by Status Confirmed',() => {
        const neworder = new newPageOrder();
        cy.wait(1000);
        neworder.getFieldStatus().click();
        neworder.getStatusConfirmed().click();
        neworder.getFieldStatus().should('contain','Confirmed');
        cy.wait(1000);
        neworder.getFieldStatus().click();
        neworder.getStatusConfirmed().should('not.be.enabled');
        neworder.getSectionFilter().should('be.visible').should('contain.text','CONFIRMED');
        neworder.getTableData().should('not.contain','Entry');
        neworder.getTableData().should('not.contain','Picked');
        neworder.getTableData().should('not.contain','On Progress');
        neworder.getTableData().should('not.contain','Delivered');
        neworder.getTableData().should('not.contain','Cancel Request');
        neworder.getTableData().should('not.contain','Cancelled');
        neworder.getTableData().should('not.contain','Other');
        neworder.getTableData().should('not.contain','On Hold');
        neworder.getTableData().should('not.contain','Problem');
        neworder.getTableData().should('not.contain','Returned');
        neworder.getTableData().should('not.contain','Lost Broken');
        neworder.getTableData().should('not.contain','Confirm Cancelled');
        neworder.getTableData().should('not.contain','Returning');
        neworder.getTableData().should('not.contain','Confirm Problem');
        neworder.getTableData().should('not.contain','Waiting For Confirmation');
    });

    it('Cek Filter by Status Picked',() => {
        const neworder = new newPageOrder();
        cy.wait(1000);
        neworder.getFieldStatus().click();
        neworder.getStatusPicked().click();
        neworder.getFieldStatus().should('contain','Picked');
        cy.wait(1000);
        neworder.getFieldStatus().click();
        neworder.getStatusPicked().should('not.be.enabled');
        neworder.getSectionFilter().should('be.visible').should('contain.text','PICKED');
        neworder.getTableData().should('not.contain','Entry');
        neworder.getTableData().should('not.contain','Confirmed');
        neworder.getTableData().should('not.contain','On Progress');
        neworder.getTableData().should('not.contain','Delivered');
        neworder.getTableData().should('not.contain','Cancel Request');
        neworder.getTableData().should('not.contain','Cancelled');
        neworder.getTableData().should('not.contain','Other');
        neworder.getTableData().should('not.contain','On Hold');
        neworder.getTableData().should('not.contain','Problem');
        neworder.getTableData().should('not.contain','Returned');
        neworder.getTableData().should('not.contain','Lost Broken');
        neworder.getTableData().should('not.contain','Confirm Cancelled');
        neworder.getTableData().should('not.contain','Returning');
        neworder.getTableData().should('not.contain','Confirm Problem');
        neworder.getTableData().should('not.contain','Waiting For Confirmation');
    });

    it('Cek Filter by Status On Progress',() => {
        const neworder = new newPageOrder();
        cy.wait(1000);
        neworder.getFieldStatus().click();
        neworder.getStatusOnProgress().click();
        neworder.getFieldStatus().should('contain','On Progress');
        cy.wait(1000);
        neworder.getFieldStatus().click();
        neworder.getStatusOnProgress().should('not.be.enabled');
        neworder.getSectionFilter().should('be.visible').should('contain.text','ON PROGRESS');
        neworder.getTableData().should('not.contain','Entry');
        neworder.getTableData().should('not.contain','Confirmed');
        neworder.getTableData().should('not.contain','Picked');
        neworder.getTableData().should('not.contain','Delivered');
        neworder.getTableData().should('not.contain','Cancel Request');
        neworder.getTableData().should('not.contain','Cancelled');
        neworder.getTableData().should('not.contain','Other');
        neworder.getTableData().should('not.contain','On Hold');
        neworder.getTableData().should('not.contain','Problem');
        neworder.getTableData().should('not.contain','Returned');
        neworder.getTableData().should('not.contain','Lost Broken');
        neworder.getTableData().should('not.contain','Confirm Cancelled');
        neworder.getTableData().should('not.contain','Returning');
        neworder.getTableData().should('not.contain','Confirm Problem');
        neworder.getTableData().should('not.contain','Waiting For Confirmation');
    });

    it('Cek Filter by Status Delivered',() => {
        const neworder = new newPageOrder();
        cy.wait(1000);
        neworder.getFieldStatus().click();
        neworder.getStatusDelivered().click();
        neworder.getFieldStatus().should('contain','Delivered');
        cy.wait(1000);
        neworder.getFieldStatus().click();
        neworder.getStatusDelivered().should('not.be.enabled');
        neworder.getSectionFilter().should('be.visible').should('contain.text','DELIVERED');
        neworder.getTableData().should('not.contain','Entry');
        neworder.getTableData().should('not.contain','Confirmed');
        neworder.getTableData().should('not.contain','Picked');
        neworder.getTableData().should('not.contain','On Progress');
        neworder.getTableData().should('not.contain','Cancel Request');
        neworder.getTableData().should('not.contain','Cancelled');
        neworder.getTableData().should('not.contain','Other');
        neworder.getTableData().should('not.contain','On Hold');
        neworder.getTableData().should('not.contain','Problem');
        neworder.getTableData().should('not.contain','Returned');
        neworder.getTableData().should('not.contain','Lost Broken');
        neworder.getTableData().should('not.contain','Confirm Cancelled');
        neworder.getTableData().should('not.contain','Returning');
        neworder.getTableData().should('not.contain','Confirm Problem');
        neworder.getTableData().should('not.contain','Waiting For Confirmation');
    });

    it('Cek Filter by Status Cancel Request',() => {
        const neworder = new newPageOrder();
        cy.wait(1000);
        neworder.getFieldStatus().click();
        neworder.getStatusCancelRequest().click();
        neworder.getFieldStatus().should('contain','Cancel Request');
        cy.wait(1000);
        neworder.getFieldStatus().click();
        neworder.getStatusCancelRequest().should('not.be.enabled');
        neworder.getSectionFilter().should('be.visible').should('contain.text','CANCEL REQUEST');
        neworder.getTableData().should('not.contain','Entry');
        neworder.getTableData().should('not.contain','Confirmed');
        neworder.getTableData().should('not.contain','Picked');
        neworder.getTableData().should('not.contain','On Progress');
        neworder.getTableData().should('not.contain','Delivered');
        neworder.getTableData().should('not.contain','Cancelled');
        neworder.getTableData().should('not.contain','Other');
        neworder.getTableData().should('not.contain','On Hold');
        neworder.getTableData().should('not.contain','Problem');
        neworder.getTableData().should('not.contain','Returned');
        neworder.getTableData().should('not.contain','Lost Broken');
        neworder.getTableData().should('not.contain','Confirm Cancelled');
        neworder.getTableData().should('not.contain','Returning');
        neworder.getTableData().should('not.contain','Confirm Problem');
        neworder.getTableData().should('not.contain','Waiting For Confirmation');
    });

    it('Cek Filter by Status Cancelled',() => {
        const neworder = new newPageOrder();
        cy.wait(1000);
        neworder.getFieldStatus().click();
        neworder.getStatusCancelled().click();
        neworder.getFieldStatus().should('contain','Cancelled');
        cy.wait(1000);
        neworder.getFieldStatus().click();
        neworder.getStatusCancelled().should('not.be.enabled');
        neworder.getSectionFilter().should('be.visible').should('contain.text','CANCELLED');
        neworder.getTableData().should('not.contain','Entry');
        neworder.getTableData().should('not.contain','Confirmed');
        neworder.getTableData().should('not.contain','Picked');
        neworder.getTableData().should('not.contain','On Progress');
        neworder.getTableData().should('not.contain','Delivered');
        neworder.getTableData().should('not.contain','Cancel Request');
        neworder.getTableData().should('not.contain','Other');
        neworder.getTableData().should('not.contain','On Hold');
        neworder.getTableData().should('not.contain','Problem');
        neworder.getTableData().should('not.contain','Returned');
        neworder.getTableData().should('not.contain','Lost Broken');
        neworder.getTableData().should('not.contain','Confirm Cancelled');
        neworder.getTableData().should('not.contain','Returning');
        neworder.getTableData().should('not.contain','Confirm Problem');
        neworder.getTableData().should('not.contain','Waiting For Confirmation');
    });

    it('Cek Filter by Status Other',() => {
        const neworder = new newPageOrder();
        cy.wait(1000);
        neworder.getFieldStatus().click();
        neworder.getStatusOther().click();
        neworder.getFieldStatus().should('contain','Other');
        cy.wait(1000);
        neworder.getFieldStatus().click();
        neworder.getStatusOther().should('not.be.enabled');
        neworder.getSectionFilter().should('be.visible').should('contain.text','OTHER');
        neworder.getTableData().should('not.contain','Entry');
        neworder.getTableData().should('not.contain','Confirmed');
        neworder.getTableData().should('not.contain','Picked');
        neworder.getTableData().should('not.contain','On Progress');
        neworder.getTableData().should('not.contain','Delivered');
        neworder.getTableData().should('not.contain','Cancel Request');
        neworder.getTableData().should('not.contain','Cancelled');
        neworder.getTableData().should('not.contain','On Hold');
        neworder.getTableData().should('not.contain','Problem');
        neworder.getTableData().should('not.contain','Returned');
        neworder.getTableData().should('not.contain','Lost Broken');
        neworder.getTableData().should('not.contain','Confirm Cancelled');
        neworder.getTableData().should('not.contain','Returning');
        neworder.getTableData().should('not.contain','Confirm Problem');
        neworder.getTableData().should('not.contain','Waiting For Confirmation');
    });

    it('Cek Filter by Status On Hold',() => {
        const neworder = new newPageOrder();
        cy.wait(1000);
        neworder.getFieldStatus().click();
        neworder.getStatusOnHold().click();
        neworder.getFieldStatus().should('contain','On Hold');
        cy.wait(1000);
        neworder.getFieldStatus().click();
        neworder.getStatusOnHold().should('not.be.enabled');
        neworder.getSectionFilter().should('be.visible').should('contain.text','ON HOLD');
        neworder.getTableData().should('not.contain','Entry');
        neworder.getTableData().should('not.contain','Confirmed');
        neworder.getTableData().should('not.contain','Picked');
        neworder.getTableData().should('not.contain','On Progress');
        neworder.getTableData().should('not.contain','Delivered');
        neworder.getTableData().should('not.contain','Cancel Request');
        neworder.getTableData().should('not.contain','Cancelled');
        neworder.getTableData().should('not.contain','Other');
        neworder.getTableData().should('not.contain','Problem');
        neworder.getTableData().should('not.contain','Returned');
        neworder.getTableData().should('not.contain','Lost Broken');
        neworder.getTableData().should('not.contain','Confirm Cancelled');
        neworder.getTableData().should('not.contain','Returning');
        neworder.getTableData().should('not.contain','Confirm Problem');
        neworder.getTableData().should('not.contain','Waiting For Confirmation');
    });

    it('Cek Filter by Status Problem',() => {
        const neworder = new newPageOrder();
        cy.wait(1000);
        neworder.getFieldStatus().click();
        neworder.getStatusProblem().click();
        neworder.getFieldStatus().should('contain','Problem');
        cy.wait(1000);
        neworder.getFieldStatus().click();
        neworder.getStatusProblem().should('not.be.enabled');
        neworder.getSectionFilter().should('be.visible').should('contain.text','PROBLEM');
        neworder.getTableData().should('not.contain','Entry');
        neworder.getTableData().should('not.contain','Confirmed');
        neworder.getTableData().should('not.contain','Picked');
        neworder.getTableData().should('not.contain','On Progress');
        neworder.getTableData().should('not.contain','Delivered');
        neworder.getTableData().should('not.contain','Cancel Request');
        neworder.getTableData().should('not.contain','Cancelled');
        neworder.getTableData().should('not.contain','On Hold');
        neworder.getTableData().should('not.contain','Other');
        neworder.getTableData().should('not.contain','Returned');
        neworder.getTableData().should('not.contain','Lost Broken');
        neworder.getTableData().should('not.contain','Confirm Cancelled');
        neworder.getTableData().should('not.contain','Returning');
        neworder.getTableData().should('not.contain','Confirm Problem');
        neworder.getTableData().should('not.contain','Waiting For Confirmation');
    });

    // //masih explore terkait scrolling element
    // it('Cek Filter by Status Returned',() => {
    //     const neworder = new newPageOrder();
    //     cy.wait(1000);
    //     neworder.getFieldStatus().click();
    //     neworder.getStatusReturned().click();
    //     neworder.getFieldStatus().should('contain','Returned');
    //     cy.wait(1000);
    //     neworder.getFieldStatus().click();
    //     neworder.getStatusReturned().should('not.be.enabled');
    //     neworder.getSectionFilter().should('be.visible').should('contain.text','RETURNED');
    //     neworder.getTableData().should('not.contain','Entry');
    //     neworder.getTableData().should('not.contain','Confirmed');
    //     neworder.getTableData().should('not.contain','Picked');
    //     neworder.getTableData().should('not.contain','On Progress');
    //     neworder.getTableData().should('not.contain','Delivered');
    //     neworder.getTableData().should('not.contain','Cancel Request');
    //     neworder.getTableData().should('not.contain','Cancelled');
    //     neworder.getTableData().should('not.contain','On Hold');
    //     neworder.getTableData().should('not.contain','Problem');
    //     neworder.getTableData().should('not.contain','Other');
    //     neworder.getTableData().should('not.contain','Lost Broken');
    //     neworder.getTableData().should('not.contain','Confirm Cancelled');
    //     neworder.getTableData().should('not.contain','Returning');
    //     neworder.getTableData().should('not.contain','Confirm Problem');
    //     neworder.getTableData().should('not.contain','Waiting For Confirmation');
    // });

    // it('Cek Filter by Status Lost Broken',() => {
    //     const neworder = new newPageOrder();
    //     cy.wait(1000);
    //     neworder.getFieldStatus().click();
    //     neworder.getStatusLostBroken().click();
    //     neworder.getFieldStatus().should('contain','Lost Broken');
    //     cy.wait(1000);
    //     neworder.getFieldStatus().click();
    //     neworder.getStatusLostBroken().should('not.be.enabled');
    //     neworder.getSectionFilter().should('be.visible').should('contain.text','LOST BROKEN');
    //     neworder.getTableData().should('not.contain','Entry');
    //     neworder.getTableData().should('not.contain','Confirmed');
    //     neworder.getTableData().should('not.contain','Picked');
    //     neworder.getTableData().should('not.contain','On Progress');
    //     neworder.getTableData().should('not.contain','Delivered');
    //     neworder.getTableData().should('not.contain','Cancel Request');
    //     neworder.getTableData().should('not.contain','Cancelled');
    //     neworder.getTableData().should('not.contain','On Hold');
    //     neworder.getTableData().should('not.contain','Problem');
    //     neworder.getTableData().should('not.contain','Returned');
    //     neworder.getTableData().should('not.contain','Other');
    //     neworder.getTableData().should('not.contain','Confirm Cancelled');
    //     neworder.getTableData().should('not.contain','Returning');
    //     neworder.getTableData().should('not.contain','Confirm Problem');
    //     neworder.getTableData().should('not.contain','Waiting For Confirmation');
    // });

    // it('Cek Filter by Status Confirm Cancelled',() => {
    //     const neworder = new newPageOrder();
    //     cy.wait(1000);
    //     neworder.getFieldStatus().click();
    //     neworder.getStatusConfirmCancelled().click();
    //     neworder.getFieldStatus().should('contain','Confirm Cancelled');
    //     cy.wait(1000);
    //     neworder.getFieldStatus().click();
    //     neworder.getStatusConfirmCancelled().should('not.be.enabled');
    //     neworder.getSectionFilter().should('be.visible').should('contain.text','CONFIRM CANCELLED');
    //     neworder.getTableData().should('not.contain','Entry');
    //     neworder.getTableData().should('not.contain','Confirmed');
    //     neworder.getTableData().should('not.contain','Picked');
    //     neworder.getTableData().should('not.contain','On Progress');
    //     neworder.getTableData().should('not.contain','Delivered');
    //     neworder.getTableData().should('not.contain','Cancel Request');
    //     neworder.getTableData().should('not.contain','Cancelled');
    //     neworder.getTableData().should('not.contain','On Hold');
    //     neworder.getTableData().should('not.contain','Problem');
    //     neworder.getTableData().should('not.contain','Returned');
    //     neworder.getTableData().should('not.contain','Lost Broken');
    //     neworder.getTableData().should('not.contain','Other');
    //     neworder.getTableData().should('not.contain','Returning');
    //     neworder.getTableData().should('not.contain','Confirm Problem');
    //     neworder.getTableData().should('not.contain','Waiting For Confirmation');
    // });

    it('Multi Status Filter',() => {
        const neworder = new newPageOrder();
        cy.wait(1000);
        neworder.getFieldStatus().click();
        neworder.getStatusEntry().click();
        cy.wait(1000);
        neworder.getFieldStatus().click();
        neworder.getStatusConfirmed().click();
        neworder.getFieldStatus().should('contain','Confirmed');
        cy.wait(1000);
        neworder.getFieldStatus().click();
        neworder.getStatusEntry().should('not.be.enabled');
        neworder.getStatusConfirmed().should('not.be.enabled');
        neworder.getSectionFilter().should('be.visible').should('contain.text','ENTRY').should('contain.text','CONFIRMED');
        neworder.getTableData().should('not.contain','Picked');
        neworder.getTableData().should('not.contain','On Progress');
        neworder.getTableData().should('not.contain','Delivered');
        neworder.getTableData().should('not.contain','Cancel Request');
        neworder.getTableData().should('not.contain','Cancelled');
        neworder.getTableData().should('not.contain','On Hold');
        neworder.getTableData().should('not.contain','Problem');
        neworder.getTableData().should('not.contain','Returned');
        neworder.getTableData().should('not.contain','Lost Broken');
        neworder.getTableData().should('not.contain','Other');
        neworder.getTableData().should('not.contain','Returning');
        neworder.getTableData().should('not.contain','Confirm Problem');
        neworder.getTableData().should('not.contain','Waiting For Confirmation');
    });

    it('Reset Filter',() => {
        const neworder = new newPageOrder();
        cy.wait(1000);
        neworder.getFieldStatus().click();
        neworder.getStatusEntry().click();
        neworder.getSectionFilter().should('be.visible').should('contain.text','ENTRY');
        neworder.getBtnResetFilter().click();
        neworder.getSectionFilter().should('not.exist');
        neworder.getFieldStatus().should('contain','Status');
    });
});

describe('Test Filter Data',() => {
    it('Use Filter Status Button',() => {
        const neworder = new newPageOrder();
        cy.wait(1000);
        neworder.getBtnFilter().click();
        neworder.getFilterStatus().click();
        neworder.getStatusEntry().click();
        neworder.getFieldStatusAfterPick().should('contain','Entry');
        neworder.getBtnFilter().click();

        neworder.getFieldStatus().should('contain','Entry');
        neworder.getTableData().should('not.contain','Confirmed');
        neworder.getTableData().should('not.contain','Picked');
        neworder.getTableData().should('not.contain','On Progress');
        neworder.getTableData().should('not.contain','Delivered');
        neworder.getTableData().should('not.contain','Cancel Request');
        neworder.getTableData().should('not.contain','Cancelled');
        neworder.getTableData().should('not.contain','Other');
        neworder.getTableData().should('not.contain','On Hold');
        neworder.getTableData().should('not.contain','Problem');
        neworder.getTableData().should('not.contain','Returned');
        neworder.getTableData().should('not.contain','Lost Broken');
        neworder.getTableData().should('not.contain','Confirm Cancelled');
        neworder.getTableData().should('not.contain','Returning');
        neworder.getTableData().should('not.contain','Confirm Problem');
        neworder.getTableData().should('not.contain','Waiting For Confirmation');
    });

    it('Use Filter Shipping Label 99',() => {
        const neworder = new newPageOrder();
        cy.wait(1000);
        neworder.getBtnFilter().click();
        neworder.getFilterCetakShippingLabel().click();
        neworder.getOperatorSamaDengan().click();
        neworder.getFieldStatusAfterPick().should('contain','=');
        neworder.getFilterShippingAmount().should('be.enabled').type('99');
        cy.wait(1000);
        neworder.getBtnFilter().click();
        neworder.getTableData().should('contain.text','No Data');
    });

    it('Use Filter COD',() => {
        const neworder = new newPageOrder();
        cy.wait(1000);
        neworder.getBtnFilter().click();
        neworder.getFilterCOD().click();
        neworder.getOpsiCOD().click();
        neworder.getFieldStatusAfterPick().should('contain','COD');
        neworder.getBtnFilter().click();
        neworder.getTableData().should('contain.text','COD');
    });

    it('Use Filter Cabang',() => {
        const neworder = new newPageOrder();
        const order = new ordernoncod();
        cy.wait(1000);
        neworder.getBtnFilter().click();
        neworder.getFilterCabang().click();
        neworder.getOpsiCabangPusat1().click();
        neworder.getFieldStatusAfterPick().should('contain','Cabang Pusat');
        neworder.getBtnFilter().click();
        neworder.getSectionFilter().should('be.visible').should('contain.text','Cabang Pusat');
        cy.wait(1000);
        neworder.getNoResiKe2().click();
        order.getCabangPengirim().should('contain','Cabang Pusat');
    });

    it('Use Filter Departemen',() => {
        const neworder = new newPageOrder();
        const order = new ordernoncod();
        cy.wait(1000);
        neworder.getBtnFilter().click();
        neworder.getFilterDepartemen().click();
        neworder.getOpsiDeptOwner().click();
        neworder.getFieldStatusAfterPick().should('contain','owner');
        neworder.getBtnFilter().click();
        neworder.getSectionFilter().should('be.visible').should('contain.text','owner');
        cy.wait(1000);
        neworder.getNoResiKe2().click();
        order.getDepartemenPengirim().should('contain','owner');
    });

    it('Use Filter Date',() => {
        const neworder = new newPageOrder();
        cy.wait(1000);
        cy.get('.ant-picker').within(() => {
            neworder.getFilterStartDate().clear({force: true}).type('2022-05-29', {force: true})
            neworder.getFilterEndDate().clear({force: true}).type('2022-05-31', {force: true}).type('{enter}')
        });
        neworder.getAmountTotalDataTable().should('contain.text','40');
        neworder.getTanggalOrderKe2().should('contain','31/05');
    });

    it('Use Filter Date from Menu Filter',() => {
        const neworder = new newPageOrder();
        cy.wait(1000);
        neworder.getBtnFilter().click();
        // cy.get('.ant-picker').within(() => {
        //     neworder.getStartDateInsideFilter().type('2022-05-29', {force: true})
        //     neworder.getEndDateInsideFilter().type('2022-05-29', {force: true})
        // });
        neworder.getStartDateInsideFilter().type('2022-05-29', {force: true});
        neworder.getEndDateInsideFilter().type('2022-05-31', {force: true}).type('{enter}');
        cy.wait(1000);
        neworder.getBtnFilter().click();
        neworder.getAmountTotalDataTable().should('contain.text','40');
        neworder.getTanggalOrderKe2().should('contain','31/05');
    });
});

describe('Cek Pagination',() => {
    it('Cek Limit Page Data',() => {
        const neworder = new newPageOrder();
        neworder.getTableData().find('tr').should('have.length',31);
        neworder.getTotalDataTable().click();
        neworder.getTotalDataTable50().click();
        neworder.getTableData().find('tr').should('have.length',51);
    });

    it('Cek Data Next Page Should Exist',() => {
        const neworder = new newPageOrder();
        cy.wait(1000);
        cy.get('.ant-picker').within(() => {
            neworder.getFilterStartDate().clear({force: true}).type('2022-05-29', {force: true})
            neworder.getFilterEndDate().clear({force: true}).type('2022-05-31', {force: true}).type('{enter}')
        });
        neworder.getAmountTotalDataTable().should('contain.text','40');
        neworder.getTotalDataTable().click();
        neworder.getTotalDataTable10().click();
        neworder.getContainerPageBtn().find('li').should('have.length',6);
        neworder.getNextPageData().click();
        neworder.getTableData().find('tr').should('have.length',11);
        neworder.getBtnPage2().should('not.be.enabled');
        neworder.getNextPageData().click();
        neworder.getTableData().find('tr').should('have.length',11);
        neworder.getBtnPage3().should('not.be.enabled');
        neworder.getNextPageData().click();
        neworder.getTableData().find('tr').should('have.length',11);
        neworder.getBtnPage4().should('not.be.enabled');
    });
});

describe('Cek Detail Card Order',() => {
    it('Cek Card Order Data ke 1',() => {
        const neworder = new newPageOrder();
        neworder.getNoOrderKe2().invoke('text').as('order2');
        neworder.getTipeOrderKe2().invoke('text').as('tipe2');
        neworder.getPenerimaDataKe2().invoke('text').as('penerima2');
        neworder.getOngkosKirimKe2().invoke('text').as('ongkos2');
        neworder.getDataKe2().click();
        cy.then( function() {
            neworder.getNoOrderCard().should('contain',this.order2);
            neworder.getPenerimaCard().should('contain',this.penerima2);
            neworder.getTipeCard().should('contain',this.tipe2);
        });
    });

    it('Cek Detail Order Data ke 1',() => {
        const neworder = new newPageOrder();
        const order = new ordernoncod();
        neworder.getNoOrderKe2().invoke('text').as('order2');
        neworder.getNoResiKe2().invoke('text').as('resi2');
        neworder.getTipeOrderKe2().invoke('text').as('tipe2');
        neworder.getPenerimaDataKe2().invoke('text').as('penerima2');
        neworder.getOngkosKirimKe2().invoke('text').as('ongkos2');
        neworder.getStatusShipdeoKe2().invoke('text').as('status2');
        neworder.getNoOrderKe2().click();
        cy.then( function() {
            order.getFieldNoOrder().should('contain',this.order2);
            order.getNoResiDetail().should('contain',this.resi2);
            order.getFieldTipePengiriman().should('contain',this.tipe2);
            order.getNamaPenerima().should('contain',this.penerima2);
            order.getSectionEstimasiHarga().click();
            order.getFieldStatusShipdeo().should('contain',this.status2);
        });
    });
});