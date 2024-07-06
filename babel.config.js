module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@Modules': './src/Modules/index',
          '@Components': './src/Components/index',
          '@Routes': './src/Routes/',
          '@assets': './src/assets/',
          '@utils': './src/utils/',
        },
      },
    ]
  ],
};
