const merge = require("webpack-merge");
const parts = require("./webpack.parts");

const baseConfig = merge([
    parts.resolve,
    parts.HTMLWebpackConfig,
    parts.loadImagesAndFonts,
    parts.loadJavaScript,
]);


const productionConfig = merge([
    parts.loadAndExtractCSS,
]);

const developmentConfig = merge([
    parts.loadCSS,
    parts.sourceMaps,
    parts.dashboard,
    parts.friendlierErrors,
    parts.devServer
]);

module.exports = mode => {
    if(mode === "production"){
        return merge([baseConfig, productionConfig, {mode}]);
    }
    else{
        return merge([baseConfig, developmentConfig, {mode}]);
    }
};
