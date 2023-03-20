import api from '../api'

class TwitterService {
  getMyProfile() {
    return api.get('/twitter/profile')
  }

  getBookmarks() {
    return api.get('/twitter/bookmarks')
  }
}

export default new TwitterService()
