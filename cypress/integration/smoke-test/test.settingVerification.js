
/// <reference types="cypress"/>
import pageSetting from '../../support/pageObjects/pageSetting';

beforeEach(() => {
    cy.loginViaAPI();
    cy.fixture('contact/dataSetting').then(function(data){
    this.data=data;
    cy.visit('/features/setting/verification');
    cy.get('.ant-tabs-nav-list > :nth-child(1)').click();
    });
});

describe('Setting - Verification Page Edit Profil Exist ', () => {
    it('Positive - Menu Company', function() {
        const setting = new pageSetting();
        setting.getLinkCompany().should('exist').click();
        setting.getAlertCompanyPerusahaan().should('contain',this.data.alertEditCompany)
        setting.getNamaPerusahaan().should('contain',this.data.namaPerusahaan);
        setting.getEmailPerusahaan().should('contain',this.data.emailPerusahaan);
        setting.getWebsitePerusahaan().should('contain',this.data.websitePerusahaan);
        setting.getNomorTeleponPerusahaan().should('contain',this.data.nomorTeleponPerusahaan);
        setting.getFaxPerusahaan().should('contain',this.data.faxPerusahaan);
        setting.getAlamatPerusahaan().should('contain',this.data.alamatPerusahaan);
    });

    it('Positive - Menu Perbankan', function() {
        const setting = new pageSetting();
        setting.getLinkPerbankan().should('exist').click();
        setting.getAlertCompanyPerusahaan().should('contain',this.data.alertEditCompany)
        setting.getNamaPerusahaan().should('contain',this.data.namaBank);
        setting.getEmailPerusahaan().should('contain',this.data.namaCabangBank);
        setting.getWebsitePerusahaan().should('contain',this.data.namaPemilikRekening);
        setting.getNomorTeleponPerusahaan().should('contain',this.data.nomorRekening);
    });

    it('Positive - Menu API Key', function() {
        const setting = new pageSetting();
        setting.getLinkAPIKey().should('exist').click();
        setting.getCardCreatePortalOrder().should('exist');
        setting.getCourierCeklist1().should('be.disabled');
        setting.getImageInformationCreatePortalOrder().should('contain',this.data.infoCreatePortalOrder);
        setting.getCardWoocommerce().should('exist');
        setting.getLabelNamaToko().should('contain',this.data.namaToko);
        setting.getLabelClientID().should('have.value',this.data.clientID);
        setting.getIconHideClientSecret().click();
        setting.getLabelClientSecret().should('have.value',this.data.clientSecret);
        setting.getLabelKurir().should('be.visible');
        cy.xpath("//div[@class='ant-select-selection-overflow-item']").should('have.length',11);
        setting.getLabelLayanan().should('contain',this.data.layanan);
        setting.getWoocommercePlugins().should('be.visible');
        setting.getShopifyPlugins().should('be.visible');
        setting.getMagentoPlugins().should('be.visible');
    });

    it('Positive - Menu Konfigurasi', function() {
        const setting = new pageSetting();
        setting.getLinkKonfigurasi().should('exist').click();
        setting.getCardInformasiPerusahaan().should('be.visible');
        setting.getCheckBoxChecked().should('have.length',2);
    });

    it('Positive - Menu Konfigurasi Uncheck', function() {
        const setting = new pageSetting();
        setting.getLinkKonfigurasi().should('exist').click();
        setting.getCardInformasiPerusahaan().should('be.visible');

        // Uncheck View Shipping Branch
        setting.getCheckBoxViewShippingBranch().click();
        setting.getNotification().should('be.visible').should('contain',this.data.notifKonfigurasiId);

        // Check View Shipping Branch
        setting.getCheckBoxViewShippingBranch().click();
        setting.getNotification().should('be.visible').should('contain',this.data.notifKonfigurasiId);

        // Uncheck View Shipping Department
        setting.getCheckBoxViewShippingDepartment().click();
        setting.getNotification().should('be.visible').should('contain',this.data.notifKonfigurasiId);

        // Check View Shipping Department
        setting.getCheckBoxViewShippingDepartment().click();
        setting.getNotification().should('be.visible').should('contain',this.data.notifKonfigurasiId);
    });
});

