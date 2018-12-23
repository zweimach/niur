module.exports = {
  testEnvironment: "jsdom",
  testMatch: [
    "<rootDir>/src/__tests__/**/*.js",
    "<rootDir>/src/**/?(*.)(spec|test).js",
  ],
  collectCoverageFrom: ["<rootDir>/src/**/*.js"],
};
