module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
          root: ['./src'],
          alias: {
            '~/components': './src/components',
            '~/types': './src/types',
            '~/hooks': './src/hooks',
            '~/navigation': './src/navigation',
            '~/containers': './src/containers',
            '~/services': './src/services',
            '~/redux': './src/redux',
          },
        },
      ],
    ],
  };
};
