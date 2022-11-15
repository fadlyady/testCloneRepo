/// <reference types="cypress"/>

let adminToken;
let portalToken;
let idData;


// describe('Test Page Order',() => {
//     it('Positive - Validate Order Page',() => {
//         cy.request({
//             url: Cypress.env('authUrl'),
//             method: 'POST',
//             body:{
//                   "grant_type": "password",
//                   "username": Cypress.env('username'),
//                   "password": Cypress.env('password')
//             }
//           }).then((response1) => {
//               portalToken = response1.body.accessToken;
//               cy.log(portalToken);

//               cy.request({
//                 url: "https://portal-api-development.shipdeo.com/v2/orders?take=10&skip=0",
//                 method: 'POST',
//                 headers: {
//                     authorization: `Bearer ${portalToken}`
//                 }
//               }).then((response2) => {
//                   expect (response2.status).to.eq(200);
//                   idData = response2.body.data.list[0]._id;
//                   cy.log(idData);

//                   cy.request({
//                     url: "https://portal-api-development.shipdeo.com/v2/orders/batch",
//                     method: 'DELETE',
//                     headers: {
//                         authorization: `Bearer ${portalToken}`
//                     },
//                     body: {
//                         "orderIds": [
//                             `${idData}`
//                           ],
//                           "cancel_reason": "cancel via api"
//                     }
//                   }).then((response3) => {
//                       expect (response3.status).to.eq(201);

//                       cy.request({
//                         url: Cypress.env('authAdmin'),
//                         method: 'POST',
//                         body:{
//                               "email": Cypress.env('emailAdmin'),
//                               "password": Cypress.env('passAdmin')
//                         }
//                       }).then((response) => {
//                           adminToken = response.body.data.access_token;
//                           cy.log(adminToken);
            
//                           cy.request({
//                             url: `https://admin-api-development.shipdeo.com/v1/orders/${idData}`,
//                             method: 'PATCH',
//                             headers: {
//                                 authorization: `Bearer ${adminToken}`
//                             },
//                             body: {
//                                 "status": 8,
//                                 "cancel_reason": "confirm via api"
//                             }
//                           }).then((response4) => {
//                               expect (response4.status).to.eq(201);
//                           })
//                     })
//                   })
//               })
//         })

//         // cy.request({
//         //     url: Cypress.env('authAdmin'),
//         //     method: 'POST',
//         //     body:{
//         //           "email": Cypress.env('emailAdmin'),
//         //           "password": Cypress.env('passAdmin')
//         //     }
//         //   }).then((response) => {
//         //       adminToken = response.body.data.access_token;
//         //       cy.log(adminToken);

//         //       cy.request({
//         //         url: `https://admin-api-development.shipdeo.com/v1/orders/${idData}`,
//         //         method: 'PATCH',
//         //         headers: {
//         //             authorization: `Bearer ${adminToken}`
//         //         },
//         //         body: {
//         //             "status": 8,
//         //             "cancel_reason": "confirm via api"
//         //         }
//         //       }).then((response4) => {
//         //           expect (response4.status).to.eq(201);
//         //       })
//         // })
//     });

//     // it('Sample log API',() => {
//     //     cy.request({
//     //         url: "https://portal-api-development.shipdeo.com/v2/orders?take=10&skip=0",
//     //         method: 'POST',
//     //         headers: {
//     //             authorization: `Bearer ${portalToken}`
//     //         }
//     //       }).then((response2) => {
//     //           expect (response2.status).to.eq(200);
//     //           idData = response2.body.data.list[0]._id;
//     //           cy.log(idData);
//     //       })
//     // })

//     // it('Sample Cancel Order via API',() => {
//     //     cy.request({
//     //         url: "https://portal-api-development.shipdeo.com/v2/orders/batch",
//     //         method: 'DELETE',
//     //         headers: {
//     //             authorization: `Bearer ${portalToken}`
//     //         },
//     //         body: {
//     //             "orderIds": [
//     //                 `${idData}`
//     //               ],
//     //               "cancel_reason": "cancel via api"
//     //         }
//     //       }).then((response3) => {
//     //           expect (response3.status).to.eq(201);
//     //       })
//     // })

//     // it('test login admin',() => {
//     //     cy.request({
//     //         url: Cypress.env('authAdmin'),
//     //         method: 'POST',
//     //         body:{
//     //                 "email": Cypress.env('emailAdmin'),
//     //                 "password": Cypress.env('passAdmin')
//     //         }
//     //         }).then((response) => {
//     //             adminToken = response.body.data.access_token;
//     //             cy.log(adminToken);

//     //             cy.request({
//     //                 url: `https://admin-api-development.shipdeo.com/v1/orders/62947d0adf47c057c89f937a`,
//     //                 method: 'PATCH',
//     //                 headers: {
//     //                     authorization: `Bearer ${adminToken}`
//     //                 },
//     //                 body: {
//     //                     "status": 8,
//     //                     "cancel_reason": "confirm via api"
//     //                 }
//     //             }).then((response4) => {
//     //                 expect (response4.status).to.eq(201);
//     //             })
//     //         })
//     // })
// });

// const {faker} = require("@faker-js/faker");
// const awb = faker.phone.phoneNumber('002213412#####');
// let invoiceId;
// let invoiceNumber;

// let today = new Date();
// today.setDate(today.getDate() + 1);
// let day = today.toISOString();

// describe('Test 1',() => {
//     it('create invoice',() => {
//         cy.request({
//             url: "https://internal-invoice.core.shipdeo.d.vitamincode.id/v1/invoice",
//             method: 'POST',
//             body: {
//               "userId": "620260723ed9d385361314ba",
//               "invoiceDueDate": day,
//               "orders": [
//                       {
//                           "trackingInfo": {
//                               "deliveryDate": day,
//                               "courier": "sicepat",
//                               "airwaybill": awb,
//                               "service": "SIUNT"
//                           },
//                           "customer": {
//                               "name": "Penerima",
//                               "email": "clodeo@gmail.com",
//                               "phone": "085722331123",
//                               "address": "Teks Alamat Lengkap Antapani, Kota Bandung, Jawa Barat, Indonesia 40291"
//                           },
//                           "transaction": {
//                               "fixInsurance": 138,
//                               "fixShippingCharge": 33000,
//                               "fixWeight": 3,
//                               "discountShippingChargePercentage": 2
//                           }
//                       }
//                   ]
//             },
//             headers: {
//               "x-api-key": "bd16e6a200948768802e5a88482a8e61"
//             }
//                }).then((response2) => {
//                 localStorage.setItem('currentUser',JSON.stringify(response2.body));
//                 expect (response2.status).to.eq(200);
//                 invoiceId = response2.body.data.invoiceId;
//                 invoiceNumber = response2.body.data.invoiceNumber;
//                 cy.log(invoiceId);
//                 cy.log(response2.body);
//                 cy.log(day);
//               })
//     })
// })