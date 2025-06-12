module.exports = {
  plugins: [
    require('autoprefixer'),
    require('cssnano')({
      preset: 'default',
    }),
    require('postcss-url')([
      {
        url: 'copy',
        assetsPath: 'assets',
        basePath: '../../src/assets/fonts', // Specify the folder where the font assets are located
      },
    ]),
  ],
};
