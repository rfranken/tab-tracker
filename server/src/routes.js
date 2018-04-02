const AuthenticationController = require('./controllers/AuthenticationController')

const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')

module.exports = (app) => {
//  console.log('hiero')
//  console.dir(app)
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register
  )
}
