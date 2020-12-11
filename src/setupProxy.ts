import { createProxyMiddleware, Options, RequestHandler } from "http-proxy-middleware";

module.exports = function (app: { use: (arg0: RequestHandler) => void; }) {
  Object.keys(PROXY_SETTINGS).forEach((env) => {
    const options = PROXY_SETTINGS[env];
    app.use(createProxyMiddleware(env, options));
  });
};

type ProxySettings = {
  [url: string]: Options
}

const PROXY_SETTINGS: ProxySettings = {
  '/api': {
    target: 'http://localhost:5000',
    changeOrigin: true,
    pathRewrite: {
      '^/api': '',
    },
  },
};
