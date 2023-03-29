<template>
  <CRow>
    <CCol :xs="12">
      <CCard>
        <CCardHeader>
          <strong>Posts</strong>
        </CCardHeader>
        <CCardBody>
          <CRow :xs="{ cols: 1, gutter: 4 }" :md="{ cols: 2 }">
            <CCol md>
              <CForm @submit.prevent="schedulePost">
                <div class="mb-3">
                  <CFormLabel for="labelForTextArea">Post</CFormLabel>
                  <CFormTextarea
                    id="labelForTextArea"
                    rows="15"
                    required
                    v-model="post"
                  ></CFormTextarea>
                </div>
                <div class="mb-3">
                  <CFormCheck
                    id="addTagCheckBox"
                    label="Yes, Add `Posted from: mateauto.io` to the bottom of content"
                    value="1"
                    v-model="addTag"
                  />
                </div>
                <div class="mb-3">
                  <CFormCheck
                    id="addNumberingCheckBox"
                    label="Yes, Add Tweet numbering such as 1/n, 2/n ... n/n"
                    value="1"
                    v-model="addNumbering"
                  />
                </div>
                <div class="mb-3">
                  <CFormLabel for="characterCountLabel"
                    >Character Count:
                    {{ characterCount }}&nbsp;&nbsp;</CFormLabel
                  >
                  <CFormLabel for="threadCountLabel"
                    >Thread Count: {{ threadCount }}</CFormLabel
                  >
                </div>
                <div class="mb-3">
                  <CFormInput
                    type="text"
                    id="tweetTime"
                    label="Schedule post"
                    v-model="tweetDateTime"
                  />
                </div>
                <div class="mb-3">
                  <CButton type="submit" color="primary">Create Post</CButton>
                </div>
              </CForm>
            </CCol>
            <CCol md>
              <div class="mb-3 post-preview">
                <CFormLabel for="postPreviewTextArea">Post Preview</CFormLabel>
                <div
                  v-for="(newPostPreview, index) in postPreview"
                  :key="index"
                >
                  <CFormTextarea
                    :id="'labelForTextArea' + index"
                    rows="4"
                    readonly
                    resize="none"
                    >{{ newPostPreview }}</CFormTextarea
                  >
                  <div
                    class="vertical-row"
                    v-if="index + 1 !== postPreview.length"
                  ></div>
                </div>
              </div>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<style scoped>
.post-preview {
  overflow: scroll;
  height: 400px;
}

.vertical-row {
  float: left;
  height: 80px;
  width: 0.5em; /* edit this if you want */
  margin: 0 1pc;
  border-left: 2px dashed black;
}
</style>

<script>
import TwitterService from '../../../services/twitter/twitter.service'
export default {
  name: 'Create Posts',
  data: function () {
    return {
      post: null,
      characterCount: 0,
      addTag: false,
      addNumbering: false,
      threadCount: 0,
      noOfCharactersAllowed: 280,
      postPreview: [],
      tweetDateTime: Date(),
      modifiedPost: '',
      tagString: ' Posted from: mateauto.io',
    }
  },
  mounted() {},
  watch: {
    post() {
      this.updatePost()
    },
    addNumbering() {
      this.updatePost()
    },
  },
  methods: {
    schedulePost() {
      TwitterService.postNewTweet()
        .then((response) => {
          console.log(response)
        })
        .catch((err) => {
          console.log(err)
        })
    },

    updatePostWithNumbers() {
      let threadStart = 0
      this.modifiedPost = ''
      let self = this
      for (let k = 1; k <= this.threadCount; k++) {
        let threadEnd = this.noOfCharactersAllowed + threadStart - 4
        self.modifiedPost =
          self.modifiedPost +
          self.post.slice(threadStart, threadEnd) +
          ` ${k}/${this.threadCount}`
        threadStart = threadStart + this.noOfCharactersAllowed
      }
    },

    removeNumberingFromPosts() {
      let threadStart = 0
      this.modifiedPost = ''
      let self = this
      for (let count = 1; count <= this.threadCount; count++) {
        let threadEnd = this.noOfCharactersAllowed + threadStart - 4
        self.post.substr(threadEnd, 4)
      }
      self.modifiedPost = self.post
    },

    updatePost() {
      this.characterCount = this.post.length
      this.modifiedPost = this.post
      if (this.addNumbering) {
        this.updatePostWithNumbers()
      } else {
        this.removeNumberingFromPosts()
      }
      this.updateTagToPost()
      this.threadCount = Math.ceil(
        this.characterCount / this.noOfCharactersAllowed,
      )
      let start = 0
      this.postPreview = []
      for (let i = 0; i < this.threadCount; i++) {
        let end = this.noOfCharactersAllowed + start
        let newString = null
        newString = this.modifiedPost.slice(start, end)
        this.postPreview[i] = newString
        start = start + this.noOfCharactersAllowed
      }
    },

    updateTagToPost() {
      let self = this
      if (self.addTag) {
        self.post += self.tagString
      }
    },
  },
}
</script>
