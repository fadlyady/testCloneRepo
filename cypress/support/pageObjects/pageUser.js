/// <reference types="cypress"/>

class pageUser{
    // Menu List Data
    getFieldSearch(){
        return cy.get("[type='text']");
    }

    getBtnAddUser(){
        return cy.get("#user-extra-btn-0");
    }

    getTableDataUser(){
        return cy.get(".ant-table-body");
    }

    getTotalItemText(){
        return cy.get('.total');
    }

    getBtnClearSearch(){
        return cy.get('.ant-input-clear-icon');
    }

    getViewData3(){
        return cy.get(':nth-child(4) > :nth-child(6) > .row > :nth-child(1) > .btn')
    }

    getEditData3(){
        return cy.get('tr:nth-of-type(4) > td:nth-of-type(6) > .justify-conent-center.no-select-text.row > div:nth-of-type(2) > .btn.btn-deo-md.btn-deo-secondary.eye-btn.p-1');
    }

    getDeleteData3(){
        return cy.get(':nth-child(4) > :nth-child(6) > .row > :nth-child(3) > .btn');
    }

    getEditData3(){
        return cy.get(':nth-child(4) > :nth-child(6) > .row > :nth-child(2) > .btn > .icon-i-PencilLine');
    }

    getModalDeleteData(){
        // return cy.get(':nth-child(11) > .ant-modal-root > .ant-modal-wrap > .ant-modal > .ant-modal-content > .ant-modal-body');
        return cy.xpath("(//div[@class='ant-modal-content']/div[@class='ant-modal-body'])[3]");
    }

    getBtnCancelDeleteData(){
        return cy.get('.ant-modal-confirm-btns > .btn-deo-ghosted');
    }

    getBtnOKDeleteData(){
        return cy.get('.ant-btn-primary');
    }

    getNameList3(){
        return cy.get(':nth-child(4) > :nth-child(2) > .p-3 > :nth-child(1) > .co');
    }

    getCodeUserLIst3(){
        return cy.get('.ant-table-tbody > :nth-child(4) > :nth-child(1) > .row > .col');
    }

    getEmailUserList3(){
        return cy.get(':nth-child(4) > :nth-child(2) > .p-3 > .mt-1 > .col');
    }

    getPhoneUserList3(){
        return cy.get(':nth-child(4) > :nth-child(3) > .p-3 > .mt-1 > .col');
    }

    getBtnEksportData(){
        return cy.get('button#user-exports');
    }

    getBtnImportData(){
        return cy.get('.btn.btn-deo-basic.btn-deo-md.btn-deo-success-base.p-2.px-3');
    }

    getLoadingStatus(){
        return cy.get('.ant-spin-text');
    }

    // Form Data New User
    getHeaderForm(){
        return cy.xpath("(//*[starts-with(@id, 'rcDialogTitle')])[2]");
    }

    getModalForm(){
        return cy.xpath("(//div[@class='ant-modal-content'])[3]");
    }

    getFieldCode(){
        return cy.get('#code');
    }

    getFieldFullName(){
        return cy.get('#name');
    }

    getFieldPhoneNumber(){
        return cy.get('#phone');
    }

    getFieldEmail(){
        return cy.get('#email');
    }

    getFieldBranch(){
        return cy.get('#cabang');
    }

    getFieldBranchSelected(){
        return cy.xpath("(//div[@class='ant-select-selector'])[2]");
    }

    getListBranch1(){
        return cy.get("div[label='Tester Clodeo'] > .ant-select-item-option-content");
    }

    getFieldDepartment(){
        return cy.get('#departement');
    }

    getFieldDepartmentSelected(){
        return cy.xpath("(//div[@class='ant-select-selector'])[3]");
    }

    getListDepartment1(){
        return cy.get("[departmentcode='owner'] .ant-select-item-option-content");
    }

    getLihatPengirimanCabang(){
        return cy.get('#isShowOnlyBranch');
    }

