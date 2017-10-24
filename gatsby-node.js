exports.modifyWebpackConfig = ({ config, stage }) => {
  switch (stage) {
    case "develop":
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
    default:
      config.loader('css', (config) => {
        config.loader = "null-loader";
        return config;
      });
  }

  return config;
};