
/// <reference types="cypress"/>
import pageSetting from '../../support/pageObjects/pageSetting';

beforeEach(() => {
    cy.loginViaAPI();
    cy.fixture('contact/dataSetting').then(function(data){
    this.data=data;
    cy.visit('/features/setting/profile');
    });
});

describe('Setting - Verification Page Test ', () => {
    it('Negative - Check Mandatory Field Profile', function() {
        const setting = new pageSetting();
        setting.getNameProfil().clear();
        setting.getButtonEditPassword().click();
        // cy.scrollTo();
        setting.getAlertProfileNameRequired().should('have.text', this.data.alert_profile_name_requiredId);
        // setting.getAlertProfileConfirmationPasswordRequired().should('have.text', this.data.alert_profile_confirmpassword_required);
        setting.getButtonEditProfileNumber().click();
        setting.getButtonKirimLinkLupaKataSandi().click();
        setting.getAlertProfilePhoneNumberRequeired().should('have.text', this.data.alert_profile_phone_requiredId);
    })

    it('Negative - Invalid OldPassword', function() {
        const setting = new pageSetting();
        // setting.getNameProfil().clear();
        setting.getButtonEditPassword().click();
        setting.getOldPassword().type(this.data.profile_oldpassword_invalid);
        setting.getNewPassword().type(this.data.profile_newpassword);
        setting.getConfirmNewPassword().type(this.data.profile_newpassword);
        setting.getButtonSimpan().click();
        setting.getNotification().should('contain', this.data.notification_invalid_old_password);
    })

    it('Negative - Invalid Confirmation Password', function() {
        const setting = new pageSetting();
        // setting.getNameProfil().clear();
        setting.getButtonEditPassword().click();
        setting.getOldPassword().type(this.data.profile_oldpassword);
        setting.getNewPassword().type(this.data.profile_newpassword);
        setting.getConfirmNewPassword().type(this.data.profile_newpassword_invalid);
        setting.getButtonSimpan().click();
        setting.getAlertConfirmPassword().should('contain', this.data.password_confirmation_not_match);
    })


})