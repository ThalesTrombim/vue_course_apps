<template>
  <base-container title="Vuex" v-if="isAuth">
    <the-counter></the-counter>
    <favorite-value></favorite-value>
    <button @click="addOne">Add 1</button>
    <change-counter></change-counter>
  </base-container>
  <base-container title="Auth">
    <p>{{auth}}</p>
    <user-auth></user-auth>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import FavoriteValue from './components/FavoriteValue'
import ChangeCounter from './components/ChangeCounter';
import UserAuth from './components/UserAuth.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
    FavoriteValue,
    ChangeCounter,
    UserAuth
  },
  computed: {
    isAuth() {
      return this.$store.getters.userIsAuthenticated;
    } 
  },
  methods: {
    addOne() {
      // this.$store.commit('increase', { value: 10 });
      // this.$store.commit({
      //   type: 'increase',
      //   value: 10
      // });
      
      // this.$store.dispatch('increase', { value: 10 });
      this.$store.dispatch({
        type: 'increase',
        value: 10
      });
    }
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>