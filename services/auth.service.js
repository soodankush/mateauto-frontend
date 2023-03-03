import api from './api'
import TokenService from './token.service'

class AuthService {
  login({ email, password }) {
    return api
      .post('/login', { email, password })
      .then((response) => {
        if (
          response.data.success === true &&
          response.data.token !== undefined
        ) {
          TokenService.setLocalAccessToken(response.data)
          return response.data
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }

  logout() {
    return api
      .get('/user/logout')
      .then((response) => {
        if (response.data.success) {
          TokenService.removeUser()
        }
        return response
      })
      .catch((logoutError) => {
        console.log(logoutError.data)
        alert('Error during logout')
      })
  }
}

export default new AuthService()
