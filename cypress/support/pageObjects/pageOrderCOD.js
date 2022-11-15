class pageOrderCOD{
getButtonCreateOrder(){ return cy.get('.d-flex > :nth-child(3) > .btn'); }
getTittleCreateOrder(){ return cy.get('strong'); }
getFieldNamaPengirim(){ return cy.get('#origin_contact_name', { timeout: 30000 }); }
getFieldNomorTelepon(){ return cy.get('#origin_contact_phone'); }
getFieldAlamat(){ return cy.get('#origin_contact_address'); }
getFieldKecamatan(){ return cy.get('#origin_fake_subdistrict'); }
getFieldKodePos(){ return cy.get('.ant-select-selection-item'); }
getFieldNamaCabang(){ return cy.get('#branch_name'); }
getFieldNamaDepartemen(){ return cy.get('#department_name'); }
getButtonAturPinAlamat(){ return cy.get('.col-lg-3 > .btn'); }
getButtonSimpan(){ return cy.get('.mt-3 > .btn-deo-primary'); }
getButtonCekKembali(){ return cy.get(':nth-child(9) > .ant-modal-root > .ant-modal-wrap > .ant-modal > .ant-modal-content > .ant-modal-body > .ant-spin-nested-loading > .ant-spin-container > .confirm-dialog-content > .d-flex > :nth-child(1) > .btn'); }
getButtonYaSayaYakin(){ return cy.get('.d-flex > :nth-child(2) > .btn'); }
getFieldNamaPenerima(){ return cy.get('#destination_contact_name'); }
getFieldNoTeleponPenerima(){ return cy.get('#destination_contact_phone'); }
getFieldKecamatanPenerima(){ return cy.get('#destination_fake_subdistrict'); }
getFieldKodePosPenerima(){ return cy.get('#destination_fake_postal_code'); }
getButtonSaveContact(){ return cy.get('#save_contact'); }
getButtonInformasiPaket(){ return cy.get(':nth-child(2) > .ant-collapse-header > .header-panel-wrapper > label'); }
getButtonInformasiKurir(){ return cy.get(':nth-child(3) > .ant-collapse-header > .header-panel-wrapper > label'); }
getButtonAturPinAlamat(){ return cy.get('.col-lg-3 > .btn'); }
getRadioButtonBarang(){ return cy.get('.false > .ant-radio-wrapper > :nth-child(2)'); }
getRadioButtonDokumen(){ return cy.get('.false > .ant-radio-wrapper > :nth-child(2)'); }
getRadioFieldTotalHarga(){ return cy.get('#inputNumber-deo-433'); }
getRadioFieldBerat(){ return cy.get('#inputNumber-deo-439'); }
getFieldPanjang(){ return cy.get('#inputNumber-deo-107'); }
getFieldLebar(){ return cy.get('#inputNumber-deo-110'); }
getFieldTinggi(){ return cy.get('#inputNumber-deo-325'); }
getButtonTambahBarang(){ return cy.get(':nth-child(4) > .d-flex > .btn'); }
getFieldNamaBarang(){ return cy.get('#items_0_name'); }
getFieldJumlahBarang(){ return cy.get('#inputNumber-deo-426'); }
getButtonPilihKurir(){ return cy.get('.align-items-end > .btn'); }
getButtonSimpanOrder(){ return cy.get('.align-items-end > .btn'); }
getButtonBatalOrder(){ return cy.get('.d-flex.mt-3 > .btn-deo-ghosted'); }
getLoadingBar(){ return cy.get('.ldio-ml7p8i9p8dk'); }
getRadioButtonSicepat(){ return cy.get(':nth-child(2) > .ant-radio-group > :nth-child(2)'); }
getButtonCancelPilihKurir(){ return cy.get('.ant-spin-container > .mt-3 > .btn-deo-ghosted'); }
getButtonSimpanPilihKurir(){ return cy.get('.ant-spin-container > .mt-3 > .btn-deo-primary'); }
getButtonPengirimanCOD(){ return cy.get('#is_cod > .ant-switch-handle'); }
getFieldTagihanCOD(){ return cy.xpath("(//input[starts-with(@id, 'inputNumber')])[7]");}
getFieldNotePengiriman(){ return cy.get('#delivery_note'); }
getFieldBatalPengiriman(){ return cy.get('.d-flex.mt-3 > .btn-deo-ghosted'); }
getFieldSimpanPengiriman(){ return cy.get('.ant-spin-container > .btn'); }
getNotification(){ return cy.get('.ant-notification-notice-description'); }
getButtonSimpanKeDraft(){ return cy.get('.pl-0 > .btn'); }
getButtonAturPengiriman(){ return cy.get('.pr-0 > .btn'); }
getButtonKembaliSimpanOrder(){ return cy.get(':nth-child(12) > .ant-modal-root > .ant-modal-wrap > .ant-modal > .ant-modal-content > .ant-modal-body > .ant-spin-nested-loading > .ant-spin-container > .confirm-dialog-content > .d-flex > :nth-child(1) > .btn'); }
getButtonYaSayaYakinOrder(){ return cy.get(':nth-child(12) > .ant-modal-root > .ant-modal-wrap > .ant-modal > .ant-modal-content > .ant-modal-body > .ant-spin-nested-loading > .ant-spin-container > .confirm-dialog-content > .d-flex > :nth-child(2) > .btn'); }
getButtonPickUp(){ return cy.get(':nth-child(1) > .box-shipment'); }
getButtonTanggalPickUp(){ return cy.get('.pr-0 > .ant-picker > .ant-picker-input > input'); }
getButtonWaktuPickUp(){ return cy.get(':nth-child(2) > .ant-picker > .ant-picker-input > input'); }
getButtonDropOff(){ return cy.get(':nth-child(2) > .box-shipment'); }
getButtonKembaliAturPengiriman(){ return cy.get('.arrange-shipment-container > .mt-4 > .col > .btn-deo-ghosted'); }
getButtonSimpanAturPengiriman(){ return cy.get('.arrange-shipment-container > .mt-4 > .col > .btn-deo-primary'); }
}
export default pageOrderCOD