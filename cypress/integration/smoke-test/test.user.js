/// <reference types="cypress"/>

import pageUser from "../../support/pageObjects/pageUser";
import loginPage from "../../support/pageObjects/loginPage";
import dashboardPage from "../../support/pageObjects/dashboardPage";
const {faker} = require('@faker-js/faker');
let datatest;
let sampleData = {
    sampleCode: faker.random.alphaNumeric(4),
    sampleFullName: faker.name.firstName(),
    samplePhone: faker.phone.phoneNumber('8111111####'),
    sampleEmail: faker.internet.email()
};


beforeEach(() => {
    cy.loginViaAPI();
    cy.visit('/features/user/list');
    cy.fixture('user/dataUser').then(function(Tdata) {
        datatest=Tdata;
    });
});

describe('Test Create New Data User',() => {
    it('Negative - Cancel Create User',() => {
        const dataUser = new pageUser();
        cy.wait(1000);
        dataUser.getBtnAddUser().click({force:true});
        dataUser.getModalForm().should('be.visible');
        dataUser.getHeaderForm().should('contain',datatest.headerForm);
        dataUser.getFieldCode().type(datatest.code);
        dataUser.getFieldFullName().type(datatest.fullname);
        dataUser.getFieldPhoneNumber().type(datatest.phonenumber);
        dataUser.getFieldEmail().type(datatest.email);
        dataUser.getFieldBranch().click().type('{enter}');
        dataUser.getHeaderForm().click();
        dataUser.getFieldDepartment().click().type('{enter}');
        dataUser.getHeaderForm().click();
        dataUser.getLinkGeneratePassword().click();
        dataUser.getBtnCancel().click();
        dataUser.getBtnAddUser().click({force:true});
        dataUser.getFieldCode().should('be.empty');
    });

    it('Negative - Cancel Create User with Close Button',() => {
        const dataUser = new pageUser();
        cy.wait(1000);
        dataUser.getBtnAddUser().click({force:true});
        dataUser.getHeaderForm().should('contain',datatest.headerForm);
        dataUser.getFieldCode().type(datatest.code);
        dataUser.getFieldFullName().type(datatest.fullname);
        dataUser.getFieldPhoneNumber().type(datatest.phonenumber);
        dataUser.getFieldEmail().type(datatest.email);
        dataUser.getFieldBranch().click().type('{enter}');
        dataUser.getHeaderForm().click();
        dataUser.getFieldDepartment().click().type('{enter}');
        dataUser.getHeaderForm().click();
        dataUser.getLinkGeneratePassword().click();
        dataUser.getBtnCloseForm().click();
        // dataUser.getFieldCode().type("{esc}");
        dataUser.getBtnAddUser().click({force:true});
        dataUser.getFieldCode().should('be.empty');
    });

    it('Negative - Save Empty Data',() => {
        const dataUser = new pageUser();
        cy.wait(1000);
        dataUser.getBtnAddUser().click({force:true});
        dataUser.getHeaderForm().should('contain',datatest.headerForm);
        dataUser.getBtnSave().click();
        dataUser.getModalForm().should('be.visible');
        dataUser.getAlertFieldCode().should('contain',datatest.emptyAlert);
        dataUser.getAlertFieldFullName().should('contain',datatest.emptyAlert);
        dataUser.getAlertPhoneNumber().should('contain',datatest.emptyAlert);
        dataUser.getAlertEmail().should('contain',datatest.emailAlert);
        dataUser.getAlertFieldBranch().should('contain',datatest.emptyAlert);
        dataUser.getAlertFieldDepartment().should('contain',datatest.emptyAlert);
        dataUser.getAlertFieldPassword().should('contain',datatest.emptyAlert);
    });

    it('Negative - Email Format Not Valid',() => {
        const dataUser = new pageUser();
        cy.wait(1000);
        dataUser.getBtnAddUser().click({force:true});
        dataUser.getHeaderForm().should('contain',datatest.headerForm);
        dataUser.getFieldCode().type(datatest.code);
        dataUser.getFieldFullName().type(datatest.fullname);
        dataUser.getFieldPhoneNumber().type(datatest.phonenumber);
        dataUser.getFieldEmail().type('emailsalah@');
        dataUser.getFieldBranch().click().type('{enter}');
        dataUser.getHeaderForm().click();
        dataUser.getFieldDepartment().click().type('{enter}');
        dataUser.getHeaderForm().click();
        dataUser.getLinkGeneratePassword().click();
        dataUser.getBtnSave().click();
        dataUser.getModalForm().should('be.visible');
        dataUser.getAlertFieldCode().should('contain',datatest.emailAlert)
    });

    it('Negative - Password No Generated',() => {
        const dataUser = new pageUser();
        cy.wait(1000);
        dataUser.getBtnAddUser().click({force:true});
        dataUser.getHeaderForm().should('contain',datatest.headerForm);
        dataUser.getFieldCode().type(datatest.code);
        dataUser.getFieldFullName().type(datatest.fullname);
        dataUser.getFieldPhoneNumber().type(datatest.phonenumber);
        dataUser.getFieldEmail().type(datatest.email);
        dataUser.getFieldBranch().click().type('{enter}');
        dataUser.getHeaderForm().click();
        dataUser.getFieldDepartment().click().type('{enter}');
        dataUser.getHeaderForm().click();
        dataUser.getBtnSave().click();
        dataUser.getModalForm().should('be.visible');
        dataUser.getAlertFieldCode().should('contain',datatest.emptyAlert)
    });

    it('Negative - Branch Not Valid',() => {
        const dataUser = new pageUser();
        cy.wait(1000);
        dataUser.getBtnAddUser().click({force:true});
        dataUser.getHeaderForm().should('contain',datatest.headerForm);
        dataUser.getFieldCode().type(datatest.code);
        dataUser.getFieldFullName().type(datatest.fullname);
        dataUser.getFieldPhoneNumber().type(datatest.phonenumber);
        dataUser.getFieldEmail().type(datatest.email);
        dataUser.getFieldBranch().click().type('qwerty');
        cy.wait(1000);
        dataUser.getModalListBranch().should('contain',datatest.noData);
    });

    it('Negative - Department Not Valid',() => {
        const dataUser = new pageUser();
        cy.wait(1000);
        dataUser.getBtnAddUser().click({force:true});
        dataUser.getHeaderForm().should('contain',datatest.headerForm);
        dataUser.getFieldCode().type(datatest.code);
        dataUser.getFieldFullName().type(datatest.fullname);
        dataUser.getFieldPhoneNumber().type(datatest.phonenumber);
        dataUser.getFieldEmail().type(datatest.email);
        dataUser.getFieldDepartment().click().type('qwerty');
        cy.wait(1000);
        dataUser.getModalListDepartment().should('contain',datatest.noData)
    });

    it('Negative - User Existing',() => {
        const dataUser = new pageUser();
        cy.wait(1000);
        dataUser.getBtnAddUser().click({force:true});
        dataUser.getHeaderForm().should('contain',datatest.headerForm);
        dataUser.getFieldCode().type(datatest.exCode);
        dataUser.getFieldFullName().type(datatest.exName);
        dataUser.getFieldPhoneNumber().type(datatest.exPhone);
        dataUser.getFieldEmail().type(datatest.exEmail);
        dataUser.getFieldBranch().click().type('{enter}');
        dataUser.getHeaderForm().click();
        dataUser.getFieldDepartment().click().type('{enter}');
        dataUser.getHeaderForm().click();
        dataUser.getLinkGeneratePassword().click();
        dataUser.getBtnSave().click();
        dataUser.getModalAlertResponse().should('be.visible').should('contain',datatest.alertExisting);
    });

    it('Negative - Delete Data Branch on Field',() => {
        const dataUser = new pageUser();
        cy.wait(1000);
        dataUser.getBtnAddUser().click({force:true});
        dataUser.getHeaderForm().should('contain',datatest.headerForm);
        dataUser.getFieldCode().type(datatest.code);
        dataUser.getFieldFullName().type(datatest.fullname);
        dataUser.getFieldPhoneNumber().type(datatest.phonenumber);
        dataUser.getFieldEmail().type(datatest.email);
        dataUser.getFieldBranch().click().type('{enter}');
        dataUser.getHeaderForm().click();
        dataUser.getBtnDeleteBranch().click();
        dataUser.getAlertFieldCode().should('contain',datatest.emptyAlert);
    });

    it('Negative - Delete Data Department on Field',() => {
        const dataUser = new pageUser();
        cy.wait(1000);
        dataUser.getBtnAddUser().click({force:true});
        dataUser.getHeaderForm().should('contain',datatest.headerForm);
        dataUser.getFieldCode().type(datatest.code);
        dataUser.getFieldFullName().type(datatest.fullname);
        dataUser.getFieldPhoneNumber().type(datatest.phonenumber);
        dataUser.getFieldEmail().type(datatest.email);
        dataUser.getFieldDepartment().click().type('{enter}');
        dataUser.getHeaderForm().click();
        dataUser.getBtnDeleteDepartment().click();
        dataUser.getAlertFieldCode().should('contain',datatest.emptyAlert);
    });

    it('Positive - Create User until Login',() => {
        const dataLogin = new loginPage();
        const dashboard = new dashboardPage();
        const dataUser = new pageUser();
        cy.wait(1000);
        dataUser.getBtnAddUser().click({force:true});
        dataUser.getHeaderForm().should('contain',datatest.headerForm);
        dataUser.getFieldCode().type(sampleData.sampleCode).should('have.value',sampleData.sampleCode);
        dataUser.getFieldFullName().type(sampleData.sampleFullName).should('have.value',sampleData.sampleFullName);
        dataUser.getFieldPhoneNumber().type(sampleData.samplePhone).should('have.value',sampleData.samplePhone);
        dataUser.getFieldEmail().type(sampleData.sampleEmail).should('have.value',sampleData.sampleEmail);
        dataUser.getFieldBranch().click().type('{enter}');
        dataUser.getFieldBranchSelected().should('contain',datatest.branch);
        dataUser.getHeaderForm().click();
        dataUser.getFieldDepartment().click().type('{enter}');
        dataUser.getFieldDepartmentSelected().should('contain',datatest.department);
        dataUser.getHeaderForm().click();

        dataUser.getLinkGeneratePassword().click();
        dataUser.getFieldFullName().invoke('attr','value').as('name1');
        dataUser.getFieldPassword().invoke('attr','value').as('pass1');
        dataUser.getFieldPhoneNumber().invoke('attr','value').as('phone1');
        cy.then(function() {
            dataUser.getBtnSave().click();
            cy.wait(1000);
            dataUser.getModalAlertResponse().should('contain',datatest.addUserId);
            cy.wait(3000);
            dashboard.getLinkProfile().click();
            dashboard.getLinkSignOut().should('be.visible').click();
            dataLogin.getLinkForgotPassword().should('be.visible');
            dataLogin.getUsernameForm().type(this.phone1);
            dataLogin.getPasswordForm().type(this.pass1);
            dataLogin.getSubmitButton().should('be.enabled').click();
            dashboard.getHeader().should('contain','Dasbor');
            dashboard.getLinkProfile().should('contain',this.name1);
        });
    });

    it('View Data User',() => {
        const dataUser = new pageUser();
        let countTr = 0;
        cy.wait(1000);
        cy.get('tbody > tr').then($element => {
            countTr = $element.length;
            cy.log(countTr);

            // get value code last user from table data
            cy.xpath(`//tbody/tr[`+countTr+`]/td[1]/div/div`).invoke('text').as('code1');

            // get value name last user from table data
            cy.xpath(`//tbody/tr[`+countTr+`]/td[2]/div/div[1]/div`).invoke('text').as('name1');

            // get value email last user from table data
            cy.xpath(`//tbody/tr[`+countTr+`]/td[2]/div/div[2]/div`).invoke('text').as('email1');

            // get value phone last user from table data
            cy.xpath(`//tbody/tr[`+countTr+`]/td[3]/div/div[2]/div`).invoke('text').as('phone1');

            // get button view detail last user from table data
            cy.xpath(`//tbody/tr[`+countTr+`]/td[6]/div[1]/div[1]/button[1]`).click();
            dataUser.getHeaderForm().should('contain','Detail Pengguna');
            cy.then(function(){
                dataUser.getColCode().should('contain',this.code1);
                dataUser.getColName().should('contain',this.name1);
                dataUser.getColEmail().should('contain',this.email1);
                dataUser.getColPhone().should('contain',this.phone1);
            });
        });
        dataUser.getContainerDeparment().should('be.visible');
        dataUser.getContainerBranch().should('be.visible');
    });
});

