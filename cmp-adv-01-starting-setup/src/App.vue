<template>
  <div>
    <the-header></the-header>
    <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
    <CourseGoal>
      <template #default='slotProps'>
        <h2>{{ slotProps.item }}</h2>
      </template>
    </CourseGoal>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import BadgeList from "./components/BadgeList.vue";
import UserInfo from "./components/UserInfo.vue";
import CourseGoal from './components/CourseGoal.vue';

export default {
  components: {
    TheHeader,
    BadgeList,
    UserInfo,
    CourseGoal
  },
  data() {
    return {
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>