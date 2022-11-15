/// <reference types="cypress"/>

import pageUserBranch from "../../support/pageObjects/pageUserBranch";
import pageUser from "../../support/pageObjects/pageUser";

let datatest;
beforeEach(() => {
    cy.loginViaAPI();
    cy.visit('/features/user/list');
    cy.fixture('user/dataBranch').then(function(Tdata) {
        datatest=Tdata;
    });
});

describe('Test Page Branch',() => {
    it('Test Get Detail Page List Branch',() => {
        const dataBranch = new pageUserBranch();
        dataBranch.getBtnMenuBranch().click();
        dataBranch.getHeader().should('contain',datatest.headerBranch);
        dataBranch.getTableData().should('be.visible');
    });
});

describe('Test Create New Branch',() => {
    it('Negative - Empty Data',() => {
        const dataBranch = new pageUserBranch();
        dataBranch.getBtnMenuBranch().click();
        dataBranch.getHeader().should('contain',datatest.headerBranch);
        dataBranch.getBtnAddBranch().click();
        dataBranch.getHeaderForm().should('contain',datatest.headerAddBranchId);
        dataBranch.getBtnSimpan().click();
        dataBranch.getErrorFieldCode().should('contain',datatest.fieldRequiredId);
        dataBranch.getErrorFieldBranchName().should('contain',datatest.fieldRequiredId);
        dataBranch.getErrorFieldShipperName().should('contain',datatest.fieldRequiredId);
        dataBranch.getErrorFieldAddress().should('contain',datatest.fieldRequiredId);
        dataBranch.getErrorFieldDistrict().should('contain',datatest.fieldRequiredId);
        dataBranch.getErrorFieldPostaCode().should('contain',datatest.fieldRequiredId);
    });

    it('Negative - User Existing',() => {
        const dataBranch = new pageUserBranch();
        dataBranch.getBtnMenuBranch().click();
        dataBranch.getHeader().should('contain',datatest.headerBranch);
        dataBranch.getBtnAddBranch().click();
        dataBranch.getHeaderForm().should('contain',datatest.headerAddBranchId);
        dataBranch.getFieldCode().type(datatest.exCode);
        dataBranch.getFieldBranchName().type(datatest.branchName);
        dataBranch.getFieldShipperName().type(datatest.shipperName);
        dataBranch.getFieldAddress().type(datatest.address);
        dataBranch.getFieldDisctrict().type(datatest.district,{delay:300});
        cy.wait(5000);        
        dataBranch.getFieldDisctrict().type('{downarrow}{enter}');
        dataBranch.getFieldPostalCode().type(datatest.postal,{delay:300});
        cy.wait(2000);
        dataBranch.getFieldPostalCode().type('{downarrow}{enter}');
        dataBranch.getBtnSimpan().click();
        dataBranch.getAlertNotification().should('be.visible').should('contain',datatest.userExist);
    });

    it('Negative - Pin Point Location Not Valid',() => {
        const dataBranch = new pageUserBranch();
        dataBranch.getBtnMenuBranch().click();
        dataBranch.getHeader().should('contain',datatest.headerBranch);
        dataBranch.getBtnAddBranch().click();
        dataBranch.getHeaderForm().should('contain',datatest.headerAddBranchId);
        dataBranch.getFieldCode().type(datatest.code);
        dataBranch.getFieldBranchName().type(datatest.branchName);
        dataBranch.getFieldShipperName().type(datatest.shipperName);
        dataBranch.getFieldAddress().type(datatest.address);
        dataBranch.getFieldDisctrict().type(datatest.district,{delay:300});
        cy.wait(5000);
        dataBranch.getFieldDisctrict().type('{downarrow}{enter}');
        dataBranch.getFieldPostalCode().type(datatest.postal,{delay:300});
        cy.wait(2000);
        dataBranch.getListItemPostal1().should('contain',datatest.postal);
        dataBranch.getFieldPostalCode().type('{downarrow}{enter}');
        dataBranch.getLinkShowMap().click();
        dataBranch.getFieldSearchMap().type(datatest.updateDistrict);
        cy.wait(2000);
        dataBranch.getFieldSearchMap().type('{downarrow}{enter}');
        cy.wait(2000);
        dataBranch.getBtnTerapkanMaps().click();
        dataBranch.getAlertNotification().should('be.visible').should('contain',datatest.locationNotValid);
    });

    it('Postive - Pin Point Location Valid',() => {
        const dataBranch = new pageUserBranch();
        dataBranch.getBtnMenuBranch().click();
        dataBranch.getHeader().should('contain',datatest.headerBranch);
        dataBranch.getBtnAddBranch().click();
        dataBranch.getHeaderForm().should('contain',datatest.headerAddBranchId);
        dataBranch.getFieldCode().type(datatest.code);
        dataBranch.getFieldBranchName().type(datatest.branchName);
        dataBranch.getFieldShipperName().type(datatest.shipperName);
        dataBranch.getFieldAddress().type(datatest.address);
        dataBranch.getFieldDisctrict().type(datatest.district,{delay:500});
        cy.wait(5000);
        dataBranch.getFieldDisctrict().type('{downarrow}{enter}');
        dataBranch.getFieldPostalCode().type(datatest.postal,{delay:300});
        cy.wait(2000);
        dataBranch.getListItemPostal1().should('contain',datatest.postal);
        dataBranch.getFieldPostalCode().type('{downarrow}{enter}');
        dataBranch.getLinkShowMap().click();
        cy.wait(3000);
        dataBranch.getBtnTerapkanMaps().click();
        dataBranch.getAlertNotification().should('be.visible').should('contain',datatest.locationValid);
    });

    it('Postive - Create Data Branch Valid',() => {
        const dataBranch = new pageUserBranch();
        dataBranch.getBtnMenuBranch().click();
        dataBranch.getHeader().should('contain',datatest.headerBranch);
        dataBranch.getBtnAddBranch().click();
        dataBranch.getHeaderForm().should('contain',datatest.headerAddBranchId);
        dataBranch.getFieldCode().type(datatest.code);
        dataBranch.getFieldBranchName().type(datatest.branchName);
        dataBranch.getFieldShipperName().type(datatest.shipperName);
        dataBranch.getFieldPhoneNumber().type(datatest.phoneNumber);
        dataBranch.getFieldEmail().type(datatest.email);
        dataBranch.getFieldNote().type(datatest.note);
        dataBranch.getFieldAddress().type(datatest.address);
        dataBranch.getFieldDisctrict().type(datatest.district,{delay:500});
        cy.wait(6000);
        dataBranch.getFieldDisctrict().type('{downarrow}{enter}');
        dataBranch.getFieldPostalCode().type(datatest.postal,{delay:300});
        cy.wait(2000);
        dataBranch.getListItemPostal1().should('contain',datatest.postal);
        dataBranch.getFieldPostalCode().type('{downarrow}{enter}');
        dataBranch.getLinkShowMap().click();
        cy.wait(4000);
        dataBranch.getBtnTerapkanMaps().click();
        dataBranch.getAlertNotification().should('be.visible').should('contain',datatest.locationValid);
        cy.wait(4000);
        dataBranch.getAlertNotification().should('not.exist');
        dataBranch.getBtnSimpan().click();
        dataBranch.getAlertNotification().should('be.visible').should('contain',datatest.branchCreatedId);
    });
});

