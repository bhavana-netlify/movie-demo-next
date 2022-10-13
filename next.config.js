module.exports = {
  async redirects() {
    return [
      {
        source: '/contact-us',
        destination: '/about-me',
        permanent: false,
      },
    ]
  },
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
};
