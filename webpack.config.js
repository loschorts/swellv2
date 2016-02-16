module.exports = {
    context: __dirname + "/frontend",
    entry: "./routes",
    output: {
        path: __dirname + "/app/assets/javascripts",
        filename: "bundle.js"
    }
};