const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'djp1os',
  e2e: {
    baseUrl: 'https://automationpratice.com.br/', 
    defaultCommandTimeout: 5000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
