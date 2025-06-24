// stryker.config.js
/**
 * @type {import('@stryker-mutator/api/core').PartialStrykerOptions}
 */
export default {
  mutator: "typescript",
  testRunner: "vitest",
  coverageAnalysis: "off",
  reporters: ["html", "clear-text", "progress"],
  tsconfigFile: "tsconfig.json",
  vitest: {
    configFile: "vite.config.ts",
  },
  mutate: ["src/**/*.{ts,tsx}", "!src/**/*.test.{ts,tsx}", "!src/*.tsx"],
};
