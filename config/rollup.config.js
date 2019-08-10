import babel from "rollup-plugin-babel";
import nodeResolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import filesize from "rollup-plugin-filesize";
import common from "./rollup.js";

export default {
    input: "src/index.js",
    output: {
        file: "dist/index.js",
        format: "cjs",
        // 如果不同时使用 export 与 export default 可打开legacy
        legacy: true,
        banner: common.banner,
    },
    plugins: [
        nodeResolve(),
        commonjs({
            include: "node_modules/**",
        }),
        babel({
            exclude: "node_modules/**"
        }),
        filesize()
    ]
};