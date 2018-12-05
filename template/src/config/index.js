export default Object.assign(
  {},
  require('./base.config'),
  require(`./${process.env.VUE_APP_ENV}.config`)
)