    getLihatPengirimanDepartment(){
        return cy.get('#isShowOnlyDepartement');
    }

    getLinkGeneratePassword(){
        return cy.get(".btn.btn-deo-ghosted.btn-deo-md.p-1");
    }

    getBtnCopyPassword(){
        return cy.get('.icon-deo-copy');
    }

    getBtnCancel(){
        // return cy.get(".ant-modal-footer > :nth-child(1) > span");
        return cy.xpath("//button[contains(text(),'Batal')]");
    }

    getBtnSave(){
        // return cy.get('.ant-btn-primary');
        return cy.xpath("//button[contains(text(),'Simpan')]");
    }

    getBtnCloseForm(){
        return cy.xpath("(//div[@class='ant-modal-content']/button/span)[3]");
    }

    getFieldPassword(){
        return cy.get('#password');
    }

    getAlertFieldCode(){
        // return cy.get(':nth-child(2) > .col > .ant-row > .ant-col > .ant-form-item-explain > div');
        return cy.xpath("(//div[@role='alert'])[1]");
    }

    getAlertFieldFullName(){
        // return cy.get(':nth-child(4) > .col > .ant-row > .ant-col > .ant-form-item-explain > div');
        return cy.xpath("(//div[@role='alert'])[2]");
    }

    getAlertPhoneNumber(){
        // return cy.get(':nth-child(6) > .col > .ant-row > .ant-col > .ant-form-item-explain > div');
        return cy.xpath("(//div[@role='alert'])[3]");
    }

    getAlertEmail(){
        // return cy.get(':nth-child(8) > .col > .ant-row > .ant-col > .ant-form-item-explain > div');
        return cy.xpath("(//div[@role='alert'])[4]");
    }

    getAlertFieldBranch(){
        // return cy.get(':nth-child(10) > .col > .ant-row > .ant-col > .ant-form-item-explain > div');
        return cy.xpath("(//div[@role='alert'])[5]");
    }

    getAlertFieldDepartment(){
        // return cy.get(':nth-child(13) > .col > .ant-row > .ant-col > .ant-form-item-explain > div');
        return cy.xpath("(//div[@role='alert'])[6]");
    }

    getAlertFieldPassword(){
        // return cy.get('.col-lg-6 > .ant-row > .ant-col > .ant-form-item-explain > div');
        return cy.xpath("(//div[@role='alert'])[7]");
    }

    getModalListBranch(){
        return cy.get('#cabang_list');
    }

    getListItemBranch(){
        return cy.get('.ant-select-dropdown');
    }

    getModalListDepartment(){
        return cy.get('#departement_list');
    }

    getModalAlertResponse(){
        return cy.get('.ant-notification-notice');
    }

    getBtnDeleteBranch(){
        return cy.get('.ant-select-selection-item-remove');
    }

    getBtnDeleteDepartment(){
        return cy.get('.ant-select-selection-item-remove');
    }

    // Form Update Data
    getHeaderUpdateDate(){
        return cy.xpath("(//*[starts-with(@id, 'rcDialogTitle')])[2]");
    }

    // Form Detail User
    getContainerUser(){
        return cy.xpath("//div[@class='user-detail-info-box']");
    }

    getContainerDeparment(){
        return cy.xpath("//div[@class='user-detail-info-box mt-3']");
    }

    getContainerBranch(){
        return cy.xpath("//div[@class='col-lg-6 user-detail-info-box']");
    }

    getColCode(){
        return cy.xpath("(//div[@class='user-detail-info-box']//div//div[@class='col-6 text-right'])[1]");
    }

    getColName(){
        return cy.xpath("(//div[@class='user-detail-info-box']//div//div[@class='col-6 text-right'])[2]");
    }

    getColEmail(){
        return cy.xpath("(//div[@class='user-detail-info-box']//div//div[@class='col-6 text-right'])[3]");
    }

    getColPhone(){
        return cy.xpath("(//div[@class='user-detail-info-box']//div//div[@class='col-6 text-right'])[4]");
    }
}

export default pageUser