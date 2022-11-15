class pageFinancePayment{
    //list invoice
    getLabelTitlePage(){ return cy.get('.d-flex > .title'); }
    getFilterSearch(){ return cy.get('.ant-input'); }
    getFilterTanggal(){ return cy.get('.ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-item'); }
    getFilterStartDate(){ return cy.get('#dateFilter'); }
    getFilterEndDate(){ return cy.get(':nth-child(3) > input'); }
    getTableData(){ return cy.get('tbody'); }
    getButtonExport(){ return cy.get('[data-row-key="5621"] > .ant-table-cell'); }
    getAlertNoData(){ return cy.get('.ant-empty-description'); }
    getFieldPaginationDetailInvoice(){ return cy.get('.ant-select-selection-item'); }
    getButtonPrevPaginationDetailInvoice(){ return cy.get('.ant-pagination-prev'); }
    getButtonNextPaginationDetailInvoice(){ return cy.get('.ant-pagination-next'); }
    getTotalPayment(){ return cy.get('.total'); }
}
export default pageFinancePayment