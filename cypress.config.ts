import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    testIsolation: false,
    viewportHeight: 900,
    viewportWidth: 1600,
  },
});
