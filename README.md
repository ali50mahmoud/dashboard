
# Dashboard with cypress BDD Test Framework

This project is a Cypress-based BDD (Behavior Driven Development) test framework designed to automate the testing of a web application. The framework uses `cypress-cucumber-preprocessor` for BDD-style syntax.

## Table of Contents

- [Project Structure](#project-structure)
- [Installation](#installation)
- [Running Tests](#running-tests)
- [Test Scenarios](#test-scenarios)
- [Contributing](#contributing)


## Project Structure

```
- cypress/
  - e2e/
    - features/           # Contains .feature files with test scenarios
    - steps/              # Step definitions for the .feature files
  - support/              # Cypress support files and commands
- cypress.config.js        # Cypress configuration file
- package.json             # Node.js dependencies
```

- **cypress/e2e/features/**: This folder contains the `.feature` files where BDD scenarios are written in Gherkin syntax.
- **cypress/e2e/steps/**: Contains the step definitions that map to the steps in the feature files.

## Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Install dependencies:**

   Make sure you have Node.js installed. Then run:

   ```bash
   npm install
   ```

3. **Setup Cypress Cucumber Preprocessor:**

   The `cypress-cucumber-preprocessor` is used to write BDD-style tests. This is already included in the `package.json`, but make sure everything is installed correctly by running:

   ```bash
   npm install cypress-cucumber-preprocessor --save-dev
   ```

4. **Configure Cypress:**

   The configuration is set up in `cypress.config.js`. If you need to adjust the base URL or other settings, modify that file.

## Running Tests

To run the tests, you have several options:

1. **Open Cypress Test Runner:**

   ```bash
   npx cypress open
   ```

   This will open the Cypress Test Runner, where you can see and run your tests in an interactive UI.

2. **Run Cypress Tests in the CLI:**

   You can also run the tests in headless mode (without opening the browser) using:

   ```bash
   npx cypress run
   ```

## Test Scenarios

### 1. **Login and Navigation**

- **Given**: The user logs in to the home page (English).
- **When**: The user navigates through various sections (Content, Explore, Itinerary, etc.).
- **Then**: There should be no errors on any page.

### 2. **Adding an Attendee**

- **When**: The user navigates to the "Add Attendee" page.
- **And**: The user fills in attendee details and adds a trip.
- **Then**: The attendee with the trip should be added successfully.

### 3. **Other Scenarios**

Additional scenarios can be written in the same BDD format using the `Given`, `When`, `Then` syntax.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Write tests to cover your changes.
4. Submit a pull request.


  
