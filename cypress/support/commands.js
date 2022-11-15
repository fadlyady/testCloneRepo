// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-file-upload';

const {faker} = require("@faker-js/faker");
const awb = faker.phone.phoneNumber('002213412#####');

// function date () {
//     let date = new Date();
//     let year = date.getFullYear();
//     let month = date.getMonth()+1;
//     let dt = date.getDate();
  
//     if (dt < 10) {
//     dt = '0' + dt;
//     }
//     if (month < 10) {
//     month = '0' + month;
//     }
//     return `${year}-${month}-${dt}`;
//   };

//   function time () {
//     let time = new Date(Date.now() + 2 * 60 * 60 * 1000).toLocaleTimeString();
  
//     return time;
//   };


//   let curDate = date();
//   let timePickup = time();

let today = new Date();
today.setDate(today.getDate() + 1);
let day = today.toISOString();


Cypress.Commands.add('createInvoice',() => {
  cy.request({
    url: "https://internal-invoice.core.shipdeo.d.vitamincode.id/v1/invoice",
    method: 'POST',
    body: {
      "userId": "620260723ed9d385361314ba",
      "invoiceDueDate": day,
      "orders": [
              {
                  "trackingInfo": {
                      "deliveryDate": day,
                      "courier": "sicepat",
                      "airwaybill": awb,
                      "service": "SIUNT"
                  },
                  "customer": {
                      "name": "Penerima",
                      "email": "clodeo@gmail.com",
                      "phone": "085722331123",
                      "address": "Teks Alamat Lengkap Antapani, Kota Bandung, Jawa Barat, Indonesia 40291"
                  },
                  "transaction": {
                      "fixInsurance": 138,
                      "fixShippingCharge": 33000,
                      "fixWeight": 3,
                      "discountShippingChargePercentage": 2
                  }
              }
          ]
    },
    headers: {
      "x-api-key": "bd16e6a200948768802e5a88482a8e61"
    }
       }).then((response2) => {
        localStorage.setItem('currentUser',JSON.stringify(response2.body));
        expect (response2.status).to.eq(200);
        // invoiceId = response2.body.data.invoiceId;
        // invoiceNumber = response2.body.data.invoiceNumber;
        // cy.log(invoiceId);
        cy.log(response2.body);
      })
})

Cypress.Commands.add('loginViaAPI',() => {
    cy.request({
      url: Cypress.env('authUrl'),
      method: 'POST',
      body:{
            "grant_type": "password",
            "username": Cypress.env('username'),
            "password": Cypress.env('password')
      }
    }).then((response) => {
        localStorage.setItem('currentUser',JSON.stringify(response.body));
        expect(response.status).to.eq(200);
  })
})

Cypress.Commands.add('loginViaAPI1',() => {
  cy.request({
    url: Cypress.env('authUrl'),
    method: 'POST',
    body:{
          "grant_type": "password",
          "username": Cypress.env('username1'),
          "password": Cypress.env('password')
    }
  }).then((response) => {
      localStorage.setItem('currentUser',JSON.stringify(response.body));
})
})

Cypress.Commands.add('loginAdminAPI',() => {
  cy.request({
    url: Cypress.env('authAdmin'),
    method: 'POST',
    body:{
          "email": Cypress.env('emailAdmin'),
          "password": Cypress.env('passAdmin')
    }
  }).then((response) => {
      localStorage.setItem('currentUser',JSON.stringify(response.body));
})
})

let adminToken;
let portalToken;
let idData;

Cypress.Commands.add('cancelOrder',() => {
  cy.request({
    url: Cypress.env('authUrl'),
    method: 'POST',
    body:{
          "grant_type": "password",
          "username": Cypress.env('username'),
          "password": Cypress.env('password')
    }
  }).then((response1) => {
      portalToken = response1.body.accessToken;
      cy.log(portalToken);

      cy.request({
        url: "https://portal-api-development.shipdeo.com/v2/orders?take=10&skip=0",
        method: 'POST',
        headers: {
            authorization: `Bearer ${portalToken}`
        }
      }).then((response2) => {
          expect (response2.status).to.eq(200);
          idData = response2.body.data.list[0]._id;
          cy.log(idData);

          cy.request({
            url: "https://portal-api-development.shipdeo.com/v2/orders/batch",
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${portalToken}`
            },
            body: {
                "orderIds": [
                    `${idData}`
                  ],
                  "cancel_reason": "cancel via api"
            }
          }).then((response3) => {
              expect (response3.status).to.eq(201);
          })
      })
})

  cy.request({
      url: Cypress.env('authAdmin'),
      method: 'POST',
      body:{
            "email": Cypress.env('emailAdmin'),
            "password": Cypress.env('passAdmin')
      }
    }).then((response) => {
        adminToken = response.body.data.access_token;
        cy.log(adminToken);

        cy.request({
          url: `https://admin-api-development.shipdeo.com/v1/orders/${idData}`,
          method: 'PATCH',
          headers: {
              Authorization: `Bearer ${adminToken}`
          },
          body: {
              "status": 8,
              "cancel_reason": "confirm via api"
          }
        }).then((response4) => {
            expect (response4.status).to.eq(201);
        })
  })
})