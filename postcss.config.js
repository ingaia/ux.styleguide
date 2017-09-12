module.exports = (ctx) => {
return {
    plugins: [
        require('autoprefixer')(ctx.plugin)
    ]
    }
}