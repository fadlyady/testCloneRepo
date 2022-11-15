/// <reference types="cypress"/>
import pageFinanceInvoice from '../../support/pageObjects/pageFinanceInvoice';

describe('Finance > Invoice Page Test ', () => {
    beforeEach(() => {
        cy.loginViaAPI();
        cy.fixture('finance/invoice/dataInvoice').then(function(data){
        this.data=data;
        cy.visit('/features/finance/invoice');
    })
})  
    it('Positive - Search Invoice', function() {
        const invoice = new pageFinanceInvoice();
        invoice.getLabelTitlePage().should('have.text', this.data.label_page);
        invoice.getFieldSearch().type(this.data.search_invoice_valid).should('have.value', this.data.search_invoice_valid);
        invoice.getFieldSearch().type('{enter}');
        invoice.getTableData().should('contain', this.data.search_invoice_valid);
        invoice.getTableData().should('contain', this.data.due_date1);
        invoice.getTableData().should('contain', this.data.issue_date1);
        invoice.getTableData().should('contain', this.data.status_date);
        invoice.getTableData().should('contain', this.data.total_amount);
        invoice.getTableData().should('contain', this.data.paid_amount);
        invoice.getTableData().should('contain', this.data.total_discount1);
        invoice.getTableData().should('contain', this.data.tenant_name);
        invoice.getTableData().should('contain', this.data.amount);
        //check detail
        // invoice.get
})

    it('Positive - Filter Header Invoice', function() {
        const invoice = new pageFinanceInvoice();
        //Filter Paid
        invoice.getLabelTitlePage().should('have.text', this.data.label_page);
        invoice.getFilterHeaderPaid().click();
        invoice.getTableData().should('contain', 'Lunas');
        invoice.getTableData().should('not.contain', 'Menunggu Konfirmasi');
        invoice.getTableData().should('not.contain', 'Kedaluwarsa');
        invoice.getFilterHeaderPaidCounter().('text').as('paidcounter') 
        cy.then(function(){
            invoice.getFilterTotalInvoice().should('have.text', 'Total '+this.paidcounter+' items');
        })
        //Filter UnPaid
        invoice.getFilterHeaderUnPaid().click();
        invoice.getTableData().should('not.contain', 'Lunas');
        invoice.getTableData().should('not.contain', 'Menunggu Konfirmasi');
        invoice.getTableData().should('contain', 'Kedaluwarsa');
        invoice.getFilterHeaderUnPaidCounter().('text').as('unpaidcounter') 
        cy.then(function(){
            invoice.getFilterTotalInvoice().should('have.text', 'Total '+this.unpaidcounter+' items');
        })
        //Filter Waiting Payment & Confirmation
        invoice.getFilterHeaderWaitingPayment().click();
        invoice.getTableData().should('not.contain', 'Lunas');
        invoice.getTableData().should('contain', 'Menunggu Konfirmasi');
        invoice.getTableData().should('not.contain', 'Kedaluwarsa');
        invoice.getFilterHeaderWaitingPaymentCounter().invoke('text').as('waitingcounter') 
        cy.then(function(){
            invoice.getFilterTotalInvoice().should('have.text', 'Total '+this.waitingcounter+' items');
        })
        //Filter Total Discount
        invoice.getFilterHeaderTotalDiscount().click();
        invoice.getFilterHeaderTotalDiscountCounter().invoke('text').as('discount') 
        cy.then(function(){
            invoice.getFilterTotalInvoice().should('have.text', 'Total '+this.discount+' items');
        })
        // invoice.getTableData().should('not.contain', 'Rp. 0');  
    })
    it('Negative - Search Invoice Not Found', function() {
        const invoice = new pageFinanceInvoice();
        invoice.getLabelTitlePage().should('have.text', this.data.label_page);
        invoice.getFieldSearch().type(this.data.search_invoice_invalid).should('have.value', this.data.search_invoice_invalid);
        invoice.getFieldSearch().type('{enter}');
        invoice.getAlertNoData().should('have.text', this.data.alert_data_notfound);
    })
    it('Negative - Search AWB Not Found', function() {
        const invoice = new pageFinanceInvoice();
        invoice.getLabelTitlePage().should('have.text', this.data.label_page);
        invoice.getFieldSearch().type(this.data.search_invoice_valid).should('have.value', this.data.search_invoice_valid);
        invoice.getFieldSearch().type('{enter}');
        invoice.getTableData().should('contain', this.data.search_invoice_valid);
        invoice.getInvoiceList().click();
        invoice.getLabelDetailInvoice().should('be.visible');
        invoice.getFieldSearchAWB().type(this.data.awb_invalid).should('have.value', this.data.awb_invalid);
        invoice.getFieldSearchAWB().type('{enter}');
        invoice.getAlertNoData().should('have.text', this.data.alert_data_notfound);
    })
    it('Negative - Search & Filter Notfound', function() {
        const invoice = new pageFinanceInvoice();
        invoice.getLabelTitlePage().should('have.text', this.data.label_page);
        invoice.getFieldSearch().type(this.data.search_invoice_valid).should('have.value', this.data.search_invoice_valid);
        invoice.getFieldSearch().type('{enter}');
        invoice.getTableData().should('contain', this.data.search_invoice_valid);
        cy.get('.ant-picker').within(() => {
            invoice.getFilterStartDate().clear({force: true}).type(this.data.search_start_date, {force: true})
            invoice.getFilterEndDate().clear({force: true}).type(this.data.search_end_date, {force: true}).type('{enter}')
        })
        invoice.getAlertNoData().should('have.text', this.data.alert_data_notfound);
    })
    it('Negative - Cancel Payment X Button', function() {
        const invoice = new pageFinanceInvoice();
        invoice.getLabelTitlePage().should('have.text', this.data.label_page);
        invoice.getFieldSearch().type(this.data.search_invoice_valid).should('have.value', this.data.search_invoice_valid);
        invoice.getFieldSearch().type('{enter}');
        invoice.getTableData().should('contain', this.data.search_invoice_valid);
        invoice.getInvoiceList().click();
        invoice.getLabelDetailInvoice().should('be.visible');
        invoice.getButtonBayarTagihan().click();
        invoice.getLabelPopUpPayment().should('have.text', this.data.label_popup_payment);
        invoice.getButtonCancel().click();
        invoice.getRadioButtonBankBCA().should('not.be.visible');
    })
})
