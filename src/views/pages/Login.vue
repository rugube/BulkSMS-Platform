/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-mixed-spaces-and-tabs */
<template>
  <div class="c-app flex-row align-items-center" style="background-image: url(/img/background/background-2.jpg);background-position: center;
  background-repeat: no-repeat; background-size: cover;">
    <CContainer style="opacity:0.9">
      <CRow class="justify-content-center">
        <CCol md="8">
          <CCardGroup>
            <CCard class="p-4">
              <CCardBody class="text-center">
                <form role="form" @submit.prevent="onSubmit">
                  <img src="img/logo/dataage-logo.png" alt="Data Age Solutions Logo" style="width:150px;margin-bottom:10px" />
                  <div class="alert alert-danger" role="alert" v-if="message">
                    {{message}}
                  </div>
                  <div class="input-group form-group">
                    <input type="text" class="form-control" placeholder="Username" name="username"
                      v-model="userData.username" />
                  </div>
                  <div class="input-group form-group">
                    <input type="password" class="form-control" placeholder="Password" name="password"
                      v-model="userData.password" />
                  </div>
                  <CRow>
                    <CCol col="6" class="text-left">
                      <button class="px-4 btn btn-info btn-block" :disabled="loading">
                        <span class="spinner-border spinner-border-sm" v-show="loading"></span>
                        <span> Login</span>
                      </button>
                    </CCol>
                    <CCol col="6" class="text-right">
                      <CButton color="link" class="px-0" to="/pages/forgot">Forgot password?</CButton>
                      <CButton color="link" class="d-lg-none" to="/pages/register">Register now!</CButton>
                    </CCol>
                  </CRow>
                </form>
              </CCardBody>
            </CCard>
            <CCard
              color="danger"
              text-color="white"
              class="text-center py-2 d-md-down-none"
              body-wrapper
            >
              <CCardBody>
                <h2>Sign Up</h2>
                <p>Sign Up for Data Age Solutions Digital Promotions Platform. We help you keep track of all your ongoing digital marketing promotions from USSD, SMS, WhatsApp and Email Campaigns.</p>
                <CButton
                  color="light"
                  variant="outline"
                  size="lg"
                  to="/pages/register"
                >
                  Register Now!
                </CButton>
              </CCardBody>
            </CCard>
          </CCardGroup>
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>

<script>

export default {
  name: 'Login',
  data() {
    return {
      userData:{
        username: '',
        password: ''
      },
      loading: false,
      message: ''
    };
  },
  methods: {

    onSubmit: function() {

      this.loading = true;
      console.log(this.userData);

      if(this.userData.username && this.userData.password){

        this.message = '';
        this.loading = false;
        this.$store.dispatch('loginUser', this.userData)
          .then(
              res => {
                this.message = 'Results: '+res
                console.log(res)
                this.$router.push('/');
              }
          ).catch(
              err =>{
                this.message = err
                console.log(err)
              }
          );     
                 
      }else{

        this.loading = false;
        this.message = "Please fill all details!";  

      }
      
    }

  }

}
</script>
