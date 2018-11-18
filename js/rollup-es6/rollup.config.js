import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";

export default {
  input: "./src/index.js",
  output: {
    file: "./dist/bundle.js",
    format: "umd"
  },
  plugins: [
    resolve(),
    babel({
      exclude: "node_modules/**"
    }),
  ]
};