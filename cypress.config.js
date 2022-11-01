const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://gallery-app.vivifyideas.com/',
    watchForFileChanges: false,
    env: {
      validLoginEmail : "jovan.jovanovic@gmail.com",
      validLoginPassword : "jovan.jovanovic1"
    }
  },
});
