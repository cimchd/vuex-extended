module.exports = function (api) {
  api.cache(true);

  const presets = ["@babel/env"];
  const ignore =  ["**!/!*.spec.js"];

  return {
    presets,
    ignore
  };
};