describe('Test Update Data User',() => {
    it('Negative - Update User with Existing Code',() => {
        const dataUser = new pageUser();
        let countTr = 0;
        cy.wait(1000);
        cy.get('tbody > tr').then($element => {
            countTr = $element.length;
            cy.log(countTr);

            // get button edit last user from table data
            cy.xpath(`//tbody/tr[`+countTr+`]/td[6]/div[1]/div[2]/button`).click();

            dataUser.getHeaderUpdateDate().should('contain','Perbarui Pengguna');
            dataUser.getFieldCode().clear().type(datatest.exCode);
            dataUser.getBtnSave().click();
            dataUser.getModalAlertResponse().should('be.visible').should('contain',datatest.codeRegistered);
            dataUser.getModalForm().should('be.visible');
        });
    });

    it('Negative - Update User with Existing email',() => {
        const dataUser = new pageUser();
        let countTr = 0;
        cy.wait(1000);
        cy.get('tbody > tr').then($element => {
            countTr = $element.length;
            cy.log(countTr);

            // get button edit last user from table data
            cy.xpath(`//tbody/tr[`+countTr+`]/td[6]/div[1]/div[2]/button`).click();

            dataUser.getHeaderUpdateDate().should('contain','Perbarui Pengguna');
            dataUser.getFieldEmail().clear().type(datatest.exEmail);
            dataUser.getBtnSave().click();
            dataUser.getModalAlertResponse().should('be.visible').should('contain',datatest.emailRegistered);
            dataUser.getModalForm().should('be.visible');
        });
    });

    it('Positive - Update User Existing',() => {
        const dataUser = new pageUser();
        let countTr = 0;
        cy.wait(1000);
        cy.get('tbody > tr').then($element => {
            countTr = $element.length;
            cy.log(countTr);

            // get button edit last user from table data
            cy.xpath(`//tbody/tr[`+countTr+`]/td[6]/div[1]/div[2]/button`).click();

            dataUser.getHeaderUpdateDate().should('contain','Perbarui Pengguna');
            dataUser.getFieldCode().clear().type(sampleData.sampleCode);
            dataUser.getFieldFullName().clear().type(sampleData.sampleFullName);
            dataUser.getFieldPhoneNumber().clear().type(sampleData.samplePhone);
            dataUser.getFieldEmail().clear().type(sampleData.sampleEmail);
            dataUser.getBtnSave().click();
            dataUser.getModalAlertResponse().should('be.visible').should('contain',datatest.editUserId);
        });
    });

    it('View Data User after Update',() => {
        const dataUser = new pageUser();
        let countTr = 0;
        cy.wait(1000);
        cy.get('tbody > tr').then($element => {
            countTr = $element.length;
            cy.log(countTr);

            // get value code last user from table data
            cy.xpath(`//tbody/tr[`+countTr+`]/td[1]/div/div`).invoke('text').as('code1');

            // get value name last user from table data
            cy.xpath(`//tbody/tr[`+countTr+`]/td[2]/div/div[1]/div`).invoke('text').as('name1');

            // get value email last user from table data
            cy.xpath(`//tbody/tr[`+countTr+`]/td[2]/div/div[2]/div`).invoke('text').as('email1');

            // get value phone last user from table data
            cy.xpath(`//tbody/tr[`+countTr+`]/td[3]/div/div[2]/div`).invoke('text').as('phone1');

            // get button view detail last user from table data
            cy.xpath(`//tbody/tr[`+countTr+`]/td[6]/div[1]/div[1]/button[1]`).click();
            dataUser.getHeaderForm().should('contain','Detail Pengguna');
            cy.then(function(){
                dataUser.getColCode().should('contain',this.code1);
                dataUser.getColName().should('contain',this.name1);
                dataUser.getColEmail().should('contain',this.email1);
                dataUser.getColPhone().should('contain',this.phone1);
            });
        });
        dataUser.getContainerDeparment().should('be.visible');
        dataUser.getContainerBranch().should('be.visible');
    });
});

