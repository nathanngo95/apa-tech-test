const matchers = require('jest-extended');
require('@testing-library/jest-dom');
expect.extend(matchers);

afterEach(() => {
  jest.useRealTimers();
});