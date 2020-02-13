<template>
  <tr
    :class="{ 'is-selected': isEmployeeSelected(employee.id) }"
    @click="handleClick(employee.id)"
  >
    <td class="employe-table--row--cell">{{ employee.id }}</td>
    <td class="employe-table--row--cell">{{ employee.firstname }}</td>
    <td class="employe-table--row--cell">{{ employee.lastname }}</td>
    <td class="employe-table--row--cell">{{ employee.address }}</td>
    <td class="employe-table--row--cell">{{ employee.phone }}</td>
  </tr>
</template>
<script>
export default {
  name: 'EmployeeTableRow',
  props: {
    employee: {
      type: Object,
      default: () => ({}),
    },
    selectedId: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    isEmployeeSelected(id) {
      return id === this.selectedId;
    },
    handleClick(id) {
      this.$emit('select-employee', !this.isEmployeeSelected(id) ? id : 0);
    },
  },
};
</script>
<style lang="scss">
  tbody tr {
    cursor: pointer;
  }
</style>
