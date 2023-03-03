class TokenService {
  setLocalAccessToken(tokenData) {
    localStorage.setItem('token', tokenData.token)
  }

  getLocalAccessToken() {
    const token = localStorage.getItem('token')
    return token
  }

  removeUser() {
    localStorage.removeItem('token')
    return true
  }

  updateLocalAccessToken(newTokenData) {
    console.log(`update token data ${newTokenData}`)
    localStorage.setItem(newTokenData.token)
  }
}

export default new TokenService()
