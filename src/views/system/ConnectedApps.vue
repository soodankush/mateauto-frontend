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
                    <li
                      v-for="(platform, index) in available_platforms"
                      :key="index"
                    >
                      <div :class="platform">
                        <!-- <a href="https://facebook.com/colorlib/"> -->
                        <img :src="'/platforms/' + platform.logo" width="50" />
                        <!-- </a> -->
                      </div>
                      <span>{{ platform.platform }}</span>
                      <div
                        v-if="
                          connected_platforms[index].status === 1 &&
                          platform.platform_status === 1
                        "
                      >
                        <h6>
                          {{
                            connected_platforms[index].platform_details
                              .username ?? null
                          }}
                        </h6>
                        <CButton color="success" variant="outline"
                          >Connected</CButton
                        >
                      </div>
                      <a
                        :href="connected_platforms[index].login_url.url"
                        v-else-if="
                          connected_platforms[index].status === 0 &&
                          platform.platform_status === 1
                        "
                      >
                        <CButton color="warning">Connect</CButton>
                      </a>
                      <a v-else>
                        <CButton color="warning">Upcoming</CButton>
                      </a>
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
/* section #services li div:hover {
  transform: rotate(360deg);
  border-radius: 100px;
} */
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
      available_platforms: {},
      connected_platforms: {},
      total_connected_accounts: null,
    }
  },
  mounted() {
    LoginUrl.getConnectedAccountDetails()
      .then((connectedAppsResponse) => {
        let self = this
        console.log(`connectedApp response`)
        console.log(connectedAppsResponse)
        if (connectedAppsResponse.status === 200) {
          self.available_platforms =
            connectedAppsResponse.data.data.available_platforms
          self.connected_platforms =
            connectedAppsResponse.data.data.connected_platforms
          self.total_connected_accounts =
            connectedAppsResponse.data.data.total_connected_accounts
        }
      })
      .catch((connectedAppError) => {
        console.log(`ConnectedAppErr`)
        console.log(connectedAppError)
      })
  },
}
</script>
