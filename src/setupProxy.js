const proxy = require("htpp-proxy-middleware");

module.exports = function(app) {
    app.use(
        proxy("/", {
            target: "http://m.kugou.com?json=true",
            changeOrigin: true
        })
    )
}