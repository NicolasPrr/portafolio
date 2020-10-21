const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { 
                '@primary-color': '#439A86',
                '@success-color': '#007991',
                '@link-color': '#BCD8C1',
                '@warning-color': '#E9D985',
         },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};