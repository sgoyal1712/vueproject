<template>
  <div class="columns">
    <div class="column">
      <img src="../assets/logo.png"/>
    </div>
    <div class="column">
      <form @submit.prevent="login" >
        <div>
          <h4 > <b>Login</b></h4>
          <div >
            <div >
              <div >
                <input required type="email" name="email" v-model="email" class="form-control" placeholder="Email">
              </div>
            </div>
            <div >
              <div >
                <input required type="password" name="password" v-model="password" class="form-control" placeholder="Password">
              </div>
            </div>
            <div>
              <button type="submit" class="btn btn-primary" value="Login">Login</button>
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
