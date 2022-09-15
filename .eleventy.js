module.exports = function (eleventyConfig) {
    eleventyConfig.addWatchTarget("./src/sass/");

    // https://www.11ty.dev/docs/copy/
    // https://www.11ty.dev/docs/plugins/image/

    eleventyConfig.addPassthroughCopy('./src/images');

    return {
        dir: {
        input: "src",
        output: "public",
        },
    };
};
