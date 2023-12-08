
const config = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    coverageDirectory: 'coverage',
    collectCoverageFrom: ['src/**/*.ts'],
    collectCoverage:true,
    displayName: 'CLIENT',
    coverageReporters: ['clover', 'json', 'lcov', ['text', {skipFull: true}]],
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1',
    },
    testMatch: ['<rootDir>/tests/**/*.test.ts'],
  };
  
  module.exports = config;