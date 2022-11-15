/// <reference types="cypress"/>
import pageOrderCOD from '../../support/pageObjects/pageOrderCOD';

describe('OrderCOD Page Test ', () => {
    beforeEach(() => {
        cy.loginViaAPI();
        cy.fixture('order/dataOrderCOD').then(function(data){
        this.data=data;
    })
})
    it('Positive - Create Order COD', function() {
        const orderCOD = new pageOrderCOD();
        cy.visit('/features/shipment-order');
        orderCOD.getButtonCreateOrder().click();
        orderCOD.getTittleCreateOrder().should('be.visible');
        orderCOD.getFieldNamaPengirim().click();
        cy.contains('Cabang Pusat (Tester Clodeo)').click();
        orderCOD.getFieldNomorTelepon().clear().type(this.data.nomor_telepon_pengirim).should('have.value', this.data.nomor_telepon_pengirim);
        orderCOD.getFieldNamaDepartemen().type(this.data.nama_departemen);
        orderCOD.getFieldNamaDepartemen().click();
        // cy.contains('owner').click();
        orderCOD.getFieldNamaDepartemen().type('{downarrow}{enter}');
        orderCOD.getButtonSimpan().click();
        cy.contains('Alamat Pickup');
        orderCOD.getButtonYaSayaYakin().click();
        cy.contains('Alamat Tujuan');
        orderCOD.getFieldNamaPenerima().click();
        cy.contains('rizky').click();
        orderCOD.getFieldNamaPenerima().click();
        orderCOD.getButtonInformasiPaket().click();
        orderCOD.getFieldNamaBarang().should('be.visible');
        cy.contains('Rp').click().type(this.data.total_harga_barang);
        orderCOD.getFieldNamaBarang().type(this.data.nama_barang).should('have.value', this.data.nama_barang);
        orderCOD.getButtonInformasiKurir().click();
        orderCOD.getButtonPilihKurir().click();
        orderCOD.getLoadingBar().should('be.visible');        
        orderCOD.getRadioButtonSicepat().click();        
        orderCOD.getButtonSimpanPilihKurir().click();        
        orderCOD.getButtonPengirimanCOD().click();             
        orderCOD.getFieldNotePengiriman().type(this.data.note);  
        orderCOD.getFieldSimpanPengiriman().click();      
        orderCOD.getNotification().should('have.text', this.data.notification_success_menambah_pengiriman); 
        orderCOD.getButtonAturPengiriman().click();      
        cy.contains('Ya, Saya Yakin').click();      
        orderCOD.getButtonDropOff().click();    
        orderCOD.getButtonSimpanAturPengiriman().click();    
        orderCOD.getNotification().should('have.text', this.data.notification_success_create_order); 
    })
    it('Negative - Create Order COD Total Prices Less Than Rp. 13.500', function() {
        const orderCOD = new pageOrderCOD();
        cy.visit('/features/shipment-order');
        orderCOD.getButtonCreateOrder().click();
        orderCOD.getTittleCreateOrder().should('be.visible');
        orderCOD.getFieldNamaPengirim().click();
        cy.contains('Cabang Pusat (Tester Clodeo)').click();
        orderCOD.getFieldNomorTelepon().clear().type(this.data.nomor_telepon_pengirim).should('have.value', this.data.nomor_telepon_pengirim);
        orderCOD.getFieldNamaDepartemen().type(this.data.nama_departemen);
        orderCOD.getFieldNamaDepartemen().click();
        orderCOD.getFieldNamaDepartemen().type('{downarrow}{enter}');
        orderCOD.getButtonSimpan().click();
        cy.contains('Alamat Pickup');
        orderCOD.getButtonYaSayaYakin().click();
        cy.contains('Alamat Tujuan');
        orderCOD.getFieldNamaPenerima().click();
        cy.contains('rizky').click();
        orderCOD.getFieldNamaPenerima().click();
        orderCOD.getButtonInformasiPaket().click();
        orderCOD.getFieldNamaBarang().should('be.visible');
        cy.contains('Rp').click().type(this.data.total_harga_barang);
        orderCOD.getFieldNamaBarang().type(this.data.nama_barang).should('have.value', this.data.nama_barang);
        orderCOD.getButtonInformasiKurir().click();
        orderCOD.getButtonPilihKurir().click();
        orderCOD.getLoadingBar().should('be.visible');        
        orderCOD.getRadioButtonSicepat().click();        
        orderCOD.getButtonSimpanPilihKurir().click();        
        orderCOD.getButtonPengirimanCOD().click(); 
        orderCOD.getFieldTagihanCOD().click();
        orderCOD.getFieldTagihanCOD().clear().type(this.data.harga_cod_invalid);         
        orderCOD.getFieldNotePengiriman().click();  
        orderCOD.getNotification().should('have.text', this.data.notification_fail_prices)         
    })
})

