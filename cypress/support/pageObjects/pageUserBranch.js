/// <reference types="cypress"/>

class pageUserBranch{
    // Page List Data Branch
    getHeader(){
        return cy.get('.order-0 > .d-flex');
    }

    getTableData(){
        return cy.get("tbody");
    }

    getBtnMenuBranch(){
        // return cy.get('.ant-tabs-nav-list > :nth-child(2)');
        return cy.xpath("//div[contains(text(),'Branch')]");
    }

    getBtnAddBranch(){
        return cy.get('#branch-extra-btn-0');
    }

    getBtnEditBranch1(){
        return cy.get('.row > :nth-child(2) > .btn');
    }

    getBtnViewDetailBranch1(){
        return cy.get('.row > :nth-child(1) > .btn');
    }

    getBtnDeleteBranch1(){
        return cy.get('.row > :nth-child(3) > .btn');
    }

    getFieldSearch(){
        return cy.get('.ant-input');
    }

    getBtnClearSearch(){
        return cy.get('.ant-input-suffix > .anticon > svg');
    }

    getAlertNotification(){
        return cy.get('.ant-notification-notice');
    }

    getContainerListData(){
        return cy.get('.ant-table-expanded-row-fixed');
    }


    // Form Add Data Branch
    getHeaderForm(){
        return cy.xpath("(//*[starts-with(@id, 'rcDialogTitle')])[2]");
    }

    getModalForm(){
        return cy.xpath("(//div[@class='ant-modal-content'])[3]");
    }

    getFieldCode(){
        return cy.get('#form-user_code');
    }

    getFieldBranchName(){
        return cy.get('#form-user_name');
    }

    getFieldShipperName(){
        return cy.get('#form-user_shipperName');
    }

    getFieldPhoneNumber(){
        return cy.get('#form-user_phone');
    }

    getFieldEmail(){
        return cy.get('#form-user_email');
    }

    getFieldNote(){
        return cy.get('#form-user_catatan');
    }

    getFieldAddress(){
        return cy.get('#form-user_alamat');
    }

    getFieldDisctrict(){
        return cy.get('#form-user_kecamatan');
    }

    getFieldPostalCode(){
        return cy.get('#form-user_postalCode');
    }

    getLinkShowMap(){
        // return cy.get('.col-12 > .ml-2');
        return cy.xpath("//a[contains(text(),'Buka Maps')]");
    }

    getBtnSimpan(){
        return cy.get('.ant-btn-primary');
    }

    getBtnCancel(){
        return cy.get('.ant-modal-footer > :nth-child(1)');
    }

    getBtnTerapkanMaps(){
        return cy.get('.pt-2 > .btn');
    }

    getErrorFieldCode(){
        return cy.get(':nth-child(2) > .col > .ant-row > .ant-col > .ant-form-item-explain > div');
    }

    getErrorFieldBranchName(){
        return cy.get(':nth-child(4) > .col > .ant-row > .ant-col > .ant-form-item-explain > div');
    }

    getErrorFieldShipperName(){
        return cy.get(':nth-child(6) > .col > .ant-row > .ant-col > .ant-form-item-explain > div');
    }

    getErrorFieldAddress(){
        return cy.get(':nth-child(14) > .col > .ant-row > .ant-col > .ant-form-item-explain > div');
    }

    getErrorFieldDistrict(){
        return cy.get('.col-lg-8 > .ant-row > .ant-col > .ant-form-item-explain > div');
    }

    getErrorFieldPostaCode(){
        return cy.get('.col-lg-4 > .ant-row > .ant-col > .ant-form-item-explain > div');
    }

    getFieldSearchMap(){
        return cy.get('.map-search > div > input');
    }

    getListItemPostal1(){
        return cy.xpath("(//*[starts-with(@class, 'ant-select-item-option-content')])[2]");
    }

    getBoxListKecamatan(){
        return cy.get('#form-user_kecamatan_list');
    }

    // form view detail
    getDataDistrict(){
        return cy.get(':nth-child(1) > :nth-child(1) > .row > .col-6');
    }

    getDataPostal(){
        return cy.get('.branch-info-detail > :nth-child(2) > :nth-child(2) > .row > .col-6');
    }

    getDataBranchCode(){
        return cy.get('.branch-info-detail > :nth-child(1) > .col-6');
    }

    getDataBranchName(){
        return cy.get(':nth-child(2) > .col-6');
    }

    getDataEmail(){
        return cy.get(':nth-child(3) > .col-6');
    }

    getDataPhone(){
        return cy.get(':nth-child(4) > .col-6');
    }

    getDataNote(){
        return cy.get(':nth-child(6) > .col-6');
    }

    // form edit data
    getFieldPostalExisting(){
        return cy.get("[title='15119']");
    }

    // pop up delete data
    getBtnCancelDelete(){
        return cy.get('.ant-modal-confirm-btns > .btn-deo-ghosted');
    }

    getBtnOkDelete(){
        return cy.get('.ant-btn-primary');
    }

    getModalDeleteData(){
        return cy.get('.ant-modal-confirm-body');
    }
}

export default pageUserBranch