/// <reference types="cypress"/>

class pageUserDepartment{
    // Page List Data Branch
    getHeader(){
        return cy.get('.order-0 > .d-flex');
    }

    getBtnMenuDepartment(){
        return cy.get('.ant-tabs-nav-list > :nth-child(3)');
    }

    getBtnAddDepartment(){
        return cy.get('#department-extra-btn-0');
    }

    getTableDataDepartment(){
        return cy.get('.ant-table-body');
    }

    getFieldSearch(){
        return cy.get('.ant-input');
    }

    getAlertNotification(){
        return cy.get('.ant-notification-notice');
    }

    getColCode1(){
        return cy.get('.ant-table-row > :nth-child(1)');
    }

    getColName1(){
        return cy.get('.mt-1 > .col');
    }

    getBtnEditData(){
        return cy.xpath('(//div/button[@type="button"])[6]');
    }

    getBtnDeleteData(){
        return cy.xpath('(//div/button[@type="button"])[7]');
    }

    getContainerListData(){
        return cy.get('.ant-table-expanded-row-fixed');
    }

    // Modal Form Data
    getHeaderForm(){
        return cy.xpath("(//*[starts-with(@id, 'rcDialogTitle')])[2]");
    }

    getModalForm(){
        return cy.xpath("(//div[@class='ant-modal-content'])[3]");
    }

    getFieldCode(){
        return cy.get('#code');
    }

    getFieldFullname(){
        return cy.get('#name');
    }

    getBtnCancelAdd(){
        return cy.get('.ant-modal-footer > :nth-child(1)');
    }

    getBtnSaveAdd(){
        // return cy.get('.ant-btn-primary > span');
        return cy.xpath("//button[contains(text(),'Simpan')]");
    }

    getErrorCode(){
        return cy.get(':nth-child(2) > .col > .ant-row > .ant-col > .ant-form-item-explain > div');
    }

    getErrorName(){
        return cy.get(':nth-child(4) > .col > .ant-row > .ant-col > .ant-form-item-explain > div');
    }

    // Delete Data
    getModalDeleteData(){
        return cy.get('.ant-modal-confirm-body');
    }

    getBtnOKDelete(){
        return cy.get('.ant-btn-primary');
    }

    getBtnCancelDelete(){
        return cy.get('.ant-modal-confirm-btns > .btn-deo-ghosted');
    }
}

export default pageUserDepartment