<template>

  <div id="app">
    <EmployeeTable/>
  </div>
</template>

<script>
import EmployeeTable from '@/components/EmployeeTable/EmployeeTable.vue';

export default {
  name: 'App',
  components: {
    EmployeeTable,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