describe('Test View Detail Data Created',() => {
    it('Positive - View Detail Data Created',() => {
        const dataBranch = new pageUserBranch();
        dataBranch.getBtnMenuBranch().click();
        dataBranch.getHeader().should('contain',datatest.headerBranch);
        dataBranch.getFieldSearch().type(`${datatest.code}{enter}`);
        cy.wait(1000);
        dataBranch.getBtnViewDetailBranch1().click();
        dataBranch.getHeaderForm().should('contain',datatest.headerViewId);
        dataBranch.getDataDistrict().should('contain',datatest.district);
        dataBranch.getDataPostal().should('contain',datatest.postal);
        dataBranch.getDataBranchCode().should('contain',datatest.code);
        dataBranch.getDataBranchName().should('contain',datatest.branchName);
        dataBranch.getDataEmail().should('contain',datatest.email);
        dataBranch.getDataPhone().should('contain',datatest.phoneNumber);
        dataBranch.getDataNote().should('contain',datatest.note);
    });

    it('Positive - Validate New Branch Exist in Create User',() => {
        const dataUser = new pageUser();
        dataUser.getBtnAddUser().click();
        dataUser.getFieldBranch().click().type(datatest.branchName);
        dataUser.getListItemBranch().should('contain',datatest.branchName);
    });
});

