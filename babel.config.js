module.exports = {
  presets: [
    [
      'next/babel',
      {
        'preset-env': {
          targets: {
            browsers: ['> 1%', 'not ie <= 11', 'not edge <= 18', 'not dead'],
          },
        },
      },
    ],
  ],
};
