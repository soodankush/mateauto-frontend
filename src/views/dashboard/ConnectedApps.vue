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
                          />
                        </a>
                      </div>
                      <span>Twitter</span>
                    </li>
                    <li>
                      <div class="gumroad">
                        <a :href="gumroad_url">
                          <img
                            src="https://seeklogo.com/images/G/gumroad-logo-3A93C7330E-seeklogo.com.png"
                            width="50"
                          />
                        </a>
                      </div>
                      <span>Gumroad</span>
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
                    </li>
                  </ul>
                </section>
              </CCol>
            </CRow>
          </CCardBody>
          <CCardFooter>
            <CRow :xs="{ cols: 1 }" :md="{ cols: 5 }" class="text-center">
              <CCol class="mb-sm-2 mb-0">
                <div class="text-medium-emphasis">Visits</div>
                <strong>29.703 Users (40%)</strong>
                <CProgress
                  class="mt-2"
                  color="success"
                  thin
                  :precision="1"
                  :value="40"
                />
              </CCol>
              <CCol class="mb-sm-2 mb-0 d-md-down-none">
                <div class="text-medium-emphasis">Unique</div>
                <strong>24.093 Users (20%)</strong>
                <CProgress
                  class="mt-2"
                  color="info"
                  thin
                  :precision="1"
                  :value="20"
                />
              </CCol>
              <CCol class="mb-sm-2 mb-0">
                <div class="text-medium-emphasis">Pageviews</div>
                <strong>78.706 Views (60%)</strong>
                <CProgress
                  class="mt-2"
                  color="warning"
                  thin
                  :precision="1"
                  :value="60"
                />
              </CCol>
              <CCol class="mb-sm-2 mb-0">
                <div class="text-medium-emphasis">New Users</div>
                <strong>22.123 Users (80%)</strong>
                <CProgress
                  class="mt-2"
                  color="danger"
                  thin
                  :precision="1"
                  :value="80"
                />
              </CCol>
              <CCol class="mb-sm-2 mb-0 d-md-down-none">
                <div class="text-medium-emphasis">Bounce Rate</div>
                <strong>Average Rate (40.15%)</strong>
                <CProgress class="mt-2" :value="40" thin :precision="1" />
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
</style>

<script>
import axios from 'axios'

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
  created() {
    axios
      .get('https://mateauto.test/api/twitter/user/login')
      .then((response) => {
        console.log(response)
        this.twitter_url = response.data.url
      })
      .catch((error) => {
        console.log(error)
      })
    axios
      .get('https://mateauto.test/api/gumroad/user/login')
      .then((response) => {
        this.gumroad_url = response.data.url
        console.log(response)
      })
      .catch((err) => {
        console.log(err)
      })
  },
}
</script>
