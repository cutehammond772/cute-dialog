import babel from "@rollup/plugin-babel";
import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import peerDeepsExternal from "rollup-plugin-peer-deps-external";
import json from "@rollup/plugin-json";
import terser from "@rollup/plugin-terser";
import typescript from "rollup-plugin-typescript2";

const extensions = [".js", ".jsx", ".ts", ".tsx"];

process.env.BABEL_ENV = "production";

const bundleJS = ({ input, output }) => ({
  input,
  exports: "named",
  output,
  plugins: [
    peerDeepsExternal(),
    nodeResolve({ extensions }),
    commonjs(),
    typescript(),
    json(),
    babel({
      babelHelpers: "bundled",
      exclude: "./node_modules/*",
      include: `./src/**/*.(${extensions.join("|")})`,
    }),
    terser({ format: { comments: false } }),
  ],
});

export default [
  bundleJS({
    input: "./src/index.ts",
    output: [
      {
        file: "./dist/cjs/index.js",
        format: "cjs",
      },
    ],
  }),
  bundleJS({
    input: "./src/index.ts",
    output: [
      {
        file: "./dist/esm/index.mjs",
        format: "esm",
      },
    ],
  }),
];
