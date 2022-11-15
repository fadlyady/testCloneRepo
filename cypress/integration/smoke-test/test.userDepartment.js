/// <reference types="cypress"/>

import pageUserDepartment from "../../support/pageObjects/pageUserDepartment";
import pageUser from "../../support/pageObjects/pageUser";

let datatest;
beforeEach(() => {
    cy.loginViaAPI();
    cy.visit('/features/user/list');
    cy.fixture('user/dataDepartment').then(function(Tdata) {
        datatest=Tdata;
    });
});

describe('Test Page Branch',() => {
    it('Test Get Detail Page List Branch',() => {
        const page = new pageUserDepartment();
        page.getBtnMenuDepartment().click();
        page.getHeader().should('contain', datatest.headerMenu);
    });
});

describe('Test Add New Department',() => {
    it('Negative - Empty Data',() => {
        const page = new pageUserDepartment();
        page.getBtnMenuDepartment().click();
        page.getHeader().should('contain', datatest.headerMenu);
        page.getBtnAddDepartment().should('be.enabled').click();
        page.getHeaderForm().should('contain',datatest.headerFormAddId);
        page.getBtnSaveAdd().click();
        page.getErrorCode().should('contain',datatest.emptyDataId);
        page.getErrorName().should('contain',datatest.emptyDataId);
    });

    it('Negative - Existing Data',() => {
        const page = new pageUserDepartment();
        page.getBtnMenuDepartment().click();
        page.getHeader().should('contain', datatest.headerMenu);
        page.getBtnAddDepartment().should('be.enabled').click();
        page.getHeaderForm().should('contain',datatest.headerFormAddId);
        page.getFieldCode().type(datatest.exCode);
        page.getFieldFullname().type(datatest.exName);
        page.getBtnSaveAdd().click();
        page.getAlertNotification().should('contain',datatest.codeExist)
    });

    it('Positive - Create New Data',() => {
        const page = new pageUserDepartment();
        page.getBtnMenuDepartment().click();
        page.getHeader().should('contain', datatest.headerMenu);
        page.getBtnAddDepartment().should('be.enabled').click();
        page.getHeaderForm().should('contain',datatest.headerFormAddId);
        cy.wait(1000);
        page.getFieldCode().type(datatest.newCode,{delay:200}).should('have.value',datatest.newCode);
        cy.wait(1000);
        page.getFieldFullname().type(datatest.newFullname,{delay:200}).should('have.value',datatest.newFullname);
        page.getBtnSaveAdd().click();
        page.getAlertNotification().should('contain',datatest.departmentCreatedId);
    });

    it('Positive - Check New Data in Create User',() => {
        const user = new pageUser();
        user.getBtnAddUser().click();
        user.getFieldDepartment().click().type(datatest.newFullname);
        user.getListItemBranch().should('contain',datatest.newFullname);
    });
});

describe('Test Update Data',() => {
    it('Positive - Update Data Valid',() => {
        const page = new pageUserDepartment();
        page.getBtnMenuDepartment().click();
        page.getHeader().should('contain', datatest.headerMenu);
        page.getFieldSearch().type(`${datatest.newCode}{enter}`);
        page.getColCode1().should('contain',datatest.newCode);
        page.getColName1().should('contain',datatest.newFullname);
        page.getBtnEditData().click();
        page.getHeaderForm().should('contain',datatest.headerUpdateId);
        cy.wait(1000);
        page.getFieldCode().should('have.value',datatest.newCode).clear().type(datatest.editCode).should('have.value',datatest.editCode);
        cy.wait(1000);
        page.getFieldFullname().should('have.value',datatest.newFullname).clear().type(datatest.editName).should('have.value',datatest.editName);
        page.getBtnSaveAdd().click();
        page.getAlertNotification().should('contain',datatest.departmentUpdatedId);
    });

    it('Positive - Old Data Not Exist',() => {
        const page = new pageUserDepartment();
        page.getBtnMenuDepartment().click();
        page.getHeader().should('contain', datatest.headerMenu);
        page.getFieldSearch().type(`${datatest.newCode}{enter}`);
        page.getContainerListData().should('contain','No Data');
    });

    it('Positive - Validate Data After Update',() => {
        const page = new pageUserDepartment();
        page.getBtnMenuDepartment().click();
        page.getHeader().should('contain', datatest.headerMenu);
        page.getFieldSearch().type(`${datatest.editCode}{enter}`);
        page.getColCode1().should('contain',datatest.editCode);
        page.getColName1().should('contain',datatest.editName);
        page.getBtnEditData().click();
        page.getHeaderForm().should('contain',datatest.headerUpdateId);
        page.getFieldCode().should('have.value',datatest.editCode);
        page.getFieldFullname().should('have.value',datatest.editName);
    });

    it('Positive - Check Data After Update in Create User',() => {
        const user = new pageUser();
        user.getBtnAddUser().click();
        user.getFieldDepartment().click().type(datatest.newFullname);
        user.getModalListDepartment().should('contain','No Data');
        user.getHeaderForm().click();
        user.getFieldDepartment().click().type(datatest.editName);
        user.getListItemBranch().should('contain',datatest.editName);
    });
});

describe('Delete Data Department',() => {
    it('Negative - Cancel Delete Data',() => {
        const page = new pageUserDepartment();
        page.getBtnMenuDepartment().click();
        page.getHeader().should('contain', datatest.headerMenu);
        page.getFieldSearch().type(`${datatest.editCode}{enter}`);
        page.getColCode1().should('contain',datatest.editCode);
        page.getColName1().should('contain',datatest.editName);
        page.getBtnDeleteData().click();
        page.getModalDeleteData().should('contain',datatest.wordDeleteId);
        page.getBtnCancelDelete().click();
        page.getColCode1().should('contain',datatest.editCode);
        page.getColName1().should('contain',datatest.editName);
    });

    it('Positive - Delete Data',() => {
        const page = new pageUserDepartment();
        page.getBtnMenuDepartment().click();
        page.getHeader().should('contain', datatest.headerMenu);
        page.getFieldSearch().type(`${datatest.editCode}{enter}`);
        page.getColCode1().should('contain',datatest.editCode);
        page.getColName1().should('contain',datatest.editName);
        page.getBtnDeleteData().click();
        page.getModalDeleteData().should('contain',datatest.wordDeleteId);
        page.getBtnOKDelete().click();
        page.getAlertNotification().should('contain',datatest.departmentDeletedId);
        page.getContainerListData().should('contain','No Data');
    });
});