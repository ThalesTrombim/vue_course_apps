<template>
  <div>
    <the-header></the-header>
    <!-- <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
    <CourseGoal>
      <template #default='slotProps'>
        <h2>{{ slotProps.item }}</h2>
      </template>
    </CourseGoal> -->
    <button @click='setSelectedComponent("active-goals")'>Active goals</button>
    <button @click='setSelectedComponent("manage-goals")'>Manage goals</button>
    <keep-alive>
      <component :is='selectComponent'></component>
    </keep-alive>
  </div>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
// import BadgeList from "./components/BadgeList.vue";
// import UserInfo from "./components/UserInfo.vue";
// import CourseGoal from './components/CourseGoal.vue';
import ActiveGoals from './components/ActiveGoals.vue';
import ManageGoals from './components/ManageGoals.vue';

export default {
  components: {
    TheHeader,
    // BadgeList,
    // UserInfo,
    // CourseGoal,
    ActiveGoals,
    ManageGoals
  },
  data() {
    return {
      selectComponent: 'active-goals',
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
  methods: {
    setSelectedComponent(cmp) {
      this.selectComponent = cmp;
    }
  }
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