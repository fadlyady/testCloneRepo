class pageContact{
    //List Contact Object
    getSearchboxContact(){ return cy.get('.ant-input'); }
    getTitleContact(){return cy.get('.title-page-header'); }
    getButtonImport(){ return cy.get('.p-1 > .btn'); }
    getButtonExport(){ return cy.get('#contact-exports'); }
    getButtonAddContact(){ return cy.get('#contact-extra-btn-0'); }
    getButtonDetailContact(){ return cy.get('.icon-i-Eye'); }
    getButtonReloadContact(){ return cy.get(':nth-child(2) > :nth-child(4) > .row > :nth-child(1) > .btn > .icon-i-Eye'); }
    getButtonEditContact(){ return cy.get(':nth-child(2) > :nth-child(4) > .row > :nth-child(2) > .btn > .icon-i-PencilLine'); }
    getButtonDeleteContact(){ return cy.get(':nth-child(2) > :nth-child(4) > .row > :nth-child(3) > .btn > .icon-i-Trash'); }
    getButtonCancelDelete(){ return cy.get('.btn-deo-ghosted > span');}
    getButtonOkDelete(){ return cy.get('.ant-btn-primary');}
    getListContact(){ return cy.contains('Penerima 1'); }
    getEmptyState(){ return cy.get('.ant-empty-img-simple');}
    //alert list contact
    getAlertConfirmationDelete(){ return cy.get('.ant-modal-confirm-content');}
    //Search Result
    getResultFullname(){ return cy.get(':nth-child(2) > :nth-child(1) > .p-3 > .title-large'); }
    getResultPhoneNumber(){ return cy.get(':nth-child(2) > :nth-child(2) > .p-3 > .mt-1 > .col'); }
    getResultAddress(){ return cy.get(':nth-child(2) > .ant-table-cell-ellipsis > .text-left > .title-large > span'); }
    //Add Form Contact Object
    getFormName(){ return cy.get('#name'); }
    getFormPhone(){ return cy.get('.form-control'); }
    getFormEmail(){ return cy.get('#email'); }
    getFormCompanyName(){ return cy.get('#companyName'); }
    getFormNPWP(){ return cy.get('#NPWP'); }
    getFormNote(){ return cy.get('#note'); }
    getFormAddress(){ return cy.get('#address'); }
    getFormSubdistrict(){ return cy.get('#subdistrict'); }
    getFormSubdistrict1(){ return cy.get("div[label='Bandung Kidul, Kota Bandung, Jawa Barat']"); }
    getFormSubdistrict2(){ return cy.get("div[label='Bandung Wetan, Kota Bandung, Jawa Barat']"); }
    getFormPostalCode(){ return cy.get('#postalCode ', { timeout: 12000 }); }
    getFormPostalCode1(){ return cy.get("div[label='40115']", { timeout: 12000 }); }
    getButtonAddContactCancel(){ return cy.get('.row > .col > .btn-deo-basic'); }
    getButtonAddContactCancelX(){ return cy.get(':nth-child(5) > .ant-modal-root > .ant-modal-wrap > .ant-modal > .ant-modal-content > .ant-modal-close > .ant-modal-close-x > .icon-deo-close') }
    getButtonSave(){ return cy.get(':nth-child(3) > .row > .col > .btn-deo-secondary'); }
    getTitleAddContact(){return cy.get('#rcDialogTitle5'); }
    getButtonClose(){return cy.get(':nth-child(5) > .ant-modal-root > .ant-modal-wrap > .ant-modal > .ant-modal-content > .ant-modal-close > .ant-modal-close-x > .icon-deo-close'); }
    //alert form add contact
    getAlertFullNameRequired(){ return cy.get('.col-12 > :nth-child(1) > .ant-row > .ant-col > .ant-form-item-explain > div'); }
    getAlertPhoneNumberRequired(){ return cy.get('.col-12 > :nth-child(2) > .ant-row > .ant-col > .ant-form-item-explain > div'); }
    getAlertAddressRequired(){ return cy.get(':nth-child(7) > .ant-row > .ant-col > .ant-form-item-explain > div'); }
    getAlertDistrictRequired(){ return cy.get('.col-8 > .ant-row > .ant-col > .ant-form-item-explain > div'); }
    getAlertPostalCodeRequired(){ return cy.get('.col-4 > .ant-row > .ant-col > .ant-form-item-explain > div'); }
    getAlertContact(){ return cy.get('.ant-notification-notice-description');}
    //Detail Contact
    getTitleDetailContact(){ return  cy.get(':nth-child(7) > .ant-modal-root > .ant-modal-wrap > .ant-modal > .ant-modal-content > .ant-modal-header'); }
    getButtonCloseDetailContact(){ return cy.get(':nth-child(7) > .ant-modal-root > .ant-modal-wrap > .ant-modal > .ant-modal-content > .ant-modal-close > .ant-modal-close-x > .icon-deo-close'); }
    getDetailFullname(){ return cy.get('ul > :nth-child(4)'); }
    getDetailEmail(){ return cy.get('ul > :nth-child(6)'); }
    getDetailCompanyName(){ return cy.get('ul > :nth-child(8)'); }
    getDetailPhoneNumber(){ return cy.get('ul > :nth-child(10)'); }
    getDetailAddress(){ return cy.get(':nth-child(2) > .detail-contact-info-box > :nth-child(1) > :nth-child(2)'); }
    getDetailDistrict(){ return cy.get(':nth-child(1) > :nth-child(1) > .col-md'); }
    getDetailDistrictProvince(){ return cy.get(':nth-child(1) > :nth-child(2) > .col-md'); }
    getDetailDistrictCity(){ return cy.get(':nth-child(2) > :nth-child(1) > .col-md'); }
    getDetailPostalCode(){ return cy.get(':nth-child(2) > :nth-child(2) > .col-md'); }
    getDetailNote(){ return cy.get('.detail-contact-info-box > :nth-child(5) > :nth-child(2)'); }
    getDetailNPWP(){ return cy.get(':nth-child(1) > .detail-contact-info-box > ul > :nth-child(2)'); }
    //Edit Form Contact
    getButtonCancelEdit(){ return cy.get('.row > .col > .btn-deo-basic'); }
    getButtonCancelEditX(){ return cy.get(':nth-child(5) > .ant-modal-root > .ant-modal-wrap > .ant-modal > .ant-modal-content > .ant-modal-close > .ant-modal-close-x > .icon-deo-close') }
}
export default pageContact
