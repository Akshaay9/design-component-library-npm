const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.jsx"],
  staticDirs: ["../public"],
  // Add any Storybook addons you want here: https://storybook.js.org/addons/
  // addons: ["@storybook/addon-essentials"],
  managerWebpack: (config, options) => {
    options.cache.set = () => Promise.resolve();
    return config;
  },
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
      include: path.resolve(__dirname, "../"),
    });

    config.module.rules.push({
      test: /\.(js|jsx)$/,
      loader: require.resolve("babel-loader"),
      options: {
        presets: [["react-app", { flow: false, typescript: false }]],
      },
    });
    config.resolve.extensions.push(".js", ".jsx");

    return config;
  },
};