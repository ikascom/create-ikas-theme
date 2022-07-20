const withTM = require("next-transpile-modules")([
  "@ikas/storefront",
  "@ikas/storefront-api",
  "@ikas/storefront-assets",
  "@ikas/storefront-cmd",
  "@ikas/storefront-config",
  "@ikas/storefront-model-functions",
  "@ikas/storefront-models",
  "@ikas/storefront-next",
  "@ikas/storefront-providers",
]);

const config = {
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
    localeDetection: false,
  },
  basePath: process.env.NEXTJS_BASE_PATH || "",

  images: {
    deviceSizes: [
      180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 1950, 2560, 3840,
    ],
  },

  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
      config.resolve.fallback.net = false;
      config.resolve.fallback.encoding = false;
      config.resolve.fallback.crypto = false;
      config.resolve.fallback.assert = false;
      config.resolve.fallback.stream = false;
      config.module.rules = [
        ...config.module.rules,
        {
          test: /@ikas/i,
          sideEffects: false,
        },
      ];
    }
    return config;
  },
};

module.exports = withTM(config);