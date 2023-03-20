/// <reference types="cypress-xpath" />
// ***********************************************
// This example commands.ts shows you how to
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
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

Cypress.Commands.add('getToken', () => {
    cy.request({
        method: "POST",
        url: Cypress.env('baseUrl') + "/api/authaccount/registration",
        headers: {
			'Content-Type': 'application/json',  
			},
        body: {
            "name": "Developer11qw",
            "email": "Developersv900002@gmail.com",
            "password": "123456"
        },
    });
});

Cypress.Commands.add('getLoginToken', (token) => {
    cy.request({
        method: "POST",
        url: Cypress.env('baseUrl') + "/api/authaccount/login",
        headers: {
			'Content-Type': 'application/json',  
			},
        body: {
            "email":"Developer5vv@gmail.com",
            "password":"123456"
        },
    });
});

declare namespace Cypress {
    interface Chainable<Subject> {
        login(username: string, password: string): Chainable<void>;
        getToken(): Chainable<any>;
        getLoginToken(token: string): Chainable<any>;
    }
}