module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: '.',
          alias: {
            src: './src',
            utils: './src/utils',
            svg: './assets/images',
            sounds: './assets/sounds',
            modules: './src/modules',
          },
        },
      ],
    ],
  }
}
