module.exports = {
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  async rewrites() {
    return [
      {
        source: '/movie/:path',
        destination: 'https://beta.origins.com/rpc/:path'
      }
    ];
}
};

