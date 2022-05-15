/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  moduleNameMapper: {
    'test/(.*)$': '<rootDir>/test/$1',
  },
  transform: {
    // "^.+\\.html?$": "html-loader-jest",
    '.*': 'babel-jest',
  },
};
