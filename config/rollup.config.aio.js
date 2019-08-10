import babel from "rollup-plugin-babel";
import nodeResolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import uglify from "rollup-plugin-uglify";
import filesize from "rollup-plugin-filesize";
import common from "./rollup.js";
const isProd = process.env.NODE_ENV === "production";

export default {
    input: "src/index.js",
    output: {
        file: isProd ? "dist/index.aio.min.js" : "dist/index.aio.js",
        format: "umd",
        // 如果不同时使用 export 与 export default 可打开legacy
        legacy: true,
        name: common.name,
        banner: common.banner,
    },
    plugins: [
        nodeResolve(),
        commonjs({
            include: "node_modules/**",
        }),
        babel({
            "presets": [
                [
                    "@babel/preset-env",
                    {
                        "targets": {
                            "browsers": "last 2 versions, > 1%, ie >= 6",
                            "node": "0.10"
                        },
                        "modules": false
                    }
                ]
            ]
        }),
        isProd && uglify.uglify(),
        filesize()
    ]
};