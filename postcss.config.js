const postcss = require('postcss')
const postcssJitProps = require('postcss-jit-props')
const OpenProps = require('open-props')

const plugins = []

process.env.MODE === 'PROD' && plugins.push(require('stylelint')({ fix: true }))

plugins.push(
  require('postcss-mixins')({
    mixins: {
      containers(mixin, args) {
        const nodes = {}
        const sizes = args.split(' ')
        for (const size of sizes) {
          nodes[`@media (--${size}-n-above)`] = {
            '--container-size': `var(--size-${size})`,
          }
        }
        return nodes
        /*   return Object.fromEntries( */
        /*     sizes.map((size) => [ */
        /*       `@media (--${size}-n-above)`, */
        /*       { [`--container-size`]: `var(--size-${size})` }, */
        /*     ]) */
        /*   ); */
      },
    },
  }),
  require('postcss-nested'),
  postcssJitProps(OpenProps),
  require('postcss-custom-media')({
    importFrom: './node_modules/open-props/media.min.css',
  }),
  require('autoprefixer'),
  require('cssnano'),
  require('postcss-reporter')({ clearReportedMessages: true })
)

module.exports = {
  plugins,
}
