/// <reference types = 'cypress-xpath'/>

it("Test POST Request for creating users", () => {
  cy.getToken().then((response) => {
    Cypress.env("access_token", response.body.message);
    cy.getLoginToken(Cypress.env("access_token")).then((loginResponse) => {
      Cypress.env("login_token", loginResponse.body.data.Token);
      cy.request({
        method: "POST",
        url: Cypress.env('baseUrl') + "/api/users",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+ Cypress.env("login_token")
       },
        body: {
          "name":"traveler992q1",
          "email": "Developers998ww9@gmail.com",
          "location": "USA"
        },
      }).then((createUserResponse) => {
        expect(createUserResponse.status).to.eq(201);

      });
    });
  });

})

it("Test Get Request - Get all Users", () => {
  cy.getToken().then((response) => {
    Cypress.env("access_token", response.body.message);
    cy.getLoginToken(Cypress.env("access_token")).then((loginResponse) => {
      Cypress.env("login_token", loginResponse.body.data.Token);
      cy.request({
        method: "GET",
        url: Cypress.env('baseUrl') + "/api/users?page=1",
        headers: {
          'Authorization': 'Bearer '+ Cypress.env("login_token")
       },
      }).then((getAllUsersResponse) => {
        expect(getAllUsersResponse.status).to.eq(200);

      });
    });
  });
});

  it("Test Get Request - Get User by id", () => {
  cy.getToken().then((response) => {
    Cypress.env("access_token", response.body.message);
    cy.getLoginToken(Cypress.env("access_token")).then((loginResponse) => {
      Cypress.env("login_token", loginResponse.body.data.Token);
      cy.request({
        method: "POST",
        url: Cypress.env('baseUrl') + "/api/users",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+ Cypress.env("login_token")
       },
        body: {
          "name":"travele98011",
          "email": "traveler91911@gmail.com",
          "location": "USA"
        },
      }).then((createUserResponse) => {
        expect(createUserResponse.status).to.eq(201);
        Cypress.env("user_id", createUserResponse.body.id);
        cy.request({
          method: "GET",
          url: Cypress.env('baseUrl') + "/api/users/"+Cypress.env("user_id"),
          headers: {
            'Authorization': 'Bearer '+ Cypress.env("login_token")
         },
        }).then((getUserByIdResponse) => {
          expect(getUserByIdResponse.status).to.eq(200);
          expect(getUserByIdResponse.body.id).to.eq(Cypress.env("user_id"));
  
        });
      });

      
    });
  });
});