describe('Setting - Config Plugins ', () => {
    it('Negative - Empty Add New Plugins', function() {
        const setting = new pageSetting();
        setting.getLinkAPIKey().should('exist').click();
        setting.getBtnAddPlugins().click();
        setting.getContainerFormPlugins().should('be.visible');
        setting.getBtnSavePlugins().click();
        setting.getAlert1().should('contain',this.data.alertPlugins);
        setting.getAlert2().should('contain',this.data.alertPlugins);
        setting.getAlert3().should('contain',this.data.alertPlugins);
        setting.getAlert4().should('contain',this.data.alertPlugins);
    });

    it('Negative - Cancel Add New Plugins', function() {
        const setting = new pageSetting();
        setting.getLinkAPIKey().should('exist').click();
        setting.getBtnAddPlugins().click();
        setting.getContainerFormPlugins().should('be.visible');
        setting.getBtnCancelAddPlugins().click();
        setting.getContainerFormPlugins().should('not.exist');
    });

    it('Positive - Add New Plugins', function() {
        const setting = new pageSetting();
        setting.getLinkAPIKey().should('exist').click();
        setting.getBtnAddPlugins().click();
        setting.getContainerFormPlugins().should('be.visible');
        setting.getFieldType().click();
        setting.getOpsiWoocommerce().should('be.visible').click();
        setting.getFieldName().type('test woocommerce');
        setting.getFieldKurir().click();
        setting.getKurirSiCepat().should('be.visible').click();
        setting.getFieldKurir().should('contain','Sicepat Express');
        setting.getFieldKurir().click();
        setting.getCheckBoxOrder().click();
        setting.getCheckBoxChecked().should('have.length',1);
        setting.getBtnSavePlugins().click();
        setting.getNotification().should('be.visible').should('contain',this.data.notifAddPlugins);
    });
});

