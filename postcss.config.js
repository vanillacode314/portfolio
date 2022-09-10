const postcssJitProps = require("postcss-jit-props");
const OpenProps = require("open-props");
module.exports = {
  plugins: [
    require("postcss-nested"),
    postcssJitProps(OpenProps),
    require("postcss-custom-media")({
      importFrom: "./node_modules/open-props/media.min.css",
    }),
    require("postcss-text-stroke"),
    require("autoprefixer"),
    require("cssnano")({
      safe: true,
      calc: false,
    }),
  ],
};
