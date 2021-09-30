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
                  <p>Create your account</p>
                </div>
                <div class="alert alert-danger" role="alert" v-if="message">
                  {{message}}
                </div>
                <div class="alert alert-success" role="alert" v-if="success">
                  {{success}}
                </div>
                <div class="input-group form-group">
                  <input type="text" class="form-control" placeholder="First name" name="firstname" v-model="userData.firstname" />
                </div> 
                <div class="input-group form-group">
                  <input type="text" class="form-control" placeholder="Last name" name="lastname" v-model="userData.lastname" />
                </div> 
                <div class="input-group form-group">
                  <input type="text" class="form-control" placeholder="Company name" name="company" v-model="userData.company" />
                </div>   
                <div class="input-group form-group">
                  <input type="text" class="form-control" placeholder="Username" name="username" v-model="userData.username" />
                </div> 
                <div class="input-group form-group">
                  <input type="email" class="form-control" placeholder="Email" name="email" v-model="userData.email" />
                </div>
                <div class="input-group form-group">
                  <input type="password" class="form-control" placeholder="Password" name="password" v-model="userData.password" />
                </div>
                <div class="input-group form-group">
                  <input type="password" class="form-control" placeholder="Repeat Password" name="newpassword" v-model="userData.newpassword" />
                </div>
                <button class="px-4 btn btn-info btn-block" :disabled="loading">
                  <span class="spinner-border spinner-border-sm" v-show="loading"></span>
                  <span> Create Account</span>
                </button>
              </form>
              <div class="mt-4" >
                <span class="mr-1">By signing up, you agree to our Terms, Data Policy and Cookies Policy</span>
              </div>
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
  name: 'Register',
  data() {
    return {
      userData:{
        firstname: '',
        lastname: '',
        company: '',
        username: '',
        email: '',
        password: '',
        newpassword: ''
      },
      loading: false,
      message: '',
      success: ''
    };
  },
  methods: {

    onSubmit: function() {

      this.loading = true;
      console.log(this.userData);

      if( this.userData.password ===  this.userData.newpassword){

        if(this.userData.firstname && this.userData.lastname && this.userData.username && this.userData.password && this.userData.company && this.userData.email){

          this.message = '';
          this.success = '';
          this.loading = false;

          this.$store.dispatch('registerUser', this.userData)
            .then(
                response => {
                  this.success = "Register Success"
                  this.message = '';
                  console.log(response)
                  this.$router.push('../../pages/login');
                }
            ).catch(
                error =>{
                  this.message = "Error"
                  this.success = ''
                  console.log(error)
                }
            );     
                  
        }else{

          this.loading = false;
          this.message = "Please fill all details!";  

        }

      }else{
          this.loading = false;
          this.message = "Passwords do not match!"; 
      }
      
    }

  }

}
</script>
