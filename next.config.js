const withSass = require("@zeit/next-sass");
const withImages = require("next-images");
// module.exports = withSass({
//   cssModules: true,
//   cssLoaderOptions: {
//     importLoaders: 1,
//     localIdentName: "[local]___[hash:base64:5]"
//   }
// });

module.exports = withImages(
  withSass({
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: "[local]"
    }
  })
);
