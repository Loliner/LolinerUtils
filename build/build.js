const fs = require('fs')
const path = require('path')
const rollup = require('rollup')

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
};

rollup.rollup(config).then(bundle => {
    bundle.write(config.output);
});