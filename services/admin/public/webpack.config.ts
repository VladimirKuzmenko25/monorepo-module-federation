import path from "path";
import webpack from "webpack";
import {
  BuildMode,
  BuildPaths,
  BuildPlatform,
  buildWebpack,
} from "@packages/build-config";

interface EnvVariables {
  mode?: BuildMode;
  port?: number;
  analyzer?: boolean;
  platform?: BuildPlatform;
}

export default (env: EnvVariables) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    output: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
    public: path.resolve(__dirname, "public"),
    src: path.resolve(__dirname, "src"),
  };

  const config: webpack.Configuration = buildWebpack({
    port: env.port ?? 3000,
    mode: env.mode ?? "development",
    platform: env.platform ?? "desktop",
    analyzer: env.analyzer,
    paths,
  });

  return config;
};
