<template>
  <ul>
    <li type="button" :class="{active: modelValue === 'poor'}"><button @click="activate('poor')">Poor</button></li>
    <li type="button" :class="{active: modelValue === 'average'}"><button @click="activate('average')">Average</button></li>
    <li type="button" :class="{active: modelValue === 'great'}"><button @click="activate('great')">Great</button></li>
  </ul>
</template>

<script>
export default {
  props: ['modelValue'],
  emits: ['update:modelValue'],
  // data() {
  //   return {
  //     activeOption: this.modelValue,
  //   }
  // },
  methods: {
    activate(option) {
      this.activeOption = option;
      this.$emit('update:modelValue', option);
    }
  }
}
</script>

<style scoped>
.active {
  border-color: purple;
  
}
.active button {
  color: purple;

}

ul {
  list-style: none;
  margin: 0.5rem 0;
  padding: 0;
  display: flex;
}

li {
  margin: 0 1rem;
  border: 1px solid #CCC;
  padding: 1rem;
  display: flex;
  justify-content: center;
}

button {
  font: inherit;
  border: none;
  background-color: transparent;
  cursor: pointer;
}
</style>