describe('Test Update Data Branch',() => {
    it('Negative - Update with Code Existing',() => {
        const dataBranch = new pageUserBranch();
        dataBranch.getBtnMenuBranch().click();
        dataBranch.getHeader().should('contain',datatest.headerBranch);
        dataBranch.getFieldSearch().type(`${datatest.code}{enter}`);
        cy.wait(1000);
        dataBranch.getBtnEditBranch1().should('be.enabled').click();
        dataBranch.getModalForm().should('be.visible');
        dataBranch.getHeaderForm().should('contain',datatest.headerUpdateFormId);
        dataBranch.getFieldCode().should('contain.value',datatest.code).clear().type(datatest.exCode).should('contain.value',datatest.exCode);
        dataBranch.getBtnSimpan().click();
        dataBranch.getAlertNotification().should('contain',datatest.userExist);
    });

    it('Positive - Update Data Branch',() => {
        const dataBranch = new pageUserBranch();
        dataBranch.getBtnMenuBranch().click();
        dataBranch.getHeader().should('contain',datatest.headerBranch);
        dataBranch.getFieldSearch().type(`${datatest.code}{enter}`);
        cy.wait(1000);
        dataBranch.getBtnEditBranch1().should('be.enabled').click();
        dataBranch.getModalForm().should('be.visible');
        dataBranch.getHeaderForm().should('contain',datatest.headerUpdateFormId);
        dataBranch.getFieldCode().should('contain.value',datatest.code).clear().type(datatest.updateCode).should('contain.value',datatest.updateCode);
        dataBranch.getFieldBranchName().should('contain.value',datatest.branchName).clear().type(datatest.updateBranch).should('contain.value',datatest.updateBranch);
        dataBranch.getFieldShipperName().should('contain.value',datatest.shipperName).clear().type(datatest.updateShipper).should('contain.value',datatest.updateShipper);
        dataBranch.getFieldPhoneNumber().should('contain.value',datatest.phoneNumber).clear().type(datatest.updatePhone).should('contain.value',datatest.updatePhone);
        dataBranch.getFieldEmail().should('contain.value',datatest.email).clear().type(datatest.updateEmail).should('contain.value',datatest.updateEmail);
        dataBranch.getFieldNote().should('contain.value',datatest.note).clear().type(datatest.updateNote).should('contain.value',datatest.updateNote);
        dataBranch.getFieldAddress().should('contain.value',datatest.address).clear().type(datatest.updateAddress).should('contain.value',datatest.updateAddress);
        dataBranch.getFieldPostalExisting().should('contain',datatest.postal);
        dataBranch.getFieldDisctrict().should('contain.value',datatest.detailDistrict).clear().type(datatest.updateDistrict,{delay:300});
        cy.wait(6000);
        dataBranch.getFieldDisctrict().type('{downarrow}{enter}');
        dataBranch.getFieldPostalCode().type(datatest.updatePostal,{delay:300});
        cy.wait(2000);
        dataBranch.getListItemPostal1().should('contain',datatest.updatePostal);
        dataBranch.getFieldPostalCode().type('{downarrow}{enter}')
        dataBranch.getBtnSimpan().click();
        dataBranch.getAlertNotification().should('contain',datatest.branchUpdatedId);
    });
});

describe('Test View Detail Data Updated',() => {
    it('Positive - View Detail Data Updated',() => {
        const dataBranch = new pageUserBranch();
        dataBranch.getBtnMenuBranch().click();
        dataBranch.getHeader().should('contain',datatest.headerBranch);
        dataBranch.getFieldSearch().type(`${datatest.updateCode}{enter}`);
        cy.wait(1000);
        dataBranch.getBtnViewDetailBranch1().click();
        dataBranch.getHeaderForm().should('contain',datatest.headerViewId);
        dataBranch.getDataDistrict().should('contain',datatest.updateDistrict);
        dataBranch.getDataPostal().should('contain',datatest.updatePostal);
        dataBranch.getDataBranchCode().should('contain',datatest.updateCode);
        dataBranch.getDataBranchName().should('contain',datatest.updateBranch);
        dataBranch.getDataEmail().should('contain',datatest.updateEmail);
        dataBranch.getDataPhone().should('contain',datatest.updatePhone);
        dataBranch.getDataNote().should('contain',datatest.updateNote);
    });

    it('Positive - Validate Update Branch Exist in Create User',() => {
        const dataUser = new pageUser();
        dataUser.getBtnAddUser().click();
        dataUser.getFieldBranch().click().type(datatest.branchName);
        dataUser.getModalListBranch().should('contain','No Data');
        dataUser.getHeaderForm().click();
        dataUser.getFieldBranch().click().type(datatest.updateBranch);
        dataUser.getListItemBranch().should('contain',datatest.updateBranch);
    });
});

describe('Test Delete Data Branch',() => {
    it('Negative - Cancel Delete Data Branch',() => {
        const dataBranch = new pageUserBranch();
        dataBranch.getBtnMenuBranch().click();
        dataBranch.getHeader().should('contain',datatest.headerBranch);
        dataBranch.getFieldSearch().type(`${datatest.updateCode}{enter}`);
        cy.wait(1000);
        dataBranch.getBtnDeleteBranch1().click();
        dataBranch.getModalDeleteData().should('contain','konfirmasi');
        dataBranch.getBtnCancelDelete().click();
    });

    it('Positive - Delete Data Branch',() => {
        const dataBranch = new pageUserBranch();
        dataBranch.getBtnMenuBranch().click();
        dataBranch.getHeader().should('contain',datatest.headerBranch);
        dataBranch.getFieldSearch().type(`${datatest.updateCode}{enter}`);
        cy.wait(1000);
        dataBranch.getBtnDeleteBranch1().click();
        dataBranch.getModalDeleteData().should('contain','konfirmasi');
        dataBranch.getBtnOkDelete().click();
        dataBranch.getAlertNotification().should('be.visible').should('contain',datatest.deletedBranchId);
        dataBranch.getContainerListData().should('contain','No Data');
    });
});