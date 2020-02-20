const withSass = require("@zeit/next-sass");
// const withImages = require("next-images");
const withImages = require("./images");
const withPlugins = require("next-compose-plugins");

// v1 stab

// module.exports = withImages(
//   withSass({
//     cssModules: true,
//     cssLoaderOptions: {
//       importLoaders: 1,
//       localIdentName: "[local]_[hash]"
//     }
//   })
// );

// v2
module.exports = withPlugins([
  [
    withSass,
    {
      cssModules: true,
      cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: "[local]_[hash]"
      }
    }
  ],
  [
    withImages,
    {
      imagesName: "[name].[ext]"
    }
  ]
]);
