Feature: Nxt



  


   Scenario: Screen recording of the automated test for the login page functionality
    Given I am on the demo Admin dashboard login page
    Given Login to home page English
    Then I should be logged into the Admin dashboard

  Scenario: Check all current pages for any errors
     Given I am on the demo Admin dashboard login page
    Given Login to home page English
    When I navigate to each page
    Then there should be no errors on any page

  Scenario: Add an attendee with a trip
     Given I am on the demo Admin dashboard login page
    Given Login to home page English
    When I navigate to the "Add Attendee" page
    And I fill in the attendee details
    And I add a trip for the attendee
    And I click the save button
    Then the attendee with the trip should be added successfully  