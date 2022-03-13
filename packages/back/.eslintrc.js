module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ["airbnb-base", "airbnb-typescript"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "react/jsx-filename-extension": [0],
    "no-unused-vars": "off",
  },
};
