const path =  require('path')

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'public/English/English Reading page/index.js'),
    output: {
        path: path.resolve(__dirname, 'public/dist'),
        filename: 'bundle.js'
    },
}