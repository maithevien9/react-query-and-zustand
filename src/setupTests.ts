import "vitest-canvas-mock";

import matchers from "@testing-library/jest-dom/matchers";
import { cleanup } from "@testing-library/react";
import { fetch } from "cross-fetch";

// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
expect.extend(matchers);

afterEach(() => {
  cleanup();
});

global.fetch = fetch;

// eslint-disable-next-line no-console
const originalError = console.error;
beforeAll(() => {
  const { getComputedStyle } = window;
  window.getComputedStyle = (elt) => getComputedStyle(elt);
  // eslint-disable-next-line no-console
  console.error = (...args) => {
    if (
      /Warning: ReactDOM.render is no longer supported in React 18./.test(
        args[0]
      )
    ) {
      return;
    }
    originalError.call(console, ...args);
  };
});
afterAll(() => {
  // eslint-disable-next-line no-console
  console.error = originalError;
});
