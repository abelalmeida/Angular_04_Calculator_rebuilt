import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts}"], plugins: { js }, extends: ["js/recommended"], languageOptions: { globals: globals.browser } },
  //tseslint.configs.recommended,
{
  rules: {
    // Your custom rules here
    "no-unused-vars": "warn",
    "arrow-body-style": ["error", "always"],
    "no-non-null-assertion": "off",
    "no-unused-expressions": "warn",

},

},
]);
