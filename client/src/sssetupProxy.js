const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/api/fruit',
    createProxyMiddleware({
      target: 'https://localhost:3001',
        changeOrigin: true,
        secure: false
    })
    );

     app.use(
    '/api/sweet',
    createProxyMiddleware({
      target: 'https://localhost:3001',
        changeOrigin: true,
        secure: false
    })
  );
};