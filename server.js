const prerender = require('prerender');

// Use port provided by Render, fallback to 3000 for local dev
const PORT = process.env.PORT || 3000;

const server = prerender({
  chromeLocation: '/usr/bin/chromium',
  chromeFlags: [
    '--headless',
    '--disable-gpu',
    '--no-sandbox',
    '--disable-dev-shm-usage',
    '--disable-software-rasterizer',
    '--remote-debugging-port=9222'
  ]
});

server.start(() => {
  console.log(`✅ Prerender server started on port ${PORT}`);
});
