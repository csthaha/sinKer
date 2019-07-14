const proxy = require("htpp-proxy-middleware");

module.exports = function(app) {
    app.use(
        proxy("/api", {
            target: "https://resource.smartisan.com/marketing/mobile/index_fac3d2920911d9e19ea7b4af2814ca9f.json",
            changeOrigin: true
        })
    )
}