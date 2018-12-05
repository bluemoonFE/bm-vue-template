module.exports = {
  presets: ['@vue/app']{{#vant}},
  plugins: [
    [
      'import',
      {
        libraryName: 'vant',
        libraryDirectory: 'es',
        style: true
      },
      'vant'
    ]
  ]{{/vant}}
}
