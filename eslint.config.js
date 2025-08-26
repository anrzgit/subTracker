import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

module.exports = defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser, sourceType: "module" },
    rules: {
      "no-unused-vars": ["warn", { "args": "all", "argsIgnorePattern": "^_" }]
    }
  },
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
]);

