<template>
  <nav>
    <ul>
      <li><router-link to="/" exact>Blog</router-link></li>
      <li><router-link to="/add" exact>Add a new blog</router-link></li>
      <li><router-link v-if="!token" to="/login" exact>Login</router-link></li>
      <li><button class="button is-primary is-rounded" v-if="token" v-on:click="logout" exact>Logout</button></li>
    </ul>
  </nav>
</template>

<script>
  export default {
    data:{

    },
    computed: {
      token(){
        if(this.$store.state.token == '')
          return null;
        return this.$store.state.token
      }
    },
    methods:{
      logout(){
        console.log('here is logout');
        this.$store.commit('tokenUpdate','');
        this.$router.push({ path: '/login' })
      }
    }

  }
</script>

<style scoped>
  ul{
    list-style-type: none;
    text-align: center;
    margin: 0;
  }
  li{
    display: inline-block;
    margin: 0 10px;
  }
  a{
    color: #fff;
    text-decoration: none;
    padding: 6px 8px;
    border-radius: 10px;
  }
  nav{
    background: #444;
    padding: 14px 0;
    margin-bottom: 40px;
  }
  .router-link-active{
    background: #eee;
    color: #444;
  }
</style>
