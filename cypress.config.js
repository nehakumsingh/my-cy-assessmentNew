const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  video: false,
  reporterOptions: {
  charts: true,
  reportPageTitle: 'Cypress Inline Reporter',
  embeddedScreenshots: true,
  reportDir: "cypress/reports",
  inlineAssets: true, //Adds the asserts inline
 },

  e2e: {
    baseUrl: 'https://www.saucedemo.com/',

    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on)
    },
    chromeWebSecurity: false,
  },
});
