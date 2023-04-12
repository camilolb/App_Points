module.exports = {
  presets: ['module:metro-react-native-babel-preset', '@babel/preset-env'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        envName: 'APP_ENV',
        moduleName: '@env',
        path: '.env',
      },
      '@babel/plugin-proposal-private-methods',
    ],
  ],
};
