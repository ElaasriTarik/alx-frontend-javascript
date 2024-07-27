import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        // Ensure there are no leading/trailing whitespaces in global names
      }
    }
  },
  pluginJs.configs.recommended,
];