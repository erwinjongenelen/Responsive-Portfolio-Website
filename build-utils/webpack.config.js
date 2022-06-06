import { merge } from "webpack-merge"
import commonConfig from "./webpack.common.js"
import devConfig from "./webpack.dev.js"
import prodConfig from "./webpack.prod.js"

const config = ({ env }) => {
  let envConfig = devConfig;
  if( env === "prod" ) {
    envConfig = prodConfig;
  }

  return merge(commonConfig, envConfig);
};

export default config;