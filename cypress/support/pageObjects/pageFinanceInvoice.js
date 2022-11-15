class pageFinanceInvoice{
    //list invoice
    getLabelTitlePage(){ return cy.get('.d-flex > .title'); }
    getFieldSearch(){ return cy.get('.ant-input'); }
    getInvoiceList(){ return cy.get('.ant-table-row > :nth-child(2)'); }
    getFilterTanggalInvoice(){ return cy.get('.ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-item'); }
    getButtonPrevPagination(){ return cy.get('.ant-pagination-prev'); }
    getButtonNextPagination(){ return cy.get('.ant-pagination-next'); }
    getFilterPagination(){ return cy.get('.dropdown-paging > .ant-select > .ant-select-selector > .ant-select-selection-item'); }
    getFilterHeaderTotalAmount(){ return cy.get('.border-1'); }
    getFilterHeaderTotalAmountCounter(){ return cy.get('.border-1 > .price-bold'); }
    getFilterHeaderPaid(){ return cy.get('.border-2'); }
    getFilterHeaderPaidCounter(){ return cy.get('.border-2 .price-bold'); }
    getFilterHeaderUnPaid(){ return cy.get('.border-3'); }
    getFilterHeaderUnPaidCounter(){ return cy.get('.border-3 .price-bold'); }
    getFilterHeaderWaitingPayment(){ return cy.get('.border-4'); }
    getFilterHeaderWaitingPaymentCounter(){ return cy.xpath("//div/h3[@class='price-4 price-bold mb-1 text-active']"); }
    getFilterHeaderTotalDiscount(){ return cy.get('.border-5'); }
    getFilterHeaderTotalDiscountCounter(){ return cy.get('.border-5 .price-bold'); }
    getFilterTotalInvoice(){ return cy.get('.total'); }
    getFilterStartDate(){ return cy.get('#dateFilter'); }
    getFilterEndDate(){ return cy.get(':nth-child(3) > input'); }
    getTableData(){ return cy.get('tbody'); }
    getCheckBoxList(){ return cy.get('.ant-checkbox-input'); }
    getLabelMoreFilter(){ return cy.get('.ant-drawer-title > .d-flex > .title'); }
    getLabelMoreFilter(){ return cy.get('.ant-drawer-title > .d-flex > .title'); }
    getAlertNoData(){ return cy.get('.ant-empty-description'); }
    //detail invoice
    getLabelDetailInvoice(){ return cy.contains('Detail Invoice'); }
    getFieldSearchAWB(){ return cy.get('.ant-input-affix-wrapper > .ant-input'); }
    getSelectCourier(){ return cy.get('#courier'); }
    getSelectCourierSicepat(){ return cy.contains('Sicepat Express'); }
    getButtonBayarTagihan(){ return cy.get(':nth-child(1) > .btn'); }
    getButtonDownload(){ return cy.get('#invoice-detail-extra-btn-0'); }
    getFieldPaginationDetailInvoice(){ return cy.get('.ant-select-selection-item'); }
    getButtonPrevPaginationDetailInvoice(){ return cy.get('.ant-pagination-prev'); }
    getButtonNextPaginationDetailInvoice(){ return cy.get('.ant-pagination-next'); }
    //Popup Payment
    getLabelPopUpPayment(){ return cy.get('.font-big'); }
    getButtonPopUpBayar(){ return cy.get('.footer > .btn'); }
    getRadioButtonBankBCA(){ return cy.get('.ant-radio-wrapper'); }
    getButtonBatalkanPembayaran(){ return cy.get('.button'); }
    getButtonUploadBuktiPembayaran(){ return cy.get('.upload-button'); }
    getButtonDeleteBuktiPembayaran(){ return cy.get('.close-button > .icon-deo-close'); }
    getButtonLanjutkan(){ return cy.get('.mt-4 > .btn'); }
    getButtonCancel(){ return cy.get(':nth-child(12) > .ant-modal-root > .ant-modal-wrap > .ant-modal > .ant-modal-content > .ant-modal-close > .ant-modal-close-x > .icon-deo-close'); }
    //Alert
    getNotification() {return cy.get('.ant-notification-notice-description');}

}
export default pageFinanceInvoice