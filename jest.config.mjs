const jestConfig = {
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.[jt]s?(x)'],
  coveragePathIgnorePatterns: ['/node_modules/', '/fixtures/'],
  extensionsToTreatAsEsm: ['.ts'],
  transform: {
    // '^.+\\.[tj]sx?$' to process js/ts with `ts-jest`
    // '^.+\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`
    '\\.[jt]sx?$': [
      'ts-jest',
      {
        useESM: true,
      },
    ],
  },
  testEnvironment: 'node',
  testTimeout: 30000,
  testMatch: [
    '<rootDir>/src/**/*.spec.[jt]s?(x)',
    '<rootDir>/tests/**/*.spec.[jt]s?(x)',
  ],
}


export default jestConfig;