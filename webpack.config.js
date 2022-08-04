const path =  require('path')

module.exports = {
    mode: 'development',
    entry: {
        // getAllTests : path.resolve(__dirname, 'api/getAllTests.js'),
        // reading : path.resolve(__dirname, 'public/English/English Reading page/index.js'),
        // noCalc : path.resolve(__dirname, 'public/Maths/maths(no calc)/index.js'),
        // login : path.resolve(__dirname, 'public/js/login.js')
        dashboard : path.resolve(__dirname, 'public/js/dashboard.js')
},
    output: {
        path: path.resolve(__dirname, 'public/dist'),
        filename: '[name].js',
    },
}