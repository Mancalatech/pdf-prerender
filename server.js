const prerender = require('prerender');

// Use port provided by Render, fallback to 3000 for local dev
const PORT = process.env.PORT || 3000;

const server = prerender({
  port: PORT,
  chromeLocation: '/usr/bin/chromium',
  chromeFlags: [
    '--no-sandbox',
    '--disable-dev-shm-usage',
    '--headless',
    '--disable-gpu',
    '--remote-debugging-port=9222',
    '--disable-software-rasterizer',
    '--disable-extensions'
  ]
});

server.start(() => {
  console.log(`✅ Prerender server started on port ${PORT}`);
});
