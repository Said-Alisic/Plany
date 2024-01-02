module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
  ],
  plugins: ["react", "@typescript-eslint", "react-hooks", "react-native"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2023,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    "react/react-in-jsx-scope": "off", // React 17 doesn't require importing React in every file
    "react/prop-types": "off", // TypeScript takes care of prop types
    "@typescript-eslint/explicit-module-boundary-types": "warn", // Warn implicit return types
    "react-hooks/exhaustive-deps": "warn",
    "react-native/no-color-literals": "warn",
    "react-hooks/rules-of-hooks": "error",
    "react-native/no-unused-styles": "error",
    "react-native/split-platform-components": "error",
    "react-native/no-inline-styles": "error",
    "react-native/no-raw-text": "error",
    "@typescript-eslint/no-explicit-any": "error",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  env: {
    node: true,
  },
};
