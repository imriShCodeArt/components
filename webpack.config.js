const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require("path");
const deps = require("./package.json").dependencies;
module.exports = {
  output: {
    publicPath: "http://localhost:4001/",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
    alias: {
      shared: path.resolve(__dirname, "./shared/"),
    },
  },

  devServer: {
    port: 4001,
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
      remotes: {},
      exposes: {
        "./data/Avatar": "./shared/data_display/Avatar",
        "./data/Badge": "./shared/data_display/Badge",
        "./data/Chip": "./shared/data_display/Chip",
        "./data/Divider": "./shared/data_display/Divider",
        "./data/Heading": "./shared/data_display/Heading",
        "./data/H1": "./shared/data_display/Heading/H1",
        "./data/H2": "./shared/data_display/Heading/H2",
        "./data/List": "./shared/data_display/List",
        "./data/ListItem": "./shared/data_display/ListItem",
        "./data/Table": "./shared/data_display/Table",
        "./data/Text": "./shared/data_display/Text",
        "./feedback/Alert": "./shared/feedback/Alert",
        "./feedback/Backdrop": "./shared/feedback/Backdrop",
        "./feedback/Dialog": "./shared/feedback/Dialog",
        "./feedback/Snackbar": "./shared/feedback/Snackbar",
        "./io/AutoComplete": "./shared/io/AutoComplete",
        "./io/Button": "./shared/io/Button",
        "./io/ButtonGroup": "./shared/io/ButtonGroup",
        "./io/Checkbox": "./shared/io/Checkbox",
        "./io/Fab": "./shared/io/Fab",
        "./io/FieldEmail": "./shared/io/FieldEmail",
        "./io/FormField": "./shared/io/FormField",
        "./io/FieldPassword": "./shared/io/FieldPassword",
        "./io/AutoComplete": "./shared/io/FieldDate",
        "./io/IconButton": "./shared/io/IconButton",
        "./io/Radio": "./shared/io/Radio",
        "./io/Rating": "./shared/io/Rating",
        "./io/Select": "./shared/io/Select",
        "./io/Slider": "./shared/io/Slider",
        "./io/Switch": "./shared/io/Switch",
        "./io/ToggleButton": "./shared/io/ToggleButton",
        "./navigation/BottomNavigation": "./shared/navigation/BottomNavigation",
        "./navigation/Breadcrumbs": "./shared/navigation/Breadcrumbs",
        "./navigation/Drawer": "./shared/navigation/Drawer",
        "./navigation/Link": "./shared/navigation/Link",
        "./navigation/Menu": "./shared/navigation/Menu",
        "./navigation/MenuItem": "./shared/navigation/MenuItem",
        "./navigation/Pagination": "./shared/navigation/Pagination",
        "./navigation/SpeedDial": "./shared/navigation/SpeedDial",
        "./navigation/Stepper": "./shared/navigation/Stepper",
        "./navigation/Tabs": "./shared/navigation/Tabs",
        "./surfaces/Accordion": "./shared/surfaces/Accordion",
        "./surfaces/AppBar": "./shared/surfaces/AppBar",
        "./surfaces/Card": "./shared/surfaces/Card",
        "./surfaces/Collapse": "./shared/surfaces/Collapse",
        "./providers/Form": "./shared/providers/Form",
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