xdescribe('Setting - Verification Page Test ', () => {
    it('Negative - Cancel Update Verification Form', function() {
        const setting = new pageSetting();
        setting.getCompanyName().clear().type(this.data.company_name).should('have.value', this.data.company_name);
        setting.getCompanyEmail().clear().type(this.data.company_email).should('have.value', this.data.company_email);
        setting.getCompanyWebsite().clear().type(this.data.company_website).should('have.value', this.data.company_website);
        setting.getCompanyPhone().clear().type(this.data.company_phone).should('have.value', this.data.company_phone);
        setting.getCompanyFax().clear().type(this.data.company_fax).should('have.value', this.data.company_fax);
        setting.getCompanyAddress().clear().type(this.data.company_address).should('have.value', this.data.company_address);
        setting.getCompanyIdentityNumber().clear().type(this.data.company_noidentity).should('have.value', this.data.company_noidentity);
        setting.getCompanyIdentityName().clear().type(this.data.company_identityname).should('have.value', this.data.company_identityname);
        setting.getBankName().clear().type(this.data.company_bankname).should('have.value', this.data.company_bankname);
        setting.getBankAccountName().clear().type(this.data.company_accountownername).should('have.value', this.data.company_accountownername);
        setting.getBankAccountNumber().clear().type(this.data.company_accountnumber).should('have.value', this.data.company_accountnumber);
        setting.getBankBranch().clear().type(this.data.company_branch).should('have.value', this.data.company_branch);
        setting.getButtonCancel().click();
        setting.getCompanyName().should('have.value', this.data.result_cancel_company_name);
        setting.getCompanyEmail().should('have.value', this.data.result_cancel_company_email);
        setting.getCompanyWebsite().should('have.value', this.data.result_cancel_company_website);
        setting.getCompanyPhone().should('have.value', this.data.result_cancel_company_phone);
        setting.getCompanyFax().should('have.value', this.data.result_cancel_company_fax);
        setting.getCompanyAddress().should('have.value', this.data.result_cancel_company_address);
        setting.getCompanyIdentityNumber().should('have.value', this.data.result_cancel_company_noidentity);
        setting.getCompanyIdentityName().should('have.value', this.data.result_cancel_company_identityname);
        setting.getBankName().should('have.value', this.data.result_cancel_company_bankname);
        setting.getBankAccountName().should('have.value', this.data.result_cancel_company_accountownername);
        setting.getBankAccountNumber().should('have.value', this.data.result_cancel_company_accountnumber);
        setting.getBankBranch().should('have.value', this.data.result_cancel_company_branch);
    });

    it('Negative - Check Mandatory Field Verification', function() {
        const setting = new pageSetting();
        setting.getCompanyName().clear();
        setting.getCompanyEmail().clear();
        setting.getCompanyPhone().clear();
        setting.getCompanyAddress().clear();
        setting.getCompanyIdentityNumber().clear();
        setting.getCompanyIdentityName().clear();
        setting.getBankName().clear();
        setting.getBankAccountName().clear();
        setting.getBankAccountNumber().clear();
        setting.getBankBranch().clear();
        setting.getButtonSimpan().click();
        setting.getAlertCompanyNameRequired().should('have.text', this.data.alert_company_name_required);
        setting.getAlertCompanyEmailRequired().should('have.text', this.data.alert_company_email_required);
        setting.getAlertCompanyPhoneRequired().should('have.text', this.data.alert_company_phone_required);
        setting.getAlertCompanyAddressRequired().should('have.text', this.data.alert_company_address_required);
        setting.getAlertCompanyNoIdentityRequired().should('have.text', this.data.alert_company_noidentity_required);
        setting.getAlertCompanyIdentityNameRequired().should('have.text', this.data.alert_company_identityname_required);
        setting.getAlertCompanyBankNameRequired().should('have.text', this.data.alert_company_bankname_required);
        setting.getAlertCompanyAccountOwnerNameRequired().should('have.text', this.data.alert_company_accountownername_required);
        setting.getAlertCompanyAccountNumberRequired().should('have.text', this.data.alert_company_accountnumber_required);
        setting.getAlertCompanyBranchRequired().should('have.text', this.data.alert_company_branch_required);
    });

    it('Positive - Update Verification Form', function() {
        const setting = new pageSetting();
        setting.getCompanyName().clear().type(this.data.company_name).should('have.value', this.data.company_name);
        setting.getCompanyEmail().clear().type(this.data.company_email).should('have.value', this.data.company_email);
        setting.getCompanyWebsite().clear().type(this.data.company_website).should('have.value', this.data.company_website);
        setting.getCompanyPhone().clear().type(this.data.company_phone).should('have.value', this.data.company_phone);
        setting.getCompanyFax().clear().type(this.data.company_fax).should('have.value', this.data.company_fax);
        setting.getCompanyAddress().clear().type(this.data.company_address).should('have.value', this.data.company_address);
        setting.getCompanyIdentityNumber().clear().type(this.data.company_noidentity).should('have.value', this.data.company_noidentity);
        setting.getCompanyIdentityName().clear().type(this.data.company_identityname).should('have.value', this.data.company_identityname);
        setting.getBankName().clear().type(this.data.company_bankname).should('have.value', this.data.company_bankname);
        setting.getBankAccountName().clear().type(this.data.company_accountownername).should('have.value', this.data.company_accountownername);
        setting.getBankAccountNumber().clear().type(this.data.company_accountnumber).should('have.value', this.data.company_accountnumber);
        setting.getBankBranch().clear().type(this.data.company_branch).should('have.value', this.data.company_branch);
        // setting.getButtonSimpan().click();
        // setting.getNotification().should('have.text', this.data.notification_update_verification_success)
    });

    it('Positive - Expand Menu', function() {
        const setting = new pageSetting();
        setting.getTitle().should('have.text', this.data.title_page_verification);
        setting.getButtonExpandCompanyInfo().click();
        setting.getButtonDeleteImg().should('not.be.visible');
        setting.getButtonExpandIdentity().click();
        setting.getCompanyIdentityName().should('not.be.visible');
        setting.getButtonExpandBankInfo().click();
        setting.getBankName().should('not.be.visible');
        setting.getButtonExpandCompanyInfo1().click();
        setting.getButtonDeleteImg().should('be.visible');
        setting.getButtonExpandIdentity1().click();
        setting.getCompanyIdentityName().should('be.enabled');
        setting.getButtonExpandBankInfo1().click();
        setting.getBankName().should('be.enabled');
    });
});