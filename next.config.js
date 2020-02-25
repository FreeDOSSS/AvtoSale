const withSass = require("@zeit/next-sass");
// const withImages = require("next-images");
const withImages = require("./images");
const withPlugins = require("next-compose-plugins");
const router = require("./src/router/router");

next_config = {
  exportPathMap: async function(
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    const valuesRouter = Object.values(router);
    let tempArray = valuesRouter.map(el => {
      if (!Array.isArray(el)) {
        if (el.path) return { [el.url]: { page: el.path } };
      } else {
        return el.map(elem => {
          if (elem.path) return { [elem.url]: { page: elem.path } };
        });
      }
    });

    let end = {};

    for (let i = 0; i < tempArray.length; i += 1) {
      if (tempArray[i]) {
        if (Array.isArray(tempArray[i])) {
          for (let d in tempArray[i]) {
            if (tempArray[i][d]) end = { ...end, ...tempArray[i][d] };
          }
        } else {
          end = { ...end, ...tempArray[i] };
        }
      }
    }
    return end;
  }
};

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
  ],
  next_config
]);
