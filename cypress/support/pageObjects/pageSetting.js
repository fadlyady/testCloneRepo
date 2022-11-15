class pageContact{
    getNotification(){return cy.get('.ant-notification-notice');}
    //Setting - Verificarion Form
    getTitle(){ return cy.get('.sub-title') }
    getNavVerification(){ return cy.get('.ant-tabs-nav-list > :nth-child(1)'); }
    getCompanyName(){return cy.get('#companyName'); }
    getCompanyEmail(){return cy.get('#companyEmail'); }
    getCompanyWebsite(){return cy.get('#companyWebsite'); }
    getCompanyPhone(){return cy.get('#companyPhone'); }
    getCompanyFax(){return cy.get('#companyFax'); }
    getCompanyIdentityNumber(){return cy.get('#userIdentityNumber'); }
    getCompanyIdentityName(){return cy.get('#userIdentityName'); }
    getCompanyAddress(){return cy.get('#companyAddress'); }
    getBankName(){return cy.get('#bankName'); }
    getBankAccountName(){return cy.get('#bankAccountName'); }
    getBankAccountNumber(){return cy.get('#bankAccountNumber'); }
    getBankBranch(){return cy.get('#bankBranch'); }
    getButtonExpandCompanyInfo(){return cy.get('#company-info > .ant-collapse-header > .expand-icon-wrapper > .icon-i-CaretDown');}
    getButtonExpandCompanyInfo1(){return cy.get('#company-info > .ant-collapse-header > .expand-icon-wrapper');}
    getButtonExpandIdentity(){return cy.get('#identity > .ant-collapse-header > .expand-icon-wrapper > .icon-i-CaretDown');}
    getButtonExpandIdentity1(){return cy.get('#identity > .ant-collapse-header > .expand-icon-wrapper');}
    getButtonExpandBankInfo(){return cy.get('#bank-info > .ant-collapse-header > .expand-icon-wrapper > .icon-i-CaretDown');}
    getButtonExpandBankInfo1(){return cy.get('#bank-info > .ant-collapse-header > .expand-icon-wrapper');}
    getButtonEditNumber(){return cy.get('.text-link');}
    getButtonSimpan(){return cy.get('.btn-deo-primary');}
    getAlertTittleLupaKataSandi(){return cy.get('.change-phone-component > .title');}
    getAlertLupaKataSandi(){return cy.get('.change-phone-component > .py-3');}
    getAlertCompanyNameRequired(){return cy.get('#company-info > .ant-collapse-content > .ant-collapse-content-box > .form-wrapper > :nth-child(1) > :nth-child(1) > .ant-row > .ant-col > .ant-form-item-explain > div');}
    getAlertCompanyEmailRequired(){return cy.get('#company-info > .ant-collapse-content > .ant-collapse-content-box > .form-wrapper > :nth-child(1) > :nth-child(2) > .ant-row > .ant-col > .ant-form-item-explain > div');}
    getAlertCompanyPhoneRequired(){return cy.get('#company-info > .ant-collapse-content > .ant-collapse-content-box > .form-wrapper > :nth-child(2) > :nth-child(2) > .ant-row > .ant-col > .ant-form-item-explain > div');}
    getAlertCompanyAddressRequired(){return cy.get('.col-lg-12 > .ant-row > .ant-col > .ant-form-item-explain > div');}
    getAlertCompanyNoIdentityRequired(){return cy.get('#identity > .ant-collapse-content > .ant-collapse-content-box > .form-wrapper > .row > :nth-child(1) > .ant-row > .ant-col > .ant-form-item-explain > div');}
    getAlertCompanyIdentityNameRequired(){return cy.get('#identity > .ant-collapse-content > .ant-collapse-content-box > .form-wrapper > .row > :nth-child(2) > .ant-row > .ant-col > .ant-form-item-explain > div');}
    getAlertCompanyBankNameRequired(){return cy.get('#bank-info > .ant-collapse-content > .ant-collapse-content-box > .form-wrapper > :nth-child(1) > :nth-child(1) > .ant-row > .ant-col > .ant-form-item-explain > div');}
    getAlertCompanyAccountOwnerNameRequired(){return cy.get('#bank-info > .ant-collapse-content > .ant-collapse-content-box > .form-wrapper > :nth-child(1) > :nth-child(2) > .ant-row > .ant-col > .ant-form-item-explain > div');}
    getAlertCompanyAccountNumberRequired(){return cy.get(':nth-child(2) > :nth-child(1) > .ant-row > .ant-col > .ant-form-item-explain > div');}
    getAlertCompanyBranchRequired(){return cy.get('#bank-info > .ant-collapse-content > .ant-collapse-content-box > .form-wrapper > :nth-child(2) > :nth-child(2) > .ant-row > .ant-col > .ant-form-item-explain > div');}
    
    getAlertConfirmPassword(){
        return cy.get('.ant-form-item-explain > div');
    }

    getLinkCompany(){
        return cy.xpath("//div[contains(text(),'Company')]");
    }
    
    getLinkPerbankan(){
        return cy.xpath("//div[contains(text(),'Perbankan')]");
    }
    
    getLinkAPIKey(){
        return cy.xpath("//div[contains(text(),'API Key')]");
    }
    
    getLinkKonfigurasi(){
        return cy.xpath("//div[contains(text(),'Konfigurasi')]");
    }
    
    getCardInformasiPerusahaan(){
        return cy.xpath("//div[@class='ant-card-body']");
    }

    // Page Company
    getNamaPerusahaan(){
        return cy.xpath("(//div[@class='control-value'])[1]")
    }

    getEmailPerusahaan(){
        return cy.xpath("(//div[@class='control-value'])[2]")
    }

    getWebsitePerusahaan(){
        return cy.xpath("(//div[@class='control-value'])[3]")
    }

    getNomorTeleponPerusahaan(){
        return cy.xpath("(//div[@class='control-value'])[4]")
    }

    getFaxPerusahaan(){
        return cy.xpath("(//div[@class='control-value'])[5]")
    }

    getAlamatPerusahaan(){
        return cy.xpath("(//div[@class='control-value'])[6]")
    }

    getAlertCompanyPerusahaan(){
        return cy.xpath("//div[@class='alert warning']");
    }

    // Page API Key
    getCardCreatePortalOrder(){
        return cy.xpath("(//div[@class='ant-card ant-card-bordered card-deo '])[1]");
    }

    getCardWoocommerce(){
        return cy.xpath("(//div[@class='ant-card ant-card-bordered card-deo '])[2]")
    }

    getCourierCeklist1(){
        return cy.xpath("(//input[@type='checkbox'])[1]");
    }

    getImageInformationCreatePortalOrder(){
        return cy.xpath("//div[@class='col-lg-6 align-self-center text-center create-image']");
    }

    getLabelNamaToko(){
        return cy.xpath("//strong[contains(text(),'Shop Tester')]");
    }

    getLabelClientID(){
        return cy.get("#clientId");
    }

    getLabelClientSecret(){
        return cy.get("#clientSecret");
    }

    getLabelKurir(){
        return cy.xpath("//div[@class='ant-select-selection-overflow']");
    }
    
    getLabelLayanan(){
        return cy.xpath("(//div[@class='col-lg-4'])[5]");
    }

    getIconHideClientSecret(){
        return cy.xpath("(//span[@role='img'])[2]");
    }

    getBtnAddWoocommerce(){
        return cy.xpath("//button[contains(text(),'Add')]");
    }

    getWoocommercePlugins(){
        return cy.get("#woocommerce-box");
    }

    getShopifyPlugins(){
        return cy.get("#shopify-box");
    }

    getMagentoPlugins(){
        return cy.get("#magento-box");
    }

    // Add Plugins
    getBtnAddPlugins(){
        return cy.xpath("//button[contains(text(),'Add')]");
    }

    getContainerFormPlugins(){
        return cy.xpath("(//div[@class='ant-card ant-card-bordered card-deo '])[3]");
    }

    getBtnSavePlugins(){
        return cy.xpath("//button[contains(text(),'Save')]");
    }

    getBtnCancelAddPlugins(){
        return cy.xpath("//button[contains(text(),'Cancel')]");
    }

    getFieldType(){
        return cy.get("#type");
    }

    getFieldName(){
        return cy.get("#name");
    }

    getFieldKurir(){
        return cy.xpath("(//div[@class='ant-select-selector'])[3]");
    }

    getOpsiWoocommerce(){
        return cy.xpath("//div[@label='Woocommerce']");
    }

    getKurirSiCepat(){
        return cy.xpath("//div[@label='Sicepat Express']");
    }

    getCheckBoxOrder(){
        return cy.xpath("(//input[@type='checkbox'])[20]");
    }

    getAlert1(){
        return cy.xpath("(//div[@role='alert'])[1]");
    }

    getAlert2(){
        return cy.xpath("(//div[@role='alert'])[2]");
    }

    getAlert3(){
        return cy.xpath("(//div[@role='alert'])[3]");
    }

    getAlert4(){
        return cy.xpath("(//div[@role='alert'])[4]");
    }

    // Page Konfigurasi
    getCheckBoxChecked(){
        return cy.xpath("//span[@class='ant-checkbox ant-checkbox-checked']");
    }

    getCheckShippingBranch(){
        return cy.xpath("(//input[@type='checkbox'])[1]");
    }

    getCheckShippingDepartment(){
        return cy.xpath("(//input[@type='checkbox'])[2]");
    }

    //Setting - Profil Form
    getNameProfil(){return cy.get('#name'); }
    getEmailProfil(){return cy.get('#email'); }
    getButtonEditProfileNumber(){return cy.get(':nth-child(4) > .form-group > .d-flex > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .text-link') }
    getPhoneProfil(){return cy.get('#phone'); }
    getPhonePopUpProfil(){return cy.get('.form-group > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input-group-wrapper > .ant-input-wrapper > #phone'); }
    getOldPassword(){return cy.get('#oldPassword'); }
    getNewPassword(){return cy.get('#newPassword'); }
    getConfirmNewPassword(){return cy.get('#confirmNewPassword'); }
    getButtonEditPassword(){return cy.get('.icon-i-PencilLine');}
    getButtonXEditPassword(){return cy.get('.btn > .icon-i-X');}
    getButtonLupaKataSandi(){return cy.get('.mb-5 > .ant-card > .ant-card-body > :nth-child(1) > .col-lg-12 > :nth-child(1) > .d-flex > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .text-link');}
    getButtonEmailLupaKataSandi(){return cy.get('.text-right > .btn-deo-ghosted');}
    getButtonCancel(){return cy.get('.text-right > .btn-deo-ghosted');}
    getButtonDeleteImg(){return cy.get('.d-flex > .btn-deo-ghosted');}
    getButtonUploadImg(){return cy.get('.d-flex > .btn-deo-tertiary');}
    getButtonKirimLinkLupaKataSandi(){return cy.get('.ant-form > .btn');}
    getAlertProfileNameRequired(){return cy.get(':nth-child(1) > :nth-child(2) > .ant-row > .ant-col > .ant-form-item-explain > div');}
    getAlertProfileConfirmationPasswordRequired(){return cy.get(':nth-child(2) > :nth-child(2) > .ant-row > .ant-col > .ant-form-item-explain > div'); }
    getAlertProfilePhoneNumberRequeired(){return cy.get('.form-group > .ant-row > .ant-col > .ant-form-item-explain > div');}
    getAlertProfileConfirmInvalid(){return cy.get('.ant-form-item-explain > div');}
    //Setting - Company
    getEmptyStateCompany(){return cy.get('.empty-state-ilustration');}
    getButtonLengkapiDataBank(){return cy.get('.empty-state > button');}
    //Setting - Bank
    getEmptyStateBank(){return cy.get('.empty-state-ilustration');}
    getButtonLengkapiDataBank(){return cy.get('.empty-state > button');}
    //Setting - API Key
    getAPITitle(){return cy.get('.row > :nth-child(1) > .m-0'); }
    getShopName(){return cy.get('#name'); }
    getClientId(){return cy.get('#clientId'); }
    getClientSecret(){return cy.get('#clientSecret'); }
    //Setting - Configuration
    getCheckBoxViewShippingBranch(){return cy.get('.mb-1 > .ant-checkbox-wrapper > :nth-child(2) > .checkbox-item');}
    getCheckBoxViewShippingDepartment(){return cy.get('.mt-1 > .ant-checkbox-wrapper > :nth-child(2) > .checkbox-item');}    
}
export default pageContact
