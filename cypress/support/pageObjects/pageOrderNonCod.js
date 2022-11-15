class ordernoncod{
    getBtnTambahOrder(){
        return cy.xpath("//button[contains(text(),'Tambah Order')]");
    }

    getListOrderPertama(){
        return cy.xpath("//tbody/tr[2]/td[3]");
    }

    getStatusPertama(){
        return cy.xpath("//tbody/tr[2]/td[9]/div[1]");
    }

    getBtnOpsiTindakan(){
        return cy.xpath("//tbody/tr[2]/td[10]/div[1]/button[1]/i[1]");
    }

    getListTindakanPertama(){
        return cy.xpath("(//ul[@role='menu'])[2]");
    }

    // page create order
    getHeaderBuatOrder(){
        return cy.get('.sub-title');
    }

    getFieldNamaPengirim(){
        return cy.get("#origin_contact_name");
    }

    getOptionTesterClodeo(){
        return cy.xpath("//span[contains(text(),'(Tester Clodeo)')]");
    }

    getFieldNomorTelepon(){
        return cy.get("#origin_contact_phone");
    }

    getFieldAlamatDetail(){
        return cy.get("#origin_contact_address");
    }

    getFieldKecamatan(){
        return cy.get("#origin_fake_subdistrict");
    }

    getFieldKodePos(){
        return cy.get("#origin_fake_postal_code");
    }

    getKodePosSelected(){
        return cy.get('.ant-select-selection-item');
    }

    getFieldNamaCabang(){
        return cy.get('#branch_name');
    }

    getFieldNamaDepartement(){
        return cy.get('#department_name');
    }

    getOpsiDepartemenOwner(){
        return cy.xpath("//span[contains(text(),'owner')]");
    }

    getBtnPinAlamat(){
        return cy.get('.col-lg-3 > .btn');
    }

    getBtnSimpanPickup(){
        return cy.get('.mt-3 > .btn-deo-primary');
        // return cy.xpath("//button[contains(text(),'Simpan')]");
    }

    getBtnGunakanHanySekali(){
        return cy.xpath("//button[contains(text(),'Gunakan Hanya Sekali')]");
    }

    getModalConfirmSimpanPickup(){
        return cy.xpath("(//div[@class='ant-modal-content'])[3]");
    }

    getBtnYaSayaYakin(){
        return cy.xpath("//button[contains(text(),'Ya, Saya Yakin')]");
    }

    getBtnCekKembali(){
        return cy.xpath("//button[contains(text(),'Cek Kembali')]");
    }

    getSummaryNamaPengirim(){
        return cy.get('.summary-content > :nth-child(1) > .d-flex');
    }

    getSummaryNomorTelepon(){
        return cy.get('.summary-content > :nth-child(2) > .d-flex');
    }

    getBtnBatalBuatOrder(){
        return cy.get('.mt-3 > .btn-deo-ghosted');
    }

    getModalBatalOrder(){
        return cy.xpath("(//div[@class='ant-modal-content'])[4]");
    }

    getBtnYaBatalkan(){
        return cy.xpath("(//div[@class='ant-modal-content'])[4]/div/div/div/div/div/div[2]");
    }

    // page Alamat Tujuan
    getTitleAlamatTujuan(){
        // return cy.xpath("//label[contains(text(),'Alamat Tujuan')]");
        return cy.get('.ant-collapse-item-active > .ant-collapse-header > .header-panel-wrapper > label');
    }

    getBtnIsDropship(){
        return cy.get('#is_dropship > .ant-switch-handle');
    }

    getFieldDropshipPengirim(){
        return cy.get("#dropship_name");
    }

    getFieldDropshipNomorTelepon(){
        return cy.get("#dropship_phone");
    }

    getFieldNamaPenerima(){
        return cy.get("#destination_contact_name");
    }

    getOpsiPenerima1(){
        return cy.xpath("//span[contains(text(),'Penerima 1 (tester4@gmail.com)')]");
    }

    getFieldNomorTeleponPenerima(){
        return cy.get("#destination_contact_phone");
    }

    getFieldAlamatDetailPenerima(){
        return cy.get("#destination_contact_address");
    }

    getFieldKecamataPenerima(){
        return cy.get("#destination_fake_subdistrict");
    }

    getFieldKodePosPenerima(){
        return cy.get("#destination_fake_postal_code");
    }

    getKodePosPenerimaSelected(){
        return cy.get('.ant-select-selection-item');
    }

    getBtnPinAlamatPenerima(){
        return cy.get('.col-lg-3 > .btn');
    }

    getLinkInformasiPaket(){
        return cy.get(':nth-child(2) > .ant-collapse-header');
    }

    getTitleFieldJenisPaket(){
        return cy.xpath("//label[contains(text(),'Jenis Paket')]");
    }

    getFieldTotalHarga(){
        return cy.xpath("(//input[starts-with(@id, 'inputNumber')])[1]");
    }

    getFieldBeratBarang(){
        return cy.xpath("(//input[starts-with(@id, 'inputNumber')])[2]");
    }

    getFieldPanjangBarang(){
        return cy.xpath("(//input[starts-with(@id, 'inputNumber')])[3]");
    }

    getFieldLebarBarang(){
        return cy.xpath("(//input[starts-with(@id, 'inputNumber')])[4]");
    }

    getFieldTinggiBarang(){
        return cy.xpath("(//input[starts-with(@id, 'inputNumber')])[5]");
    }

    getFieldNamaBarang(){
        return cy.get("#items_0_name");
    }

    getFieldQuantityBarang(){
        return cy.xpath("(//input[starts-with(@id, 'inputNumber')])[6]");
    }

    getLinkInformasiKurir(){
        return cy.get(":nth-child(3) > .ant-collapse-header > .header-panel-wrapper")
    }

    getBtnPilihKurirdanLayanan(){
        return cy.get('.align-items-end > .btn');
    }

    getHeaderModalPilihKurir(){
        return cy.xpath("(//*[starts-with(@id, 'rcDialogTitle')])[1]")
    }

    getOpsiKurirSiCepat(){
        return cy.xpath("//input[(@value='REG-sicepat')]");
    }

    getOpsiKurirSiUnt(){
        return cy.xpath("//input[(@value='SIUNT-sicepat')]");
    }

    getCheckBoxCheked(){
        return cy.xpath("(//span[(@class='ant-radio ant-radio-checked')])[2]");
    }

    getBtnSimpanKurir(){
        // return cy.xpath("//button[contains(text(),'Pilih')]");
        return cy.get('.ant-spin-container > .mt-3 > .btn-deo-primary');
    }

    getSectionInfoKurir(){
        return cy.get('.m-0');
    }

    getBtnAsuransiPengiriman(){
        return cy.get('#transaction_is_insuranced > .ant-switch-handle');
    }

    getFieldFeeAsuransi(){
        return cy.get(':nth-child(1) > .col > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > :nth-child(1) > span');
    }

    getBtnPackingKayu(){
        return cy.get('#transaction_is_wood_packing > .ant-switch-handle');
    }

    getFieldFeePacking(){
        return cy.get(':nth-child(2) > .col > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > :nth-child(1) > span');
    }

    getFieldCatatan(){
        return cy.get('#delivery_note');
    }

    getBtnSimpanOrder(){
        return cy.get('.ant-spin-container > .btn');
    }

    getNotifSimpanOrder(){
        return cy.get('.ant-notification-notice');
    }

    getCardOrderSummary(){
        return cy.xpath("(//div[(@class='ant-card-body')])[2]");
    }

    getBtnAturPengiriman(){
        return cy.get('.pr-0 > .btn');
    }

    getBtnSimpanDraft(){
        return cy.get('.pl-0 > .btn');
    }

    getModalKonfirmasiPengiriman(){
        return cy.xpath("(//div[(@class='ant-modal-body')])[6]");
    }

    getBtnYakinPengiriman(){
        return cy.xpath("//button[contains(text(),'Ya, Saya Yakin')]");
    }

    getModalSimpanDraft(){
        return cy.xpath("//h2[contains(text(),'Simpan Order')]");
    }

    getModalAturPengiriman(){
        return cy.xpath("//*[starts-with(@id, 'rcDialogTitle')]");
    }

    getRadioBtnPickup(){
        return cy.xpath("//input[@type='radio' and @value='pickup']");
    }

    getBtnLanjutPembayaran(){
        return cy.get('.arrange-shipment-container > .mt-4 > .col > .btn-deo-primary');
    }

    getFieldTanggalPickup(){
        return cy.xpath("//input[@placeholder='Date']");
    }

    getFieldWaktuPickup(){
        return cy.xpath("//input[@placeholder='Time']");
    }

    getModalPembayaran(){
        return cy.xpath("//*[starts-with(@id, 'rcDialogTitle')]");
    }

    getOpsiQRIS(){
        return cy.xpath("//span[contains(text(),'QRIS')]");
        // return cy.get('.payment-shipment > .ant-radio-group > .row > :nth-child(2)');
    }

    getOpsiBCA(){
        return cy.xpath("//span[contains(text(),'Bank Transfer (BCA)')]");
    }
    getOpsiInvoice(){
        return cy.xpath("//span[contains(text(),'Invoice')]");
    }

    getBtnBayar(){
        return cy.xpath("//button[contains(text(),'Bayar')]");
        // return cy.get('.payment-shipment > :nth-child(4) > .col > .btn-deo-primary');
    }

    getModalMenungguPembayaran(){
        return cy.xpath("//*[starts-with(@id, 'rcDialogTitle')]");
    }

    getBtnCloseModalPembayaran(){
        return cy.xpath("//*[starts-with(@aria-labelledby, 'rcDialogTitle')]//*[@type='button']");
    }

    getBtnCloseModalPembayaranEntry(){
        return cy.xpath("(//div[@class='ant-modal-content']/button[@type='button'])[5]");
    }

    getPilihanKurir(){
        return cy.xpath("(//*[(@class='mb-0')])[3]");
    }

    getBtnDeleteOrder(){
        return cy.xpath("//button[(@type='button')]//i[@class='icon-deo-trash']");
    }

    getModalKonfimasiDeleteOrder(){
        return cy.xpath("//div[(@class='ant-modal-confirm-body')]");
    }

    getBtnOkDeleteOrder(){
        return cy.xpath("//button[@type='button']//span[contains(text(),'Ok')]");
    }

    // Page Detail Order
    getNamaPengirim(){
        return cy.xpath("(//*[@class='field-group general-field-group'])[1]");
    }

    getTelponPengirim(){
        return cy.xpath("(//*[@class='field-group general-field-group'])[2]");
    }

    getEmailPengirim(){
        return cy.xpath("(//*[@class='field-group general-field-group'])[3]");
    }

    getAlamatPengirim(){
        return cy.xpath("(//*[@class='field-group general-field-group'])[4]");
    }

    getCabangPengirim(){
        return cy.xpath("(//*[@class='field-group general-field-group'])[5]");
    }

    getDepartemenPengirim(){
        return cy.xpath("(//*[@class='field-group general-field-group'])[6]");
    }

    getNamaPenerima(){
        return cy.xpath("(//*[@class='field-group general-field-group'])[7]");
    }

    getTeleponPenerima(){
        return cy.xpath("(//*[@class='field-group general-field-group'])[8]");
    }

    getEmailPenerima(){
        return cy.xpath("(//*[@class='field-group general-field-group'])[9]");
    }

    getAlamatPenerima(){
        return cy.xpath("(//*[@class='field-group general-field-group'])[10]");
    }

    getFieldDetailBarang(){
        return cy.xpath("//label[contains(text(),'Detail Barang')]");
    }

    getSectionEstimasiHarga(){
        return cy.xpath("//label[contains(text(),'Estimasi Harga')]");
    }

    getOngkosKirimDetail(){
        return cy.xpath("(//div[@class='field-group d-flex justify-content-between'])[3]/p/span");
    }

    getJenisBarang(){
        return cy.xpath("(//*[@class='field-group'])[6]");
    }

    getBeratBarang(){
        return cy.xpath("(//*[@class='field-group'])[7]");
    }

    getTotalHarga(){
        return cy.xpath("(//*[@class='field-group'])[8]");
    }

    getDimensiBarang(){
        return cy.xpath("(//*[@class='field-group'])[9]");
    }

    getNamaBarang(){
        // return cy.xpath("//tbody/tr/td[2]");
        return cy.get('tbody > tr > :nth-child(2)');
    }

    getFieldMetodePembayaran(){
        return cy.xpath("(//div[@class='field-group text-center'])[2]");
    }

    getFieldNoOrder(){
        return cy.xpath("(//div[@class='field-group text-left'])");
    }

    getNoResiDetail(){
        return cy.xpath("(//div[@class='header-information'])");
    }

    getFieldTipePengiriman(){
        return cy.xpath("(//div[@class='field-group text-center'])[1]");
    }

    getFieldStatusShipdeo(){
        return cy.xpath("(//div[@class='field-group'])[4]");
    }

    getBtnTindakan(){
        return cy.get('.action-detail > :nth-child(1) > .btn');
    }

    getBtnEditOrderEntry(){
        return cy.get(".ant-dropdown-menu-title-content > a");
    }

    getBtnRequestPickUpEntry(){
        return cy.xpath("(//*[@role='menuitem'])[2]");
    }

    getBtnCancelOrderEntry(){
        return cy.xpath("(//*[@role='menuitem'])[4]");
    }

    getModalCancelEntry(){
        return cy.xpath("//h2[contains(text(),'Cancel Order')]");
    }

    getBtnYaBatalkanOrder(){
        return cy.get('.confirm-dialog-content > .d-flex > :nth-child(2) > .btn');
    }

    // Field error
    getErrorNama(){
        return cy.xpath("(//div[@role='alert'])[1]");
    }

    getErrorTelepon(){
        return cy.xpath("(//div[@role='alert'])[2]");
    }

    getErrorTeleponFormat(){
        return cy.xpath("//div[@role='alert']");
    }

    getErrorAlamat(){
        return cy.xpath("(//div[@role='alert'])[3]");
    }

    getErrorKecamatan(){
        return cy.xpath("(//div[@role='alert'])[4]");
    }

    getErrorKodepos(){
        return cy.xpath("(//div[@role='alert'])[5]");
    }

    getErrorCabang(){
        return cy.xpath("(//div[@role='alert'])[6]");
    }
}
export default ordernoncod