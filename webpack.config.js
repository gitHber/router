module.exports = (env) => {
  if(env && env.NODE_ENV === 'production') {
    return require('./config/prod.config.js')
  }else{
    return require('./config/dev.config.js')
  }
}