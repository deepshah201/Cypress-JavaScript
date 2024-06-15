const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1200,
  viewportHeight: 737,
  reporter: "cypress-mochawesome-reporter",

  e2e: {
    pageLoadTimeout: 30000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      this.screenshotOnRunFailure = true;
      require("cypress-mochawesome-reporter/plugin")(on);
      
    },
  },
});
