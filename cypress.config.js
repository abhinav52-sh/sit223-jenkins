const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    // Your configuration options from cypress.json:
    baseUrl: 'http://localhost:3000',
    viewportWidth: 1280,
    viewportHeight: 720,
    specPattern: '**/*.spec.js',
  },
});