describe('Test Delete Data User',() => {
    it('Negative - Cancel Delete User',() => {
        const dataUser = new pageUser();
        let countTr = 0;
        cy.wait(1000);
        cy.get('tbody > tr').then($element => {
            countTr = $element.length;
            cy.log(countTr);

            // get button delete last user from table data
            cy.xpath(`//tbody/tr[`+countTr+`]/td[6]/div[1]/div[3]/button`).click();

            dataUser.getModalDeleteData().should('contain','Apakah Anda yakin ingin menghapus');
            dataUser.getBtnCancelDeleteData().click();
            dataUser.getModalDeleteData().should('not.exist');
            dataUser.getDeleteData3().should('exist');
        });
    });

    it('Positive - Cancel Delete User',() => {
        const dataUser = new pageUser();
        let countTr = 0;
        cy.wait(1000);
        cy.get('tbody > tr').then($element => {
            countTr = $element.length;
            cy.log(countTr);

            // get button delete last user from table data
            cy.xpath(`//tbody/tr[`+countTr+`]/td[6]/div[1]/div[3]/button`).click();

            dataUser.getModalDeleteData().should('contain','Apakah Anda yakin ingin menghapus');
            dataUser.getBtnOKDeleteData().click();
            dataUser.getModalDeleteData().should('not.exist');
            dataUser.getModalAlertResponse().should('contain',datatest.deleteUserId);

            cy.xpath(`//tbody/tr[`+countTr+`]/td[6]/div[1]/div[3]/button`).should('not.exist');
        });
    });
});

