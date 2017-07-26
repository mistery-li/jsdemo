module.exports = {
    entry: {
        jsdemo: './src/animation.js'
    },
    output: {
        path: __dirname + '/build',
        filename: '[name].js',
        library: 'animation',
        libraryTarget: 'umd'
    }
};