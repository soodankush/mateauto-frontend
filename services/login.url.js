import api from './api'

class LoginUrl {
  getTwitterUrl() {
    return api.get('/twitter/user/login')
  }

  getGumroadUrl() {
    return api.get('/gumroad/user/login')
  }

  getConnectedAccountDetails() {
    return api.get('/connected/accounts')
  }
}

export default new LoginUrl()
