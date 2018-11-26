<template>

</template>

<script>
  export default {
    name: 'Login',
    computed: {},
    methods: {
      logout(){

        context.commit('tokenUpdate', null);
        this.$route.push({path:'/login'})
      }
    }
  }
</script>

<style scoped>

</style>
