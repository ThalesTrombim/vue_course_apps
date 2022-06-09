<template>
  <h3>{{ counter }}</h3>
  <p>The second counter</p>
</template>

<script>
export default {
  computed: {
    counter() {
      return this.$store.getters.normalizedCounter;
    }
  },
}
</script>