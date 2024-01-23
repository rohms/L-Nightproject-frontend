import { defineConfig } from 'cypress';

export default defineConfig({
  projectId: 's2ynnc',
    e2e: {
        baseUrl: 'http://localhost:3000',
        setupNodeEvents(on, config) {
          // implement node event listeners here
        
      },
      supportFile: "cypress/support/commands.js",
}})

