module.exports = function (api) {
  api.cache(true);

  const presets = [ 'babel-preset-expo' ];
  const plugins = [ '@babel/plugin-proposal-export-namespace-from','react-native-reanimated/plugin', ];

  return {
    presets,
    plugins
  };
}