module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
    "!src/index.tsx",
    "!src/react-app-env.d.ts",
    "!src/reportWebVitals.ts",
    "!src/setupTests.ts",
    "src/selectors/*.{ts,tsx}",
    "!src/serviceWorker.ts",
    "!src/hooks/*.{ts,tsx}",
    "!src/mappers/*.{ts,tsx}",
    "!src/utils/*.{ts,tsx}"
  ],
  coverageReporters: ["html", "text"],
};
