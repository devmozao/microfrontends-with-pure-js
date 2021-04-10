const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const RemoteURL = {
  products: 'http://localhost:8081',
  cart: 'http://localhost:8082'
}

module.exports = {
  mode: 'development',
  devServer: {
    port: 8080,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        products: `products@${RemoteURL.products}/remoteEntry.js`,
        cart: `cart@${RemoteURL.cart}/remoteEntry.js`,
      }
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    })
  ]
};