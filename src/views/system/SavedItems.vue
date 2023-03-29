<template>
  <CRow>
    <CCol :xs="12">
      <CCard class="mb-4">
        <CCardHeader>
          <strong>Bookmarks</strong> <small>(Saved Items)</small>
        </CCardHeader>
        <CCardBody>
          <CRow :xs="{ cols: 1, gutter: 4 }" :md="{ cols: 3 }">
            <CSpinner color="warning" variant="grow" />
            <CCol xs v-for="bookmark in bookmarksData" :key="bookmark.id">
              <CCard>
                <CCardBody>
                  <CCardTitle>{{ bookmark.id }}</CCardTitle>
                  <CCardText>
                    {{ bookmark.text }}
                  </CCardText>
                </CCardBody>
                <CCardFooter>
                  <a><small class="text-medium-emphasis">View tweet</small></a>
                </CCardFooter>
              </CCard>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
import TwitterService from '../../../services/twitter/twitter.service'
export default {
  name: 'Saved Items',
  data: function () {
    return {
      bookmarksData: [],
    }
  },
  mounted() {
    TwitterService.getBookmarks()
      .then((response) => {
        let self = this
        console.log('respnse')
        console.log(response.data.data)
        console.log(response.status === 200)
        if (response.status === 200) {
          console.log(`book marka ${this.bookmarksData.length}`)
          self.bookmarksData = response.data.data
          console.log(`book marka ${this.bookmarksData.length}`)
        }
      })
      .catch((err) => {
        console.log('error')
        console.log(err)
      })
  },
}
</script>
