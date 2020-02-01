const tailwindcss = require("tailwindcss")
const postcssPresetEnv = require("postcss-preset-env")({ stage: 1 })
const cssnano = require('cssnano')({
    preset: 'default'
})

module.exports = {
    plugins: [
        tailwindcss,
        postcssPresetEnv,
        cssnano
    ]
};
