const pkg = require('./package.json')

const templateVersion = pkg.version

module.exports = {
  helpers: {
    if_or (v1, v2, options) {
      if (v1 || v2) {
        return options.fn(this)
      }
      return options.inverse(this)
    },
    template_version () {
      return templateVersion
    }
  },
  prompts: {
    name: {
      type: 'string',
      required: true,
      message: 'Project name'
    },
    description: {
      type: 'string',
      required: false,
      message: 'Project description',
      default: 'A Vue.js project'
    },
    author: {
      type: 'string',
      message: 'Author'
    },
    vuex: {
      type: 'confirm',
      message: 'Install vuex?'
    },
    router: {
      type: 'confirm',
      message: 'Install vue-router?'
    },
    wechat: {
      when: 'router',
      type: 'confirm',
      message: 'Set up wechat sdk and authorize?'
    },
    vant: {
      type: 'confirm',
      message: 'Install Vant UI?'
    }
  },
  filters: {
    'src/router/**/*': 'router',
    'src/store/**/*': 'vuex',
    'src/utils/wechat/**/*': 'wechat',
    'src/views/Auth.vue': 'wechat',
    'src/api/wechat.js': 'wechat',
    'src/vant.js': 'vant'
  },
  metalsmith: {
    after: function (metalsmith, opts, helpers) {
      Object.assign(
        metalsmith.metadata(),
        { wechat: false }
      )
    }
  },
  completeMessage: "To get started:\n\n  {{^inPlace}}cd {{destDirName}}\n  {{/inPlace}}npm install\n  npm run dev\n\nDocumentation can be found at https://cli.vuejs.org/zh/"
}