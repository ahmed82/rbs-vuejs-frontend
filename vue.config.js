module.exports = {
  devServer: {
    proxy: {
      '': {
        secure: false,
        target: 'http://localhost:8081',
        changeOrigin: true,

      },
    },
  },
};
