<template>
  <div>
    <CRow>
      <CCol :md="12">
        <CCard class="mb-4">
          <CCardBody>
            <CRow>
              <CCol :sm="5">
                <h4 id="traffic" class="card-title mb-0">
                  Connected Applications
                </h4>
              </CCol>
            </CRow>
            <CRow>
              <CCol :md="12">
                <section>
                  <ul id="services">
                    <li>
                      <div class="twitter">
                        <a :href="twitter_url">
                          <img
                            src="https://cdn-icons-png.flaticon.com/512/3938/3938028.png"
                            width="50"
                            :class="{ 'connected-img': twitter_url === null }"
                          />
                        </a>
                      </div>
                      <span>Twitter</span>
                      <a :href="twitter_url" v-if="twitter_url !== null">
                        <CButton color="warning" variant="outline"
                          >Connect</CButton
                        >
                      </a>
                      <CButton color="success" variant="outline" v-else
                        >Connected</CButton
                      >
                    </li>
                    <li>
                      <div class="gumroad">
                        <img
                          src="https://seeklogo.com/images/G/gumroad-logo-3A93C7330E-seeklogo.com.png"
                          width="50"
                        />
                      </div>
                      <span>Gumroad</span>
                      <a :href="gumroad_url" v-if="gumroad_url !== null">
                        <CButton color="warning">Connect</CButton>
                      </a>
                      <CButton color="success" variant="outline" v-else
                        >Connected</CButton
                      >
                    </li>
                    <li>
                      <div class="youtube">
                        <a :href="youtube_url">
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0SVNZ2A92EA0Y3G85R62OTV9DECgf7_1Nlv7aYkWk_w&s"
                            width="50"
                          />
                        </a>
                      </div>
                      <span>YouTube</span>
                      <a :href="gumroad_url" v-if="gumroad_url !== null">
                        <CButton color="warning">Connect</CButton>
                      </a>
                      <CButton color="success" variant="outline" v-else
                        >Connected</CButton
                      >
                    </li>
                    <li>
                      <div class="linkedin">
                        <a href="https://www.linkedin.com/company/colorlib">
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzGvNj5RY7oY9KyBoaciTRhpwwdY6-MIjJvt-P5XV-wQ&s"
                            width="50"
                          />
                        </a>
                      </div>
                      <span>LinkedIn</span>
                      <a :href="gumroad_url" v-if="gumroad_url !== null">
                        <CButton color="warning">Connect</CButton>
                      </a>
                      <CButton color="success" variant="outline" v-else
                        >Connected</CButton
                      >
                    </li>
                    <li>
                      <div class="instagram">
                        <a href="https://www.linkedin.com/company/colorlib">
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png"
                            width="50"
                          />
                        </a>
                      </div>
                      <span>Instagram</span>
                      <a :href="gumroad_url" v-if="gumroad_url !== null">
                        <CButton color="warning">Connect</CButton>
                      </a>
                      <CButton color="success" variant="outline" v-else
                        >Connected</CButton
                      >
                    </li>
                    <li>
                      <div class="facebook">
                        <a href="https://facebook.com/colorlib/">
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR3533oyjpCcx0YMoDUxF3hxatXHdKv8ss6Nt1GFZAzw&s"
                            width="50"
                          />
                        </a>
                      </div>
                      <span>Facebook</span>
                      <a :href="gumroad_url" v-if="gumroad_url !== null">
                        <CButton color="warning">Connect</CButton>
                      </a>
                      <CButton color="success" variant="outline" v-else
                        >Connected</CButton
                      >
                    </li>
                  </ul>
                </section>
              </CCol>
            </CRow>
          </CCardBody>
          <CCardFooter>
            <CRow :xs="{ cols: 1 }" :md="{ cols: 4 }" class="text-center">
              <CCol class="mb-sm-3 mb-3">
                <div class="text-medium-emphasis">Connected Accounts</div>
                <strong>29.703 Users (40%)</strong>
                <CProgress class="mt-2">
                  <CProgressBar :value="15" />
                  <CProgressBar color="success" :value="30" />
                  <CProgressBar color="info" :value="20" />
                </CProgress>
              </CCol>
              <CCol class="mb-sm-3 mb-3 d-md-down-none">
                <div class="text-medium-emphasis">Total Followers</div>
                <strong>24.093 Users (20%)</strong>
                <CProgress
                  class="mt-2"
                  color="info"
                  thin
                  :precision="1"
                  :value="20"
                />
              </CCol>
              <CCol class="mb-sm-3 mb-3">
                <div class="text-medium-emphasis">Post Created</div>
                <strong>78.706 Views (60%)</strong>
                <CProgress
                  class="mt-2"
                  color="warning"
                  thin
                  :precision="1"
                  :value="60"
                />
              </CCol>
              <CCol class="mb-sm-3 mb-3">
                <div class="text-medium-emphasis">Schedules Post</div>
                <strong>22.123 Users (80%)</strong>
                <CProgress
                  class="mt-2"
                  color="danger"
                  thin
                  :precision="1"
                  :value="80"
                />
              </CCol>
            </CRow>
          </CCardFooter>
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>

<style scoped>
section #services {
  text-align: center;
  transform: translatez(0);
}
section #services h2 {
  margin: 80px 0px 40px;
  color: #fff;
  font-size: 2.4em;
  text-transform: uppercase;
  text-align: center;
}
section #services li {
  width: 120px;
  height: 140px;
  display: inline-block;
  margin: 20px;
  list-style: none;
}
section #services li div {
  width: 120px;
  height: 120px;
  color: #74d4b3;
  font-size: 3.4em;
  text-align: center;
  line-height: 120px;
  background-color: #fff;
  transition: all 0.5s ease;
}
section #services li a {
  color: #77cc6d;
}
section #services li div:hover {
  transform: rotate(360deg);
  border-radius: 100px;
}
section #services li span {
  width: 120px;
  height: 20px;
  display: block;
  padding: 15px 0px;
  color: #fff;
  text-transform: uppercase;
  font-size: 1.2em;
  text-align: center;
}
.credits a {
  display: block;
  text-align: center;
  color: #74d4b3;
  text-decoration: none;
  font-size: 24px;
  margin-top: 50px;
  background: white;
  padding: 20px;
  max-width: 300px;
}

.connected-img {
  opacity: 0.4;
}
</style>

<script>
import LoginUrl from '../../../services/login.url'
export default {
  name: 'ConnectedApps',
  components: {},
  data() {
    return {
      message: 'Hello Worl 1d',
      twitter_url: null,
      gumroad_url: null,
      youtube_url: 'https://www.youtube.com/c/Colorlib',
    }
  },
  mounted() {
    LoginUrl.getTwitterUrl().then(
      (response) => {
        if (response.status === 200 && response.data.url !== null) {
          this.twitter_url = response.data.url ?? null
        }
      },
      (error) => {
        console.log(error)
        alert('Error fetching twitter url')
      },
    )

    LoginUrl.getGumroadUrl().then(
      (response) => {
        if (response.status === 200 && response.data.url !== null) {
          this.gumroad_url = response.data.url
        }
      },
      (error) => {
        console.log(error)
        alert('Error fetching gumroad url')
      },
    )
  },
}
</script>
