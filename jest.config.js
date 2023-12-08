module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    coverageDirectory: 'coverage',
    collectCoverageFrom: ['src/**/*.ts'],
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1',
    },
    testMatch: ['<rootDir>/tests/**/*.test.ts'],
  };
  