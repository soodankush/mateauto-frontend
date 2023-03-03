import api from './api'

class UserService {
  getUserData() {
    return api.get('/user')
  }
}
export default new UserService()
