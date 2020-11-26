module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/impress-tailwindcss-demo/'
    : '/',
  configureWebpack: {
    externals: {
      impress: "impress",
    },
  },
};
