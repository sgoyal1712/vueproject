<template>
  <div class="columns">
    <div class="column is-center">
      <img  class="is-center" src="../assets/logo.png"/>
    </div>
    <div class="column">
      <form @submit.prevent="login" >
        <div>
          <h4 > <b>Login</b></h4>
          <div >
            <div class="field">
              <div class="control">
                <input required type="email" name="email" v-model="email" class="input is-primary" placeholder="Email">
              </div>
            </div>
            <div class="field">
              <div class="control">
                <input required type="password" name="password" v-model="password" class="input is-primary" placeholder="Password">
              </div>
            </div>
            <div class="buttons is-centered">
              <button type="submit" class="button" value="Login">Login</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data () {
      return {
        email: '',
        password: ''
      }
    },

    methods: {
      login: function () {
        this.$store.dispatch('authInterceptor', {
          email: this.email,
          password: this.password
        })
        .then(response => {
          console.log('response',response);
          this.$router.push({ path: '/' })
        })
      }
    }
  }
</script>

<style scoped>

</style>
