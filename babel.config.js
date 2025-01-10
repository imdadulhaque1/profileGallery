module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@components': './src/components',
          '@assets': './src/assets',
          '@cache': './src/cache',
          '@navigators': './src/navigators',
          '@restApi': './src/restApi',
          '@stateManagement': './src/stateManagement',
          '@utils': './src/utils',
          '@views': './src/views',
          '@interface': './src/interface',
          '@src': './src',
        },
      },
    ],
  ],
};
