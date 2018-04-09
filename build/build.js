const fs = require('fs')
const path = require('path')
const rollup = require('rollup')
const resolve = require('rollup-plugin-node-resolve')
const babel = require('rollup-plugin-babel')

if (!fs.existsSync('dist')) {
    fs.mkdirSync('dist')
}

const config = {
    input: path.resolve(__dirname, '../src/Loliner.js'),
    output: {
        file: path.resolve(__dirname, '../dist/L.js'),
        format: 'iife',
        name: 'L',
    },
    plugins: [
        resolve(),
        babel({
            exclude: 'node_modules/**' // 只编译我们的源代码
        })
    ]
};

rollup.rollup(config).then(bundle => {
    bundle.write(config.output);
});