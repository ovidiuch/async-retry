// These 3rd party deps are pure ESM and need to be transformed for Jest.
// Once Jest ESM is safe to use, we can remove this.
// https://jestjs.io/docs/ecmascript-modules
const esDependencies = ['async-until'];

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.[jt]sx?$': ['ts-jest', { tsconfig: { allowJs: true } }],
  },
  // https://jestjs.io/docs/configuration#transformignorepatterns-arraystring
  transformIgnorePatterns: [`/node_modules/(?!${esDependencies.join('|')}/)`],
  collectCoverageFrom: ['**/src/**/*.{ts,tsx}', '!**/testHelpers/**'],
};
