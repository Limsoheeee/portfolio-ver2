const {
  useBabelRc,
  removeModuleScopePlugin,
  override,
  addWebpackAlias,
} = require("customize-cra");
const path = require("path");
const { config } = require("process");

module.exports = {
  webpack: override(
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useBabelRc(),
    removeModuleScopePlugin(),
    addWebpackAlias({ "@src": path.resolve(__dirname, "src") }),
    (config) => {
      config.resolve.fallback = {
        perf_hooks: false,
      };
      //   config.module.noParse = [require.resolve("typescript/lib/typescript.js")];
      config.module.exprContextCritical = false;
      config.stats = "errors-only";
      return config;
    }
  ),
};
