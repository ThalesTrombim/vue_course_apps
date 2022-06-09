<template>
  <button @click="increase({value: 10})">Add 10</button>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    methods: {
      // ...mapActions({
      //   inc: 'increase'
      // }),
      ...mapActions(['increase'])
    }
  }
</script>