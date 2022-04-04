module.exports = {
  collectCoverageFrom: ['src/**/*.ts'],
  setupFilesAfterEnv: ['<rootDir>/spec/setup.ts'],
  testEnvironment: 'node',
  moduleNameMapper: {
    '^vite-jsconfig-paths$': '<rootDir>/src/index.ts',
  },
  transform: {
    '\\.tsx?$': ['esbuild-jest'],
  },
}
