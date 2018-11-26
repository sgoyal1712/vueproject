import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex, axios);
axios.defaults.baseURL = 'http://127.0.0.1:3002/api/v3';

export const store = new Vuex.Store({
  state: {
    token: localStorage.getItem('access_token') || null // after refresh it should stay in localstorage
  },
  mutations: {
    tokenUpdate(state, data) {
      localStorage.setItem('access_token', data);
      state.token = data;
    }
  },
  actions: {
    authInterceptor (context, credentials) {
      return new Promise((resolve, reject) => {
        axios.post('/login', {
          email: credentials.email,
          password: credentials.password
        })
          .then(response => {
            const token = response.data.token;
            localStorage.setItem('access_token', token);
            context.commit('tokenUpdate', token);
            resolve(response)
          })
          .catch(error => {
            console.log(error);
            reject(error)
          })
      })
    }
  }
});
