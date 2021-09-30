<template>
  <div class="d-flex align-items-center min-vh-100" style="background-image: url(/img/background/background-2.jpg);background-position: center;
  background-repeat: no-repeat; background-size: cover;">
    <CContainer fluid style="opacity:0.9">
      <CRow class="justify-content-center">
        <CCol md="4">
          <CCard class="mx-4 mb-0">
            <CCardBody class="p-4 text-center">
              <form role="form" @submit.prevent="onSubmit">
                <img src="img/logo/dataage-logo.png" alt="Data Age Solutions Logo" style="width:150px;margin-bottom:10px" />
                <div>
                  <p>Forgot Password</p>
                </div>
                <div>
                    <p>Enter your email and we'll send you a link to get back into account</p>
                </div>
                <div class="input-group form-group">
                  <input type="email" class="form-control" placeholder="Email" name="email" />
                </div>
                <CRow>
                    <CCol col="6">
                        <button class="px-4 btn btn-info btn-block">
                            <span> Send Link</span>
                        </button>
                    </CCol>
                    <CCol col="6" class="mt-2">
                        <a href="#/pages/register" color="link">Create New Account</a>
                    </CCol>
                </CRow>
              </form>
            </CCardBody>
            <CCardFooter class="p-4">
              <CRow>
                <CCol col="6">
                  <span class="mr-1">Have an account?</span>
                </CCol>
                <CCol col="6">
                  <a href="#/pages/login" color="link">Log in</a>
                </CCol>
              </CRow>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>

<script>
export default {
  name: 'Forgot'
}
</script>
