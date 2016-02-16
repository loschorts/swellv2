module.exports = {
    context: __dirname + "/frontend",
    entry: "./routes.jsx",
    output: {
        path: __dirname + "/app/assets/javascripts",
        filename: "bundle.js"
    },
    devtool: "source-map"
};