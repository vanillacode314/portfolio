const postcssJitProps = require("postcss-jit-props");
const OpenProps = require("open-props");
module.exports = {
  plugins: [
    require("stylelint")({ fix: true }),
    require("postcss-nested"),
    postcssJitProps(OpenProps),
    require("postcss-custom-media")({
      importFrom: "./node_modules/open-props/media.min.css",
    }),
    require("autoprefixer"),
    require("cssnano"),
    require("postcss-reporter")({ clearReportedMessages: true }),
  ],
};
