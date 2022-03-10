module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@screens': './src/screens',
          '@navigators': './src/navigators',
          '@components': './src/components',
          '@interfaces': './src/interfaces',
          '@themes': './src/themes',
        }
      },
    ],
  ],
};
