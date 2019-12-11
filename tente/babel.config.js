const path = require('path')

module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
  ],
  plugins: [
    '@babel/plugin-transform-object-assign', 
    [
      '@babel/plugin-transform-runtime',
      {
        //helpers: false,
        //regenerator: true,
      },
    ],
  ],
  "sourceMaps": true // false if you want NO .map files ; if on, must match webpack.config
};
