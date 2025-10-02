const { configMetroIntlayer } = require("react-native-intlayer/metro");
const { getDefaultConfig } = require("expo/metro-config");

module.exports = (async () => {
  const defaultConfig = getDefaultConfig(__dirname);

  return await configMetroIntlayer(defaultConfig);
})();
