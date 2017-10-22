exports.modifyWebpackConfig = ({ config, stage }) => {
  switch (stage) {
    case "build-html":
      config.loader('css', (config) => {
        delete config.loader;
        config.loaders = [
          "file-loader",
          "extract-loader",
          "css-loader?minimize",
          "postcss-loader",
        ];
        return config;
      });
      break;
    case "development":
      break;
    default:
      config.removeLoader("css");
  }

  return config;
};