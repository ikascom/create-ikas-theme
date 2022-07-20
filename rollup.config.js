import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import json from "@rollup/plugin-json";
import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";
import executable from "rollup-plugin-executable";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import copy from "rollup-plugin-copy";

export default [
  {
    input: "./index.ts",
    output: [
      {
        file: "./build/index.cjs",
        format: "cjs",
        sourcemap: false,
      },
    ],
    inlineDynamicImports: true,
    plugins: [
      terser(),
      resolve({
        preferBuiltins: true,
        exportConditions: ["node"],
      }),
      peerDepsExternal(),
      commonjs(),
      typescript({
        declaration: false,
        typescript: require("ttypescript"),
        tsconfigDefaults: {
          compilerOptions: {
            plugins: [
              { transform: "typescript-transform-paths" },
              {
                transform: "typescript-transform-paths",
                afterDeclarations: true,
              },
            ],
          },
        },
      }),
      json(),
      executable(),
      copy({
        targets: [{ src: "templates", dest: "./build/" }],
        verbose: true,
      }),
    ],
  },
];
