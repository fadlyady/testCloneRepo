class newPageOrder{
    getFieldStatus(){
        // return cy.xpath("(//input[@role='combobox'])[1]");
        // return cy.xpath("(//div[@class='ant-select-selector'])[1]");
        return cy.get('.mx-2 > .ant-select-selector');
    }

    getFieldStatusAfterPick(){
        return cy.xpath("(//span[@class='ant-select-selection-item'])[4]");
    }

    getStatusEntry(){
        return cy.get('[title="Entry"]');
    }

    getStatusConfirmed(){
        return cy.get('[title="Confirmed"]');
    }
    
    getStatusPicked(){
        return cy.get('[title="Picked"]');
    }

    getStatusOnProgress(){
        return cy.get('[title="On Progress"]');
    }

    getStatusDelivered(){
        return cy.get('[title="Delivered"]');
    }

    getStatusCancelRequest(){
        return cy.get('[title="Cancel Request"]');
    }

    getStatusCancelled(){
        return cy.get('[title="Cancelled"]');
    }

    getStatusOther(){
        return cy.get('[title="Other"]');
    }

    getStatusOnHold(){
        return cy.get('[title="On Hold"]');
    }

    getStatusProblem(){
        return cy.get('[title="Problem"]');
    }

    getStatusReturned(){
        // return cy.get('[title="Returned"]');
        return cy.xpath("//div[contains(text(),'Returned')]");
    }

    getStatusLostBroken(){
        return cy.get('[title="Lost Broken"]');
    }

    getStatusConfirmCancelled(){
        return cy.get('[title="Confirm Cancelled"]');
    }

    getStatusReturning(){
        return cy.get('[title="Returning"]');
    }

    getStatusConfirmProblem(){
        return cy.get('[title="Confirm Problem"]');
    }

    getStatusWaitConfirmation(){
        return cy.get('[title="Waiting For Confirmation"]');
    }

    getTableData(){
        return cy.get('tbody');
    }

    getSectionFilter(){
        return cy.get('.filter-section > .col-12');
    }

    getBtnResetFilter(){
        return cy.get('.col-12 > .btn');
    }

    getBtnFilter(){
        return cy.get('#order-more-filter');
    }

    getFilterStatus(){
        return cy.xpath("(//input[starts-with(@id, 'rc')])[4]");
    }

    getFilterCetakShippingLabel(){
        return cy.get('#export_type');
    }

    getFilterShippingAmount(){
        return cy.xpath("//input[@role='spinbutton']");
    }

    getFilterCOD(){
        return cy.get("#is_cod");
    }

    getFilterCabang(){
        return cy.get("#branch_code");
    }

    getFilterDepartemen(){
        return cy.get("#dept_code");
    }

    getOperatorSamaDengan(){
        return cy.get('[title="="]');
    }

    getOpsiCOD(){
        return cy.get('[title="COD"]');
    }

    getOpsiCabangPusat1(){
        return cy.xpath("(//div[@title='Cabang Pusat'])[1]");
    }

    getOpsiDeptOwner(){
        return cy.get('[title="owner"]');
    }

    getContainerStatusFilter(){
        // return cy.get('.ant-select-dropdown');
        // return cy.xpath("//div[@role='listbox']");
        return cy.xpath("//div[@class='rc-virtual-list-scrollbar-thumb']");
        // return cy.xpath("//body/div[9]/div[1]/div[1]");
        // return cy.xpath("//div[@class='rc-virtual-list-scrollbar rc-virtual-list-scrollbar-show']");
    }

    getTotalDataTable(){
        return cy.get('[title="30"]');
    }

    getTotalDataTable50(){
        return cy.get('[title="50"]');
    }

    getTotalDataTable10(){
        return cy.get('[title="10"]');
    }

    getNextPageData(){
        return cy.get("[title='Next Page']");
    }

    getContainerPageBtn(){
        return cy.xpath("//ul[@class='ant-pagination pagination-deo ']");
    }

    getBtnPage2(){
        return cy.get("[title='2']");
    }

    getBtnPage3(){
        return cy.get("[title='3']");
    }

    getBtnPage4(){
        return cy.get("[title='4']");
    }

    getDataKe2(){
        return cy.xpath("//tbody/tr[2]");
    }

    getNoOrderKe2(){
        return cy.xpath("//tbody/tr[2]/td[3]/a/div");
    }

    getNoResiKe2(){
        return cy.xpath("//tbody/tr[2]/td[4]/a/div");
    }

    getTipeOrderKe2(){
        return cy.xpath("//tbody/tr[2]/td[5]/div/span");
    }

    getPenerimaDataKe2(){
        return cy.xpath("//tbody/tr[2]/td[6]/div/div");
    }

    getOngkosKirimKe2(){
        return cy.xpath("//tbody/tr[2]/td[8]/div/span[2]");
    }

    getStatusShipdeoKe2(){
        return cy.xpath("//tbody/tr[2]/td[9]/div/span");
    }
    
    getTanggalOrderKe2(){
        return cy.xpath("//tbody/tr[2]/td[2]");
    }

    getNoOrderCard(){
        return cy.xpath("(//div[@class='ant-card-body'])[1]/div/div[1]/div[1]");
    }

    getPenerimaCard(){
        return cy.xpath("(//div[@class='ant-card-body'])[1]/div/div[2]/div[2]");
    }

    getTipeCard(){
        return cy.xpath("(//div[@class='ant-card-body'])[1]/div/div[5]/div[2]/div[3]/span");
    }

    getOngkosKirimCard(){
        return cy.xpath("(//div[@class='ant-card-body'])[1]/div/div[9]/div/div/div[1]/div[2]/span");
    }

    getFilterStartDate(){ 
        return cy.get('#rangeDate'); 
    }

    getStartDateInsideFilter(){
        return cy.xpath("//form/div/div[3]/div[2]/div/div/div/div/input[@placeholder='Start date']");
    }

    getEndDateInsideFilter(){
        return cy.xpath("//form/div/div[3]/div[2]/div/div/div/div[3]/input[@placeholder='End date']");
    }

    getFilterEndDate(){
        return cy.xpath("//input[@placeholder='End date']"); 
    }

    getAmountTotalDataTable(){
        return cy.xpath("//div[@class='total align-self-center pr-2']");
    }
}
export default newPageOrder