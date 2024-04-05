module.exports = {
  // bail: para executar testes em número X de tentativas e lança um erro
  bail: true,
  coverageProvider: "v8",
  testMatch: [
    "<rootDir>/src/**/*.spec.js"
  ],
}