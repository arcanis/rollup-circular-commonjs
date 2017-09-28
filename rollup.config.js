export default {

    input: 'a',
    output: { file: 'bundle.js', format: 'umd', name: 'bundle' },

    plugins: [
        require('rollup-plugin-commonjs')({
        })
    ]

}
