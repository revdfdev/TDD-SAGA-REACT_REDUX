module.exports = {
  extends: ["codingitwrong"],
  parser: "babel-eslint",
  plugins: ["jest", "react"],
  env: {
    browser: true,
    es6: true,
    "jest/globals": true,
    jquery: false
  },
  rules: {
    "no-redeclare": "error",
    "no-unused-vars": 0
  }
};
