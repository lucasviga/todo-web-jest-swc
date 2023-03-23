export default {
  moduleNameMapper: {
    '^.+\\.svg$': 'jest-svg-transformer',
  },
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/config/jest/jest.setup.js'],
  transform: {
    '^.+\\.(t|j)sx?$': ['@swc/jest'],

    '^.+\\.css$': '<rootDir>/src/config/jest/cssTransform.cjs',
    '^(?!.*\\.(js|jsx|mjs|cjs|ts|tsx|css|json)$)':
      '<rootDir>/src/config/jest/fileTransform.cjs',
  },
}
