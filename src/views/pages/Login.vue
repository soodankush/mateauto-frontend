<template>
  <div class="bg-light min-vh-100 d-flex flex-row align-items-center">
    <CContainer>
      <CRow class="justify-content-center">
        <CCol :md="8">
          <CCardGroup>
            <CCard class="p-4">
              <CCardBody>
                <CForm @submit.prevent="handleLogin">
                  <h1>Login</h1>
                  <p class="text-medium-emphasis">Sign In to your account</p>
                  <CInputGroup class="mb-3">
                    <CInputGroupText>
                      <CIcon icon="cil-user" />
                    </CInputGroupText>
                    <CFormInput
                      placeholder="Email"
                      autocomplete="email"
                      v-model="formData.email"
                    />
                  </CInputGroup>
                  <CInputGroup class="mb-4">
                    <CInputGroupText>
                      <CIcon icon="cil-lock-locked" />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="Password"
                      autocomplete="current-password"
                      v-model="formData.password"
                    />
                  </CInputGroup>
                  <CRow>
                    <CCol :xs="6">
                      <CButton color="primary" class="px-4" type="submit">
                        Login
                      </CButton>
                    </CCol>
                    <CCol :xs="6" class="text-right">
                      <CButton color="link" class="px-0">
                        Forgot password?
                      </CButton>
                    </CCol>
                  </CRow>
                </CForm>
              </CCardBody>
            </CCard>
            <CCard class="text-white bg-primary py-5" style="width: 44%">
              <CCardBody class="text-center">
                <div>
                  <h2>Sign up</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <CButton color="light" variant="outline" class="mt-3">
                    Register Now!
                  </CButton>
                </div>
              </CCardBody>
            </CCard>
          </CCardGroup>
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>

<script>
import AuthService from '../../../services/auth.service'
export default {
  name: 'Login',
  data() {
    return {
      formData: {
        email: null,
        password: null,
      },
    }
  },
  mounted() {},
  methods: {
    async handleLogin() {
      this.$http
        .get(process.env.VUE_APP_ROOT + '/sanctum/csrf-cookie')
        .then((response) => {
          if (response.status === 204) {
            AuthService.login({
              email: this.formData.email,
              password: this.formData.password,
            })
              .then((response) => {
                if (response.success === true && response.token !== undefined) {
                  this.$router.push({ name: 'Apps' })
                }
              })
              .catch((error) => {
                console.log(error)
              })
          }
        })
        .catch((error) => {
          console.log(`error`)
          console.log(error)
        })
    },
  },
}
</script>
