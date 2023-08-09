module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: ["react-native-reanimated/plugin"],
    //?drawer kullanacagimiz zaman pluginsi ekliyoruz
  };
};
// //?drawer kullanacagimiz zaman reanimatedi degistiriyoruz 2.11.0
