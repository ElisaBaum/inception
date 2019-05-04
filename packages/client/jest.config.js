const { defaults } = require('ts-jest/presets');

module.exports = {
  transform: {
    ...defaults.transform,
  },
  testMatch: [
    '**/?(*.)(spec|test).(t)s?(x)',
  ],
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js'
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.(t)s?(x)',
    '!index.tsx',
    '!**/*.d.ts',
    '!**/node_modules/**',
  ],
  setupFilesAfterEnv: [
    './config/setupTests.ts'
  ],
};
