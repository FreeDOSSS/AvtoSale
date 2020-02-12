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
      localIdentName: "[local]___[hash:base64:5]"
    }
    // webpack: function(config) {
    //   config.module.rules.push({
    //     test: /\.(png|jpg|jpeg|svg|eot|otf|ttf|woff|woff2)$/,
    //     use: {
    //       loader: "url-loader",
    //       options: {
    //         limit: 8192,
    //         publicPath: "/_next/static/",
    //         outputPath: "static/",
    //         name: "[name].[ext]"
    //       }
    //     }
    //   });
    //   return config;
    // }
  })
);
