<template>
  <ul>
    <LearningResource 
      v-for="res in resource" :key="res.id"
      :title="res.title"
      :description="res.description"
      :link="res.link"
    ></LearningResource>
  </ul>
</template>

<script>
import LearningResource from './LearningResource';

  export default {
    props: ['resource'],
    components: {
      LearningResource
    }
  }
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>