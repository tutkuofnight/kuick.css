const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production', // production modunda çalışacak şekilde ayarlandı
  entry: path.resolve(__dirname, 'src/kuick.scss'), // SCSS dosyasının giriş noktası
  output: {
    path: path.resolve(__dirname, 'dist'), // çıktı dosyasının kaydedileceği dizin
  },
  module: {
    rules: [
      {
        test: /\.scss$/, // SCSS dosyalarını işlemek için test
        use: [
          MiniCssExtractPlugin.loader, // CSS dosyalarını ayırmak için kullanılan loader
          'css-loader', // CSS'yi yüklemek ve içeri aktarmak için kullanılan loader
          'sass-loader', // SCSS dosyalarını CSS'e çevirmek için kullanılan loader
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'kucik.min.css', // Ayıklanan ve minify edilen CSS dosyasının adı
    }),
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          output: {
            comments: false,
          },
        },
        extractComments: false,
      }),
    ],
  },
};
