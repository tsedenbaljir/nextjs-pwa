const withPWA = require('next-pwa')({
    dest: 'public',
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development',
    buildExcludes: [/dynamic-css-manifest\.json$/],
});

module.exports = withPWA({
    reactStrictMode: true,
});
