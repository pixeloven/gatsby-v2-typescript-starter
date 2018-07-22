const postcssPresetEnv = require(`postcss-preset-env`);

// TODO TSX
module.exports = () => ({
  plugins: [
    postcssPresetEnv({
      stage: 0
    })
  ]
});
