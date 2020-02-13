<template>
  <div>
    <template v-if="action === 'view' || action === 'delete'">
      <ActionBar @action="handleAction" :disabled="!selectedEmployeeId"/>
      <table>
        <EmployeeTableHeader />
        <tbody>
          <EmployeeTableRow
            class="employee-table"
            v-for="employee in employees"
            :key="employee.id"
            :employee="employee"
            @select-employee="selectEmployee"
            :selectedId="selectedEmployeeId"
          />
        </tbody>
      </table>
    </template>
    <template v-else>
      <EmployeeForm
        :employee="employeeData"
        @save="handleSave"
        :buttonText="action === 'edit' ? 'Update' : 'Save'"
      />
    </template>
  </div>
</template>
<script>
import EmployeeTableHeader from '@/components/EmployeeTable/EmployeeTableHeader.vue';
import EmployeeTableRow from '@/components/EmployeeTable/EmployeeTableRow.vue';
import EmployeeForm from '@/components/EmployeeTable/EmployeeForm.vue';
import ActionBar from '@/components/ActionBar.vue';

import { getters, mutations, actions } from '../../store';

export default {
  name: 'EmployeeTable',
  components: {
    EmployeeTableHeader,
    EmployeeTableRow,
    EmployeeForm,
    ActionBar,
  },
  data() {
    return {
      action: 'view',
    };
  },
  methods: {
    ...mutations,
    ...actions,
    handleAction(action) {
      if (action === 'delete') {
        this.removeEmployee();
      }
      this.action = action;
    },
    async handleSave(data) {
      console.log(data);
      if (this.action === 'edit') {
        await this.updateEmployee(data);
      } else {
        await this.createEmployee(data);
      }

      this.action = 'view';
    },
  },
  computed: {
    ...getters,
    employeeData() {
      if (this.action === 'edit') {
        return this.selectedEmployee;
      }
      return {
        firstName: '', lastName: '', address: '', phone: '',
      };
    },
  },
};
</script>
<style lang="scss">
  table, thead, th {
    border: 1px solid black;
    padding: 2px;
  }
  table {
     border-collapse: collapse;
  }
  tbody {
    tr:nth-child(odd)  {
      background-color: lightblue;
    }
  }
  td {
    width: 200px;
  }
</style>
