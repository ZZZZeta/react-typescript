const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  Object.keys(PROXY_SETTINGS).forEach((env) => {
    const options = PROXY_SETTINGS[env];
    app.use(createProxyMiddleware(env, options));
  });
};

const PROXY_SETTINGS = {
  '/api': {
    target: 'http://localhost:5000',
    changeOrigin: true,
    pathRewrite: {
      '^/api': '',
    },
  },
};
