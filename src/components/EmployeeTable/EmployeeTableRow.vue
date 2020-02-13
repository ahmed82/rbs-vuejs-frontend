<template>
  <tr class="employee-table--row">
    <td>
      <input
        type="checkbox"
        @click="handleClick($event, employee.id)"
        :checked="isEmployeeSelected(employee.id)"
      />
    </td>
    <td class="employe-table--row--cell">{{ employee.id }}</td>
    <td class="employe-table--row--cell">{{ employee.firstName }}</td>
    <td class="employe-table--row--cell">{{ employee.lastName }}</td>
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
    handleClick(evt, id) {
      const { checked } = evt.target;
      console.log('checked', checked);
      this.$emit('select-employee', checked ? id : 0);
    },
  },
};
</script>
