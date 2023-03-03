import axiosInstance from './api'
import TokenService from './token.service'

const setup = () => {
  axiosInstance.interceptors.request.use(
    (config) => {
      const token = TokenService.getLocalAccessToken()
      if (token) {
        config.headers['Authorization'] = 'Bearer ' + token
      }
      return config
    },
    (error) => {
      return Promise.reject(error)
    },
  )

  axiosInstance.interceptors.response.use(
    (res) => {
      return res
    },
    async (err) => {
      const originalConfig = err.config

      if (originalConfig.url !== '/login' && err.response) {
        // Access Token was expired
        if (err.response.status === 401 && !originalConfig._retry) {
          originalConfig._retry = true

          try {
            const newTokenData = await axiosInstance.post('/login', {
              refreshToken: TokenService.getLocalRefreshToken(),
            })

            TokenService.updateLocalAccessToken(newTokenData)

            return axiosInstance(originalConfig)
          } catch (_error) {
            return Promise.reject(_error)
          }
        }
      }

      return Promise.reject(err)
    },
  )
}

export default setup
