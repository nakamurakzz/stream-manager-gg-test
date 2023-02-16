import type { AWS } from "@serverless/typescript";

const serverlessConfiguration: AWS = {
  service: "stream-manager-test",
  frameworkVersion: "2",
  custom: {
    webpack: {
      webpackConfig: "./webpack.config.ts",
      includeModules: true,
    },
    defaultStage: "dev",
  },
  plugins: ["serverless-webpack"],
  provider: {
    name: "aws",
    runtime: "nodejs14.x",
    region: "ap-northeast-1",
    stage: "${opt:stage, self:custom.defaultStage}",
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1",
    },
    lambdaHashingVersion: "20201221",
  },
  // import the function via paths
  functions: {
    subscribeElementData: {
      handler: "src/handler.index",
    },
  },
};

module.exports = serverlessConfiguration;
