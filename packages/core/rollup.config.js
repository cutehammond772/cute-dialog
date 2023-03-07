import { babel } from "@rollup/plugin-babel";
import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import peerDeepsExternal from "rollup-plugin-peer-deps-external";
import json from "@rollup/plugin-json";
import typescript from "rollup-plugin-typescript2";

const extensions = [".js", ".jsx", ".ts", ".tsx"];

process.env.BABEL_ENV = "production";

const makeRollup = ({ input, output }) => ({
  input,
  exports: "named",
  output,
  plugins: [
    peerDeepsExternal(),
    json(),
    nodeResolve({ extensions }),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    babel({
      babelHelpers: "bundled",
      exclude: "node_modules/*",
      include: `src/**/*.(${extensions.join("|")})`,
    }),
  ],
});

export default [
  makeRollup({
    input: "./src/index.ts",
    output: {
      file: "./dist/cjs.js",
      sourcemap: true,
      format: "cjs",
    },
  }),
  makeRollup({
    input: "./src/index.ts",
    output: {
      file: "./dist/esm.js",
      sourcemap: true,
      format: "esm",
    },
  }),
];
