import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = {
  sidebarShow: 'responsive',
  sidebarMinimize: false,
  userData: {}
}

const mutations = {
  toggleSidebarDesktop (state) {
    const sidebarOpened = [true, 'responsive'].includes(state.sidebarShow)
    state.sidebarShow = sidebarOpened ? false : 'responsive'
  },
  toggleSidebarMobile (state) {
    const sidebarClosed = [false, 'responsive'].includes(state.sidebarShow)
    state.sidebarShow = sidebarClosed ? true : 'responsive'
  },
  set (state, [variable, value]) {
    state[variable] = value
  }
}

const actions = {

  loginUser({},userData){

    let data = {
      username: userData.username,
      password: userData.password
    }
    
    console.log(data);

    axios.post('http://localhost:5000/api/auth/login',data, {
      headers: {
      'Content-Type': 'application/json'
      }
    })
    .then(function(response) {
      console.log(response);
      return
    })
    .catch(function (error) {
      console.log(error);
    })

  },
  registerUser({},userData){

    let data = {
      firstname: userData.firstname,
      lastname: userData.lastname,
      username: userData.username,
      company: userData.company,
      email: userData.email,
      password: userData.password
    }
    
    console.log(data);

    axios.post('http://localhost:5000/api/auth/register',data, {
      headers: {
      'Content-Type': 'application/json'
      }
    })
    .then(function(response) {
      console.log(response);
      return response;
    })
    .catch(function (error) {
      console.log(error);
      return error;
    })

  }

}

export default new Vuex.Store({
  state,
  mutations,
  actions
})