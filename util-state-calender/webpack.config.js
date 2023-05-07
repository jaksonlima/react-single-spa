const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "dasa-mfe",
    projectName: "util-state-calender",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    // options: {
    //   external: ["zustand", "zustand/middleware"],
    // },
    // modify the webpack config however you'd like to by adding to this object
  });
};
