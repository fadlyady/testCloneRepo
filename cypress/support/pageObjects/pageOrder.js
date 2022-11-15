class pageOrder{
    getLabelMoreFilter(){ return cy.get('.ant-drawer-title > .d-flex > .title'); }
    getButtonNewOrder(){ return cy.get('#order-extra-btn-0'); }
    getButtonMoreFilterDate(){ return cy.get(':nth-child(1) > .ant-collapse-header'); }
    getLabelPrint(){ return cy.get('#rcDialogTitle7'); }
    getButtonMoreFilterStatus(){ return cy.get(':nth-child(2) > .ant-collapse-header'); }
    getButtonRemoveDateFilter(){ return cy.get('.remove-icon'); }
    getButtonMoreFilterBranch(){ return cy.get(':nth-child(7) > .ant-collapse-header'); }
    getButtonMoreFilterBranchCabangPusat(){ return cy.get(':nth-child(6) > :nth-child(2) > .facet-group > .label'); }
    getButtonMoreFilterDepartment(){ return cy.get(':nth-child(8) > .ant-collapse-header'); }
    getButtonMoreFilterDepartmentOwner(){ return cy.get('#dept_code > .d-flex > :nth-child(1) > :nth-child(2) > .facet-group > .label'); }
    getButtonMoreFilterPayment(){ return cy.get(':nth-child(6) > .ant-collapse-header'); }
    getButtonMoreFilterPaymentNonCOD(){ return cy.get('#is_cod > .d-flex > :nth-child(1) > :nth-child(2) > .facet-group > .label'); }
    getButtonMoreFilterDestination(){ return cy.get(':nth-child(4) > .ant-collapse-header'); }
    getButtonMoreFilterDestinationKotaBandung(){ return cy.get('#city_code > .d-flex > :nth-child(1) > :nth-child(2) > .facet-group > .label'); }
    getButtonMoreFilterApply(){ return cy.get('.btn-deo-primary'); }
    getButtonMoreFilterReset(){ return cy.get('.w-100 > .btn-deo-ghosted'); }
    getButtonPrint(){ return cy.get('.ant-badge > .mt-3'); }
    getFieldSearch(){ return cy.get('.ant-input-affix-wrapper > .ant-input'); }
    getFieldMoreFilterStartDate(){ return cy.get(':nth-child(1) > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-picker > .ant-picker-input-active > #rangeDate'); }
    getFieldMoreFilterEndDate(){ return cy.get(':nth-child(1) > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-picker > :nth-child(3) > input'); }
    //filter
    getButtonMoreFilter(){ return cy.get('#order-more-filter'); }
    getButtonMoreFilterStatusConfirmed(){ return cy.get(':nth-child(1) > :nth-child(2) > .facet-group > .label'); }
    getButtonMoreFilterStatusConfirmedCheck(){ return cy.get('.d-flex > :nth-child(1) > .ant-checkbox > .ant-checkbox-inner'); }
    getFieldFilterCreateOrder(){ return cy.get('.ant-collapse-content-box > :nth-child(2) > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-picker'); }
    getFieldFilterCreateOrder(){ return cy.get(':nth-child(1) > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-picker'); }
    getFilterOrderOther(){ return cy.get('.bg-status-color-0'); }
    getFilterOrderEntry(){ return cy.get('.bg-status-color-1'); }
    getFilterOrderStatusConfirmed(){ return cy.get('.bg-status-color-2'); }
    getFilterOrderOnProgress(){ return cy.get('.bg-status-color-5'); }
    getFilterOrderDelivered(){ return cy.get('.bg-status-color-6'); }
    getFilterOrderCancelRequest(){ return cy.get('.bg-status-color-7'); }
    getFilterOrderProblem(){ return cy.get('.bg-status-color-11'); }
    getFilterOrderReturned(){ return cy.get('.bg-status-color-12'); }
    getFilterOrderLostBroken(){ return cy.get('.bg-status-color-13'); }
    getFilterOrderPicked(){ return cy.get('.bg-status-color-3'); }
    getFilterOrderConfirmProblem(){ return cy.get('.bg-status-color-4'); }
    getFilterOrderCancelled(){ return cy.get('.bg-status-color-8'); }
    getFilterOrderOnHold(){ return cy.get('.bg-status-color-9'); }
    getFilterOrderReturning(){ return cy.get('.bg-status-color-15'); }
    getFilterStartDate(){ return cy.get('#rangeDate'); }
    getFilterEndDate(){ return cy.xpath("//input[@placeholder='End date']"); }
    //alert
    getAlertAWBNotFound(){ return cy.get('.ant-empty-description'); }
    //result
    getResultSearchAWB(){ return cy.get('.resi-order > .order-template-value > .bold'); }
    getResultSearchOrderDate(){ return cy.get(':nth-child(1) > :nth-child(1) > .order-template-value'); }
    getResultSearchAddress(){ return cy.get(':nth-child(1) > :nth-child(3) > .order-template-value > span'); }
    getResultSearchBranch(){ return cy.get(':nth-child(4) > .order-template-value > span'); }
    getResultSearchDeliveryStatus(){ return cy.get(':nth-child(1) > .pr-1 > .delivery-status > p'); }
    getResultSearchDropshipStatus(){ return cy.get(':nth-child(1) > .pl-1 > .delivery-status > span'); }
    getResultSearchNoOrder(){ return cy.get('.active > .bold'); }
    getResultSearchReceiverName(){ return cy.get(':nth-child(2) > .order-template-value > .bold'); }
    getResultSearchOngkir(){ return cy.get(':nth-child(6) > .order-template-value > span'); }
    getResultSearchAssurance(){ return cy.get(':nth-child(2) > :nth-child(5) > .order-template-value'); }
    getResultSearchCODStatus(){ return cy.get(':nth-child(2) > .pl-1 > .delivery-status > span'); }
    getResultSearchPrices(){ return cy.get(':nth-child(5) > .order-template-value > span'); }
    getResultSearchAddress(){ return cy.get(':nth-child(1) > :nth-child(3) > .order-template-value > span'); }
    getResultEmbedPrint(){ return cy.get('embed', { timeout: 22000 }); }
    getResultTotalOrder(){ return cy.get('.mt-2 > span');}
    getTotalOrderStatusConfirmed(){ return cy.get('.bg-status-color-2 > .item-total'); }
    getTotalOrderOnProgress(){ return cy.get('.bg-status-color-5 > .item-total'); }
    getTotalOrderDelivered(){ return cy.get('.bg-status-color-6 > .item-total'); }
    getTotalOrderCancelRequest(){ return cy.get('.bg-status-color-7 > .item-total'); }
    getTotalOrderProblem(){ return cy.get('.bg-status-color-11 > .item-total'); }
    getTotalOrderReturned(){ return cy.get('.bg-status-color-12 > .item-total'); }
    getTotalOrderLostBroken(){ return cy.get('.bg-status-color-13 > .item-total'); }
    getTotalOrderPicked(){ return cy.get('.bg-status-color-3 > .item-total'); }
    getTotalOrderConfirmProblem(){ return cy.get('.bg-status-color-4 > .item-total'); }
    getTotalOrderCancelled(){ return cy.get('.bg-status-color-8 > .item-total'); }
    getTotalOrderOnHold(){ return cy.get('.bg-status-color-9 > .item-total'); }
    getTotalOrderReturning(){ return cy.get('.bg-status-color-15 > .item-total'); }
    getFilterOrderOther(){ return cy.get('.bg-status-color-0 > .item-total'); }
    getFilterOrderEntry(){ return cy.get('.bg-status-color-1 > .item-total'); }
    getTableDataOrder(){ return cy.get('tbody', { timeout: 22000 }); }
}
export default pageOrder
