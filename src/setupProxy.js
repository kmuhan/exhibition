const { createProxyMiddleware } = require("http-proxy-middleware")

module.exports = function(app){
    app.use(
        createProxyMiddleware("/api", {
            target: "https://kmuhan-cuddly-zebra-vwpx77vqqxpc74v-8080.preview.app.github.dev",
            changeOrigin: true,
        })
    )
}