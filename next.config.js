module.exports = {
  async redirects() {
    return [
      {
        source: '/contact-us',
        destination: '/404',
        permanent: false,
      },
    ]
  },
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
};
