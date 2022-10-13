import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import pkg from "./package.json";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import rollupNodeResolve from "rollup-plugin-node-resolve";
import rollupJson from "rollup-plugin-json";

export default {
  input: "src/index.js",
  output: [
    { file: pkg.main, format: "cjs", sourcemap: true },
    { file: pkg.module, format: "esm", sourcemap: true },
  ],
  plugins: [
    peerDepsExternal(),
    resolve({
      extensions: [".js", ".jsx"],
    }),
    babel({
      babelHelpers: "bundled",
      exclude: "node_modules/**",
      presets: ["@babel/preset-env", "@babel/preset-react"],
    }),

    commonjs(),
    rollupNodeResolve({ jsnext: true, preferBuiltins: true, browser: true }),
    rollupJson(),
  ],
};