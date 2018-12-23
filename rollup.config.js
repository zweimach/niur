import babel from "rollup-plugin-babel";
import { terser } from "rollup-plugin-terser";

import pkg from "./package.json";

export default {
  input: "src/index.js",
  output: [
    {
      file: pkg.browser,
      format: "umd",
      name: "Niur",
    },
    {
      file: pkg.main,
      format: "cjs",
    },
    {
      file: pkg.module,
      format: "es",
    },
  ],
  plugins: [babel(), terser()],
};
