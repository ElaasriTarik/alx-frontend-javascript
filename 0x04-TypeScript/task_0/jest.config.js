module.exports = {
  // Tell Jest to handle `*.ts` files with ts-jest
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  // The test environment that will be used for testing
  testEnvironment: 'node',
};