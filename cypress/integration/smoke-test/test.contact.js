/// <reference types="cypress"/>
import pageContact from '../../support/pageObjects/pageContact';

describe('Contact Page Test ', () => {
    beforeEach(() => {
        cy.loginViaAPI();
        cy.fixture('contact/dataContact').then(function(data){
        this.data=data;
    })
})
    it('Negative - Search Contact Not found', function() {
        const contact = new pageContact();
        cy.visit('/features/contact');
        contact.getSearchboxContact().type(this.data.search_fullname_notfound).should('have.value', this.data.search_fullname_notfound);
        contact.getSearchboxContact().type('{enter}');
        contact.getEmptyState().should('be.visible');
    })

    it('Negative - Create Contact Empty Data', function() {
        const contact = new pageContact();
        cy.visit('/features/contact');
        contact.getButtonAddContact().click();
        contact.getTitleAddContact().should('have.text', this.data.header_2);
        contact.getButtonSave().click();
        contact.getAlertFullNameRequired().should('have.text', this.data.alert_fullname_req);
        contact.getAlertPhoneNumberRequired().should('have.text', this.data.alert_phonenumber_req);
        contact.getAlertAddressRequired().should('have.text', this.data.alert_address_req);
        contact.getAlertDistrictRequired().should('have.text', this.data.alert_district_req);
        contact.getAlertPostalCodeRequired().should('have.text', this.data.alert_postalcode_req);
        contact.getButtonAddContactCancel().click();
        contact.getTitleContact().should('have.text', this.data.header_1);
    })

    it('Negative - Cancel Create Contact', function() {
        const contact = new pageContact();
        cy.visit('/features/contact');
        contact.getButtonAddContact().click();
        contact.getTitleAddContact().should('have.text', this.data.header_2);
        contact.getButtonAddContactCancel().click();
        contact.getTitleContact().should('have.text', this.data.header_1);
        // contact.getButtonAddContact().click();
        // contact.getButtonAddContactCancelX().click();
    })

    it('Negative - Cancel Delete Contact', function() {
        const contact = new pageContact();
        cy.visit('/features/contact');
        contact.getButtonDeleteContact().click();
        contact.getAlertConfirmationDelete().should('be.visible');
        contact.getButtonCancelDelete().click();        
        contact.getTitleContact().should('have.text', this.data.header_1);
    })

    it('Negative - Cancel Edit Contact', function() {
        const contact = new pageContact();
        cy.visit('/features/contact');
        contact.getButtonEditContact().click();
        contact.getButtonCancelEdit().click();        
        contact.getTitleContact().should('have.text', this.data.header_1);
        // contact.getButtonEditContact().click();
        // contact.getButtonCancelEditX().click();     
        // contact.getTitleContact().should('have.text', this.data.header_1);
    })

    it('Negative - Create Contact Phone Number Already Exist', function() {
        const contact = new pageContact();
        cy.visit('/features/contact');
        contact.getButtonAddContact().click();
        contact.getFormName().type(this.data.fullName).should('have.value', this.data.fullName);
        contact.getFormPhone().type(this.data.phoneNumber_alreadyExist).should('have.value', this.data.phoneNumber_alreadyExist);
        contact.getFormEmail().type(this.data.email).should('have.value', this.data.email);
        contact.getFormCompanyName().type(this.data.companyName).should('have.value', this.data.companyName);
        contact.getFormNPWP().type(this.data.NPWP);
        contact.getFormNote().type(this.data.note).should('have.value', this.data.note);
        contact.getFormAddress().type(this.data.address).should('have.value', this.data.address);
        contact.getFormSubdistrict().type(this.data.edit_district).should('have.value', this.data.edit_district);
        contact.getFormSubdistrict1().should('be.visible').click();
        contact.getFormPostalCode().should('not.be.disabled');
        contact.getFormPostalCode().type(this.data.postalCode).should('have.value', this.data.postalCode);
        contact.getFormPostalCode().type('{downarrow}{enter}');
        contact.getButtonSave().click();
        contact.getAlertContact().should('have.text', this.data.alert_phone_alreadyexist);
    })

    it('Positive - Create Contact', function() {
        const contact = new pageContact();
        cy.visit('/features/contact');
        contact.getButtonAddContact().click();
        contact.getFormName().type(this.data.fullName).should('have.value', this.data.fullName);
        contact.getFormPhone().type(this.data.phoneNumber).should('have.value', this.data.phoneNumber);
        contact.getFormEmail().type(this.data.email).should('have.value', this.data.email);
        contact.getFormCompanyName().type(this.data.companyName).should('have.value', this.data.companyName);
        contact.getFormNPWP().type(this.data.NPWP);
        contact.getFormNote().type(this.data.note).should('have.value', this.data.note);
        contact.getFormAddress().type(this.data.address).should('have.value', this.data.address);
        contact.getFormSubdistrict().type(this.data.edit_district).should('have.value', this.data.edit_district);
        contact.getFormSubdistrict1().should('be.visible').click();
        contact.getFormPostalCode().should('not.be.disabled');
        contact.getFormPostalCode().type(this.data.postalCode).should('have.value', this.data.postalCode);
        contact.getFormPostalCode().type('{downarrow}{enter}');
        contact.getButtonSave().click();
        contact.getAlertContact().should('have.text', this.data.result_success_create_contact);
    })
    
    it('Positive - Search & Detail Contact', function() {
        const contact = new pageContact();
        cy.visit('/features/contact');
        contact.getSearchboxContact().type(this.data.search_fullname).should('have.value', this.data.search_fullname);
        contact.getSearchboxContact().type('{enter}');
        contact.getResultFullname().should('have.text', this.data.result_search_fullname);
        contact.getResultPhoneNumber().should('have.text', this.data.result_search_phonenumber);
        contact.getResultAddress().should('have.text', this.data.result_search_address);
        contact.getButtonDetailContact().click();
        contact.getDetailNPWP().should('have.text', this.data.NPWP);
        contact.getDetailFullname().should('have.text', this.data.fullName);
        contact.getDetailEmail().should('have.text', this.data.email);
        contact.getDetailCompanyName().should('have.text', this.data.companyName);
        contact.getDetailPhoneNumber().should('have.text', this.data.phoneNumber);
        contact.getDetailAddress().should('have.text', this.data.address);
        contact.getDetailDistrict().should('have.text', this.data.detail_district);
        contact.getDetailDistrictProvince().should('have.text', this.data.detail_districtprovince);
        contact.getDetailDistrictCity().should('have.text', this.data.detail_city);
        contact.getDetailPostalCode().should('have.text', this.data.postalCode);
        contact.getDetailNote().should('have.text', this.data.note);
    })

    it('Positive - Edit Contact', function() {
        const contact = new pageContact();
        cy.visit('/features/contact');
        contact.getSearchboxContact().type(this.data.search_fullname).should('have.value', this.data.search_fullname);
        contact.getSearchboxContact().type('{enter}');
        contact.getButtonEditContact().click();
        contact.getFormName().clear().type(this.data.edit_fullName).should('have.value', this.data.edit_fullName);
        contact.getFormPhone().clear().type(this.data.edit_phoneNumber).should('have.value', this.data.edit_phoneNumber);
        contact.getFormEmail().clear().type(this.data.edit_email).should('have.value', this.data.edit_email);
        contact.getFormCompanyName().clear().type(this.data.edit_companyName).should('have.value', this.data.edit_companyName);
        contact.getFormNPWP().clear().type(this.data.edit_NPWP);
        contact.getFormNote().clear().type(this.data.edit_note).should('have.value', this.data.edit_note);
        contact.getFormAddress().clear().type(this.data.edit_address).should('have.value', this.data.edit_address);
        contact.getFormSubdistrict().clear().type(this.data.edit_district).should('have.value', this.data.edit_district);
        contact.getFormSubdistrict2().should('be.visible').click();
        contact.getFormPostalCode().should('not.be.disabled');
        contact.getFormPostalCode().type(this.data.edit_postalCode, {force: true}).should('have.value', this.data.edit_postalCode);
        contact.getFormPostalCode().type('{downarrow}{enter}');
        contact.getButtonSave().click();
        contact.getAlertContact().should('have.text', this.data.result_success_update_contact);
        contact.getSearchboxContact().clear().type(this.data.search_fullname1).should('have.value', this.data.search_fullname1);
        contact.getSearchboxContact().type('{enter}');
        contact.getButtonDetailContact().click();
        contact.getDetailNPWP().should('have.text', this.data.edit_NPWP);
        contact.getDetailFullname().should('have.text', this.data.edit_fullName);
        contact.getDetailEmail().should('have.text', this.data.edit_email);
        contact.getDetailCompanyName().should('have.text', this.data.edit_companyName);
        contact.getDetailPhoneNumber().should('have.text', this.data.edit_phoneNumber);
        contact.getDetailAddress().should('have.text', this.data.edit_address);
        contact.getDetailDistrict().should('have.text', this.data.detail_district1);
        contact.getDetailDistrictProvince().should('have.text', this.data.detail_districtprovince);
        contact.getDetailDistrictCity().should('have.text', this.data.detail_city);
        contact.getDetailPostalCode().should('have.text', this.data.edit_postalCode);
        contact.getDetailNote().should('have.text', this.data.edit_note);
    })

    it('Positive - Delete Contact', function() {
        const contact = new pageContact();
        cy.visit('/features/contact');
        contact.getSearchboxContact().type(this.data.search_fullname1).should('have.value', this.data.search_fullname1);
        contact.getSearchboxContact().type('{enter}');
        contact.getButtonDeleteContact().click();
        contact.getAlertConfirmationDelete().should('be.visible');
        contact.getButtonOkDelete().click();
        contact.getAlertContact().should('have.text', this.data.result_success_delete_contact);
    })
})