describe('Test Search Data',() => {
    it('Positive - Search Data User',() => {
        const dataUser = new pageUser();
        cy.wait(1000);
        dataUser.getFieldSearch().type("AT{enter}");
        dataUser.getTableDataUser().should('contain','AT');
        dataUser.getTotalItemText().should('contain','2');
    });

    it('Negative - Search False Data',() => {
        const dataUser = new pageUser();
        cy.wait(1000);
        dataUser.getFieldSearch().type("robot{enter}");
        dataUser.getTableDataUser().should('contain',datatest.noData);
        dataUser.getTotalItemText().should('contain','0');
    });

    it('Positive - Clear Field Search',() => {
        const dataUser = new pageUser();
        cy.wait(1000);
        dataUser.getFieldSearch().type("robot{enter}");
        dataUser.getTableDataUser().should('contain',datatest.noData);
        dataUser.getTotalItemText().should('contain','0');
        dataUser.getBtnClearSearch().click();
        dataUser.getFieldSearch().should('be.empty').type("{enter}");
        dataUser.getTableDataUser().should('not.contain',datatest.noData);
    });
});

// masih tahap explore
// describe('Test Eksport Data User',() => {
//     it('Test Eksport Data',() => {
//         const dataUser = new pageUser();
//         dataUser.getBtnEksportData().click();
//         dataUser.getLoadingStatus().should('contain','100%');
//     });
// });

// describe('Test Import Data User',() => {
//     it('Test Import Data',() => {
//         const dataUser = new pageUser();
//         dataUser.getBtnImportData().click();
//     });
// });