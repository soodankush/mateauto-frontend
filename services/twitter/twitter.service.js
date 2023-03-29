import api from '../api'

class TwitterService {
  getMyProfile() {
    return api.get('/twitter/profile')
  }

  getBookmarks() {
    return api.get('/twitter/bookmarks')
  }

  postNewTweet(tweetData) {
    return api
      .post('/twitter/post/tweet', tweetData)
      .then((response) => {
        return response
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

export default new TwitterService()
