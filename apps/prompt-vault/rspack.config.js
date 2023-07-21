
      const { composePlugins, withNx, withWeb, withReact } = require('@nx/rspack');

      module.exports = composePlugins(withNx(), withReact(), withWeb(), (config) => {
        return config;
      });
