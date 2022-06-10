<template>
  <button @click="setAuth({value: true})" v-if="!isAuth">Login</button>
  <button @click="setAuth({value: false})" v-if="isAuth">Logout</button>
  <p>{{isAuth}}</p>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions(['setAuth'])
  },
  computed: {
    isAuth() {
      return this.$store.getters.userIsAuthenticated;
    } 
  }
}
</script>