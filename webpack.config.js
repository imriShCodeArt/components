const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require("path");
const deps = require("./package.json").dependencies;
module.exports = {
  output: {
    publicPath: "http://localhost:4010/",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
    alias: {
      shared: path.resolve(__dirname, "./shared/"),
    },
  },

  devServer: {
    port: 4010,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(png|jpg|jpeg|svg)$/,
        exclude: /node_modules/,
        use: {
          loader: "file-loader",
        },
      },
    ],
  },
  devtool: "inline-source-map",
  plugins: [
    new ModuleFederationPlugin({
      name: "components",
      filename: "remoteEntry.js",
      remotes: {
        theme: "theme@http://localhost:4000/remoteEntry.js",
      },
      exposes: {
        "./Avatar": "./shared/Avatar",
        "./Breadcrumbs": "./shared/Breadcrumbs",
        "./ButtonBase": "./shared/Button/ButtonBase",
        "./Button": "./shared/Button",
        "./ContrastButton": "./shared/Button/ContrastButton",
        "./TextButton": "./shared/Button/TextButton",
        "./Link": "./shared/Link",
        "./PageHeading": "./shared/Typography/PageHeading",
        "./PageSubHeading": "./shared/Typography/PageSubHeading",
        "./FooterHeading": "./shared/Typography/FooterHeading",
        "./SubHeading": "./shared/Typography/SubHeading",
        "./WidgetHeading": "./shared/Typography/WidgetHeading",
        "./Menu": "./shared/Menu",
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
        "@emotion/react": {
          singleton: true,
          requiredVersion: deps["@emotion/react"],
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      title: "components",
      favicon: "./src/favicon.ico",
    }),
  ],
};
