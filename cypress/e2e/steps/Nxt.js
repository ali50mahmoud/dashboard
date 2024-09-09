import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

module.exports = (on, config) => {
    on('file:preprocessor', cucumber());
  };

Given("Login to home page English", () => {
  cy.visit("https://qa-test-frontend-ce07bae316f3.herokuapp.com/");
  cy.get('input[name="username"]').type("nxttester");
  cy.get('input[name="password"]').type("nxt#qA@23");
  cy.contains("button", "Login").click();
  cy.contains("button", "Skip (only for testing)").click();

  //select event
  cy.contains("td", "test").click();

  
});

Given("I am on the demo Admin dashboard login page", () => {
  // Write code here that takes you to the Admin dashboard login page
});

Then("I should be logged into the Admin dashboard", () => {
  
});



When("I navigate to each page", () => {
  cy.wait(7000)
  cy.contains("span.Text_root__M6tno", "Content").click();
  cy.contains("p.Text_root__M6tno", "Explore").click();
  cy.contains("p.Text_root__M6tno", "Itinerary").click();
  cy.contains("p.Text_root__M6tno", "Send Updates").click();


  cy.wait(7000)
  cy.contains("span.Text_root__M6tno", "Planning").click();
  cy.contains("p.Text_root__M6tno", "Packages").click();
  cy.contains("button", "New Package").click();
  cy.get('input[placeholder="Platinum"]').type("maxititle").click();
  cy.get("input#package_priority").type("4");
  cy.get('input[placeholder="Flights"]').type("fdfdfd");
  cy.get('#package_type').click();
  cy.get('select#entity').select('text_add');
  cy.wait(7000)
  cy.contains('button', 'Save').click();
  cy.wait(7000)


  cy.contains("p.Text_root__M6tno", "Sessions").click();

  cy.contains("span.Text_root__M6tno", "Reports").click();
  cy.contains("span.Text_root__M6tno", "Users Reports").click();



  cy.contains("span.Text_root__M6tno", "Registration").click();
  cy.contains("p.Text_root__M6tno", "Attendees").click();
  cy.wait(10000)
});

Then("there should be no errors on any page", () => {
  
});

When('I navigate to the "Add Attendee" page', () => {
  cy.contains("span.Text_root__M6tno", "Registration").click();
  cy.contains("p.Text_root__M6tno", "Attendees").click();
  cy.contains("All Users").parents('div[role="button"]').find("button").click();
  cy.wait(7000)
});

And("I fill in the attendee details", () => {
  cy.contains("Add User").click();

  cy.get("#firstName").type("mark");
  const uniqueLastName = `nixon${Math.random().toString(36).substring(2, 7)}`;
  cy.get("#lastName").type(uniqueLastName);
  const uniqueEmail = `wirepe${Date.now()}@apifan.com`;
  cy.get("#email").type(uniqueEmail);
  cy.wait(7000)
  cy.contains("button", "Create").click();
  cy.visit(
    "https://qa-test-frontend-ce07bae316f3.herokuapp.com/users/all/users/p/1"
  );
  cy.wait(7000)

});

And("I add a trip for the attendee", () => {
  cy.contains("button", "Add Trip").last().click();

  cy.get('select#entity')
  .find('option:not(:disabled)')
  .first()
  .then(option => {
    cy.get('select#entity').select(option.val());
  });

  cy.wait(7000)
  cy.contains("button", "Save").last().click();

  cy.wait(7000)

});

And("I click the save button", () => {
  
});

Then("the attendee with the trip should be added successfully", () => {
  
});
