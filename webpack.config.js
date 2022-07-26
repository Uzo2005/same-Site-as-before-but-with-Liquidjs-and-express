const path =  require('path')

module.exports = {
    mode: 'development',
    entry: {
        reading : path.resolve(__dirname, 'public/English/English Reading page/index.js'),
        noCalc : path.resolve(__dirname, 'public/Maths/maths(no calc)/index.js'),
        login : path.resolve(__dirname, 'public/js/login.js')
},
    output: {
        path: path.resolve(__dirname, 'public/dist'),
        filename: '[name].js',
    },
}