/// <reference types="cypress"/>
import pageOrder from '../../support/pageObjects/pageOrder';
import pageOrderCOD from '../../support/pageObjects/pageOrderCOD';

describe('Order Page Test ', () => {
    beforeEach(() => {
        cy.loginViaAPI();
        cy.fixture('order/dataOrder').then(function(data){
        this.data=data;
    })
})
    it('Positive - Search Order & Filter', function() {
        const order = new pageOrder();
        cy.visit('/features/order');
        order.getFilterOrderStatusConfirmed().click();
        order.getFieldSearch().type(this.data.search_awb);
        cy.get('.ant-picker').within(() => {
            order.getFilterStartDate().clear({force: true}).type(this.data.search_start_date, {force: true})
            order.getFilterEndDate().clear({force: true}).type(this.data.search_end_date, {force: true}).type('{enter}')
        })
        order.getFieldSearch().type('{enter}');
        order.getResultSearchAWB().should('have.text', this.data.search_awb);
        order.getResultSearchNoOrder().should('have.text', this.data.search_no_order);
        order.getResultSearchAddress().should('have.text', this.data.search_address);
        order.getResultSearchBranch().should('have.text', this.data.search_branch);
        order.getResultSearchPrices().should('have.text', this.data.search_prices);
        order.getResultSearchReceiverName().should('have.text', this.data.search_receiver_name);
        order.getResultSearchDeliveryStatus().should('have.text', this.data.search_delivery_status);
        order.getResultSearchOrderDate().should('have.text', this.data.search_order_date);
        order.getResultSearchDropshipStatus().should('have.text', this.data.search_dropship_status);
        order.getResultSearchOngkir().should('have.text', this.data.search_ongkir);
        order.getResultSearchAssurance().should('have.text', this.data.search_assurance);
        order.getResultSearchCODStatus().should('have.text', this.data.search_cod_status);
    })
    it('Positive - Header Filter', function() {
        const order = new pageOrder();
        cy.visit('/features/order');
        //Filter Order Entry
        order.getTableDataOrder().should('not.contain','CONFIRMED');
        order.getTableDataOrder().should('not.contain','OTHER');
        order.getTableDataOrder().should('not.contain','PROBLEM');
        order.getTableDataOrder().should('not.contain','ON PROGRESS');
        order.getTableDataOrder().should('not.contain','DELIVERED');
        order.getTableDataOrder().should('not.contain','CANCEL REQUEST');
        order.getTableDataOrder().should('not.contain','RETURNED');
        order.getTableDataOrder().should('not.contain','LOST BROKEN');
        order.getTableDataOrder().should('not.contain','CONFIRM PROBLEM');
        order.getTableDataOrder().should('not.contain','CANCELLED');
        order.getTableDataOrder().should('not.contain','ON HOLD');
        order.getTableDataOrder().should('not.contain','RETURNING');
        order.getTableDataOrder().should('not.contain','PICKED');
        //Filter Order CONFIRMED
        order.getFilterOrderStatusConfirmed().click();
        order.getFilterOrderEntry().click();
        order.getTableDataOrder().should('not.contain','ENTRY');
        order.getTableDataOrder().should('not.contain','OTHER');
        order.getTableDataOrder().should('not.contain','PROBLEM');
        order.getTableDataOrder().should('not.contain','ON PROGRESS');
        order.getTableDataOrder().should('not.contain','DELIVERED');
        order.getTableDataOrder().should('not.contain','CANCEL REQUEST');
        order.getTableDataOrder().should('not.contain','RETURNED');
        order.getTableDataOrder().should('not.contain','LOST BROKEN');
        order.getTableDataOrder().should('not.contain','CONFIRM PROBLEM');
        order.getTableDataOrder().should('not.contain','CANCELLED');
        order.getTableDataOrder().should('not.contain','ON HOLD');
        order.getTableDataOrder().should('not.contain','RETURNING');
        order.getTableDataOrder().should('not.contain','PICKED');
        //Filter Order OTHER
        order.getFilterOrderStatusConfirmed().click();
        order.getFilterOrderOther().click();
        order.getTableDataOrder().should('not.contain','ENTRY');
        order.getTableDataOrder().should('not.contain','COMFIRMED');
        order.getTableDataOrder().should('not.contain','PROBLEM');
        order.getTableDataOrder().should('not.contain','ON PROGRESS');
        order.getTableDataOrder().should('not.contain','DELIVERED');
        order.getTableDataOrder().should('not.contain','CANCEL REQUEST');
        order.getTableDataOrder().should('not.contain','RETURNED');
        order.getTableDataOrder().should('not.contain','LOST BROKEN');
        order.getTableDataOrder().should('not.contain','CONFIRM PROBLEM');
        order.getTableDataOrder().should('not.contain','CANCELLED');
        order.getTableDataOrder().should('not.contain','ON HOLD');
        order.getTableDataOrder().should('not.contain','RETURNING');
        order.getTableDataOrder().should('not.contain','PICKED');
        //Filter Order PROBLEM
        order.getFilterOrderProblem().click();
        order.getFilterOrderOther().click();
        order.getTableDataOrder().should('not.contain','ENTRY');
        order.getTableDataOrder().should('not.contain','COMFIRMED');
        order.getTableDataOrder().should('not.contain','OTHER');
        order.getTableDataOrder().should('not.contain','ON PROGRESS');
        order.getTableDataOrder().should('not.contain','DELIVERED');
        order.getTableDataOrder().should('not.contain','CANCEL REQUEST');
        order.getTableDataOrder().should('not.contain','RETURNED');
        order.getTableDataOrder().should('not.contain','LOST BROKEN');
        order.getTableDataOrder().should('not.contain','CONFIRM PROBLEM');
        order.getTableDataOrder().should('not.contain','CANCELLED');
        order.getTableDataOrder().should('not.contain','ON HOLD');
        order.getTableDataOrder().should('not.contain','RETURNING');
        order.getTableDataOrder().should('not.contain','PICKED');
        //Filter Order ON PROGRESS
        order.getFilterOrderProblem().click();
        order.getFilterOrderOnProgress().click();
        order.getTableDataOrder().should('not.contain','ENTRY');
        order.getTableDataOrder().should('not.contain','COMFIRMED');
        order.getTableDataOrder().should('not.contain','OTHER');
        order.getTableDataOrder().should('not.contain','PROBLEM');
        order.getTableDataOrder().should('not.contain','DELIVERED');
        order.getTableDataOrder().should('not.contain','CANCEL REQUEST');
        order.getTableDataOrder().should('not.contain','RETURNED');
        order.getTableDataOrder().should('not.contain','LOST BROKEN');
        order.getTableDataOrder().should('not.contain','CONFIRM PROBLEM');
        order.getTableDataOrder().should('not.contain','CANCELLED');
        order.getTableDataOrder().should('not.contain','ON HOLD');
        order.getTableDataOrder().should('not.contain','RETURNING');
        order.getTableDataOrder().should('not.contain','PICKED');
        //Filter Order DELIVERED
        order.getFilterOrderDelivered().click();
        order.getFilterOrderOnProgress().click();
        order.getTableDataOrder().should('not.contain','ENTRY');
        order.getTableDataOrder().should('not.contain','COMFIRMED');
        order.getTableDataOrder().should('not.contain','OTHER');
        order.getTableDataOrder().should('not.contain','PROBLEM');
        order.getTableDataOrder().should('not.contain','ON PROGRESS');
        order.getTableDataOrder().should('not.contain','CANCEL REQUEST');
        order.getTableDataOrder().should('not.contain','RETURNED');
        order.getTableDataOrder().should('not.contain','LOST BROKEN');
        order.getTableDataOrder().should('not.contain','CONFIRM PROBLEM');
        order.getTableDataOrder().should('not.contain','CANCELLED');
        order.getTableDataOrder().should('not.contain','ON HOLD');
        order.getTableDataOrder().should('not.contain','RETURNING');
        order.getTableDataOrder().should('not.contain','PICKED');
        //Filter Order CANCEL REQUEST
        order.getFilterOrderDelivered().click();
        order.getFilterOrderCancelRequest().click();
        order.getTableDataOrder().should('not.contain','ENTRY');
        order.getTableDataOrder().should('not.contain','COMFIRMED');
        order.getTableDataOrder().should('not.contain','OTHER');
        order.getTableDataOrder().should('not.contain','PROBLEM');
        order.getTableDataOrder().should('not.contain','ON PROGRESS');
        order.getTableDataOrder().should('not.contain','DELIVERED');
        order.getTableDataOrder().should('not.contain','RETURNED');
        order.getTableDataOrder().should('not.contain','LOST BROKEN');
        order.getTableDataOrder().should('not.contain','CONFIRM PROBLEM');
        order.getTableDataOrder().should('not.contain','CANCELLED');
        order.getTableDataOrder().should('not.contain','ON HOLD');
        order.getTableDataOrder().should('not.contain','RETURNING');
        order.getTableDataOrder().should('not.contain','PICKED');
        //Filter Order RETURNED
        order.getFilterOrderCancelRequest().click();
        order.getFilterOrderReturned().click();
        order.getTableDataOrder().should('not.contain','ENTRY');
        order.getTableDataOrder().should('not.contain','COMFIRMED');
        order.getTableDataOrder().should('not.contain','OTHER');
        order.getTableDataOrder().should('not.contain','PROBLEM');
        order.getTableDataOrder().should('not.contain','ON PROGRESS');
        order.getTableDataOrder().should('not.contain','DELIVERED');
        order.getTableDataOrder().should('not.contain','CANCEL REQUEST');
        order.getTableDataOrder().should('not.contain','LOST BROKEN');
        order.getTableDataOrder().should('not.contain','CONFIRM PROBLEM');
        order.getTableDataOrder().should('not.contain','CANCELLED');
        order.getTableDataOrder().should('not.contain','ON HOLD');
        order.getTableDataOrder().should('not.contain','RETURNING');
        order.getTableDataOrder().should('not.contain','PICKED');
        //Filter Order LOST BROKEN
        order.getFilterOrderLostBroken().click();
        order.getFilterOrderReturned().click();
        order.getTableDataOrder().should('not.contain','ENTRY');
        order.getTableDataOrder().should('not.contain','COMFIRMED');
        order.getTableDataOrder().should('not.contain','OTHER');
        order.getTableDataOrder().should('not.contain','PROBLEM');
        order.getTableDataOrder().should('not.contain','ON PROGRESS');
        order.getTableDataOrder().should('not.contain','DELIVERED');
        order.getTableDataOrder().should('not.contain','CANCEL REQUEST');
        order.getTableDataOrder().should('not.contain','RETURNED');
        order.getTableDataOrder().should('not.contain','CONFIRM PROBLEM');
        order.getTableDataOrder().should('not.contain','CANCELLED');
        order.getTableDataOrder().should('not.contain','ON HOLD');
        order.getTableDataOrder().should('not.contain','RETURNING');
        order.getTableDataOrder().should('not.contain','PICKED');
        //Filter Order CONFIRM PROBLEM
        order.getFilterOrderLostBroken().click();
        order.getFilterOrderConfirmProblem().click();
        order.getTableDataOrder().should('not.contain','ENTRY');
        order.getTableDataOrder().should('not.contain','COMFIRMED');
        order.getTableDataOrder().should('not.contain','OTHER');
        order.getTableDataOrder().should('contain','CONFIRM PROBLEM');
        order.getTableDataOrder().should('not.contain','ON PROGRESS');
        order.getTableDataOrder().should('not.contain','DELIVERED');
        order.getTableDataOrder().should('not.contain','CANCEL REQUEST');
        order.getTableDataOrder().should('not.contain','RETURNED');
        order.getTableDataOrder().should('not.contain','LOST BROKEN');
        order.getTableDataOrder().should('not.contain','CANCELLED');
        order.getTableDataOrder().should('not.contain','ON HOLD');
        order.getTableDataOrder().should('not.contain','RETURNING');
        order.getTableDataOrder().should('not.contain','PICKED');
        //Filter Order Cancelled
        order.getFilterOrderCancelled().click();
        order.getFilterOrderConfirmProblem().click();
        order.getTableDataOrder().should('not.contain','ENTRY');
        order.getTableDataOrder().should('not.contain','COMFIRMED');
        order.getTableDataOrder().should('not.contain','OTHER');
        order.getTableDataOrder().should('not.contain','PROBLEM');
        order.getTableDataOrder().should('not.contain','ON PROGRESS');
        order.getTableDataOrder().should('not.contain','DELIVERED');
        order.getTableDataOrder().should('not.contain','CANCEL REQUEST');
        order.getTableDataOrder().should('not.contain','RETURNED');
        order.getTableDataOrder().should('not.contain','LOST BROKEN');
        order.getTableDataOrder().should('not.contain','CONFIRM PROBLEM');
        order.getTableDataOrder().should('not.contain','ON HOLD');
        order.getTableDataOrder().should('not.contain','RETURNING');
        order.getTableDataOrder().should('not.contain','PICKED');
        //Filter Order ON HOLD
        order.getFilterOrderCancelled().click();
        order.getFilterOrderOnHold().click();
        order.getTableDataOrder().should('not.contain','ENTRY');
        order.getTableDataOrder().should('not.contain','COMFIRMED');
        order.getTableDataOrder().should('not.contain','OTHER');
        order.getTableDataOrder().should('not.contain','PROBLEM');
        order.getTableDataOrder().should('not.contain','ON PROGRESS');
        order.getTableDataOrder().should('not.contain','DELIVERED');
        order.getTableDataOrder().should('not.contain','CANCEL REQUEST');
        order.getTableDataOrder().should('not.contain','RETURNED');
        order.getTableDataOrder().should('not.contain','LOST BROKEN');
        order.getTableDataOrder().should('not.contain','CONFIRM PROBLEM');
        order.getTableDataOrder().should('not.contain','CANCELLED');
        order.getTableDataOrder().should('not.contain','RETURNING');
        order.getTableDataOrder().should('not.contain','PICKED');
        //Filter Order RETURNING
        order.getFilterOrderReturning().click();
        order.getFilterOrderOnHold().click();
        order.getTableDataOrder().should('not.contain','ENTRY');
        order.getTableDataOrder().should('not.contain','COMFIRMED');
        order.getTableDataOrder().should('not.contain','OTHER');
        order.getTableDataOrder().should('not.contain','PROBLEM');
        order.getTableDataOrder().should('not.contain','ON PROGRESS');
        order.getTableDataOrder().should('not.contain','DELIVERED');
        order.getTableDataOrder().should('not.contain','CANCEL REQUEST');
        order.getTableDataOrder().should('not.contain','RETURNED');
        order.getTableDataOrder().should('not.contain','LOST BROKEN');
        order.getTableDataOrder().should('not.contain','CONFIRM PROBLEM');
        order.getTableDataOrder().should('not.contain','CANCELLED');
        order.getTableDataOrder().should('not.contain','ON HOLD');
        order.getTableDataOrder().should('not.contain','PICKED');
        //Filter Order PICKED
        order.getFilterOrderReturning().click();
        order.getFilterOrderPicked().click();
        order.getTableDataOrder().should('not.contain','ENTRY');
        order.getTableDataOrder().should('not.contain','COMFIRMED');
        order.getTableDataOrder().should('not.contain','OTHER');
        order.getTableDataOrder().should('not.contain','PROBLEM');
        order.getTableDataOrder().should('not.contain','ON PROGRESS');
        order.getTableDataOrder().should('not.contain','DELIVERED');
        order.getTableDataOrder().should('not.contain','CANCEL REQUEST');
        order.getTableDataOrder().should('not.contain','RETURNED');
        order.getTableDataOrder().should('not.contain','LOST BROKEN');
        order.getTableDataOrder().should('not.contain','CONFIRM PROBLEM');
        order.getTableDataOrder().should('not.contain','CANCELLED');
        order.getTableDataOrder().should('not.contain','ON HOLD');
        order.getTableDataOrder().should('not.contain','RETURNING');
    })

    it('Positive - Print Label Pengiriman', function() {
        const order = new pageOrder();
        cy.visit('/features/order');
        order.getFilterOrderStatusConfirmed().click();
        order.getFieldSearch().type(this.data.search_awb);
        cy.get('.ant-picker').within(() => {
            order.getFilterStartDate().clear({force: true}).type(this.data.search_start_date, {force: true})
            order.getFilterEndDate().clear({force: true}).type(this.data.search_end_date, {force: true}).type('{enter}')
        })
        order.getFieldSearch().type('{enter}');
        order.getButtonPrint().click();
        order.getLabelPrint().should('have.text', this.data.label_pengiriman);
        order.getResultEmbedPrint().should('be.visible');
    })
    it('Positive - More Filter', function() {
        const order = new pageOrder();
        cy.visit('/features/order');
        order.getFilterOrderStatusConfirmed().click();
        order.getFieldSearch().type(this.data.search_awb);
        order.getButtonRemoveDateFilter().click();
        order.getFieldSearch().type('{enter}');
        order.getButtonMoreFilter().click();
        order.getLabelMoreFilter().should('have.text', this.data.label_more_filter);
        order.getFieldMoreFilterStartDate().clear({force: true}).type(this.data.search_start_date, {force: true})
        order.getFieldMoreFilterEndDate().clear({force: true}).type(this.data.search_end_date, {force: true}).type('{enter}')
        order.getButtonMoreFilterDate().click();
        order.getButtonMoreFilterStatus().click();
        order.getButtonMoreFilterStatusConfirmed().click();
        order.getButtonMoreFilterStatus().click();
        order.getButtonMoreFilterDestination().click();
        order.getButtonMoreFilterDestinationKotaBandung().click();
        order.getButtonMoreFilterDestination().click();
        order.getButtonMoreFilterPayment().click();
        order.getButtonMoreFilterPaymentNonCOD().click();
        order.getButtonMoreFilterPayment().click();
        order.getButtonMoreFilterBranch().click();
        order.getButtonMoreFilterBranchCabangPusat().click();
        order.getButtonMoreFilterBranch().click();
        order.getButtonMoreFilterDepartment().click();
        order.getButtonMoreFilterDepartmentOwner().click();
        order.getButtonMoreFilterApply().click();
        order.getResultSearchAWB().should('have.text', this.data.search_awb);
        order.getResultSearchNoOrder().should('have.text', this.data.search_no_order);
        order.getResultSearchAddress().should('have.text', this.data.search_address);
        order.getResultSearchBranch().should('have.text', this.data.search_branch);
        order.getResultSearchPrices().should('have.text', this.data.search_prices);
        order.getResultSearchReceiverName().should('have.text', this.data.search_receiver_name);
        order.getResultSearchDeliveryStatus().should('have.text', this.data.search_delivery_status);
        order.getResultSearchOrderDate().should('have.text', this.data.search_order_date);
        order.getResultSearchDropshipStatus().should('have.text', this.data.search_dropship_status);
        order.getResultSearchOngkir().should('have.text', this.data.search_ongkir);
        order.getResultSearchAssurance().should('have.text', this.data.search_assurance);
        order.getResultSearchCODStatus().should('have.text', this.data.search_cod_status);
    })
    it('Negative - Search Order Not Found', function() {
        const order = new pageOrder();
        cy.visit('/features/order');
        order.getFieldSearch().type(this.data.search_awb_notfound);
        order.getFieldSearch().type('{enter}');
        order.getAlertAWBNotFound().should('have.text', this.data.alert_awb_notfound);
    })
    it('Negative - More Filter Not Found', function() {
        const order = new pageOrder();
        cy.visit('/features/order');
        order.getFilterOrderStatusConfirmed().click();
        order.getFieldSearch().type(this.data.search_awb_notfound);
        order.getButtonRemoveDateFilter().click();
        order.getFieldSearch().type('{enter}');
        order.getButtonMoreFilter().click();
        order.getLabelMoreFilter().should('have.text', this.data.label_more_filter);
        order.getFieldMoreFilterStartDate().clear({force: true}).type(this.data.search_start_date, {force: true})
        order.getFieldMoreFilterEndDate().clear({force: true}).type(this.data.search_end_date, {force: true}).type('{enter}')
        order.getButtonMoreFilterDate().click();
        order.getButtonMoreFilterStatus().click();
        order.getButtonMoreFilterStatusConfirmed().click();
        order.getButtonMoreFilterStatus().click();
        order.getButtonMoreFilterDestination().click();
        order.getButtonMoreFilterDestinationKotaBandung().click();
        order.getButtonMoreFilterDestination().click();
        order.getButtonMoreFilterPayment().click();
        order.getButtonMoreFilterPaymentNonCOD().click();
        order.getButtonMoreFilterPayment().click();
        order.getButtonMoreFilterBranch().click();
        order.getButtonMoreFilterBranchCabangPusat().click();
        order.getButtonMoreFilterBranch().click();
        order.getButtonMoreFilterDepartment().click();
        order.getButtonMoreFilterDepartmentOwner().click();
        order.getButtonMoreFilterApply().click();
        order.getAlertAWBNotFound().should('have.text', this.data.alert_awb_notfound);
    })
    // it('Negative - More Filter', function() {
    //     const order = new pageOrder();
    //     cy.visit('/features/order');
    //     order.getFilterOrderStatusConfirmed().click();
    //     order.getFieldSearch().type(this.data.search_awb);
    //     order.getButtonRemoveDateFilter().click();
    //     order.getFieldSearch().type('{enter}');
    //     order.getButtonMoreFilter().click();
    //     order.getLabelMoreFilter().should('have.text', this.data.label_more_filter);
    //     order.getFieldMoreFilterStartDate().clear({force: true}).type(this.data.search_start_date, {force: true})
    //     order.getFieldMoreFilterEndDate().clear({force: true}).type(this.data.search_end_date, {force: true}).type('{enter}')
    //     order.getButtonMoreFilterDate().click();
    //     order.getButtonMoreFilterStatus().click();
    //     order.getButtonMoreFilterStatusConfirmed().click();
    //     order.getButtonMoreFilterStatus().click();
    //     order.getButtonMoreFilterDestination().click();
    //     order.getButtonMoreFilterDestinationKotaBandung().click();
    //     order.getButtonMoreFilterDestination().click();
    //     order.getButtonMoreFilterPayment().click();
    //     order.getButtonMoreFilterPaymentNonCOD().click();
    //     order.getButtonMoreFilterPayment().click();
    //     order.getButtonMoreFilterBranch().click();
    //     order.getButtonMoreFilterBranchCabangPusat().click();
    //     order.getButtonMoreFilterBranch().click();
    //     order.getButtonMoreFilterDepartment().click();
    //     order.getButtonMoreFilterDepartmentOwner().click();
    //     order.getFieldSearch().type(this.data.search_awb_notfound);
    //     order.getButtonMoreFilterApply().click();
    //     order.getAlertAWBNotFound().should('have.text', this.data.alert_awb_notfound);
    // })
})
describe('Order Page New Order Test ', () => {
    beforeEach(() => {
        cy.loginViaAPI();
        cy.fixture('order/dataOrderCOD').then(function(data){
        this.data=data;
    })
})

    it('Positive - Create New Order From Order Page', function() {
        const order = new pageOrder();
        const orderCOD = new pageOrderCOD();
        cy.visit('/features/order');
        order.getButtonNewOrder().click();
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
})
