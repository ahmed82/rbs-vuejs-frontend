import Vue from 'vue';

const state = Vue.observable({
  employees: [{
    id: 1, firstName: 'Sean', lastName: 'Fallmann', address: '1400 Margate Lane', phone: '555-555-5555',
  },
  {
    id: 2, firstName: 'Peter', lastName: 'Fallmann', address: '1400 Margate Lane', phone: '555-555-5555',
  },
  ],
  selectedEmployee: { },
});

export const getters = {
  employees() {
    return state.employees;
  },
  selectedEmployeeId() {
    return state.selectedEmployee.id || 0;
  },
  selectedEmployee() {
    return state.selectedEmployee;
  },
};

export const mutations = {
  editEmployee(data) {
    Object.assign(state.selectedEmployee, data);
  },
  deleteEmployee() {
    state.employees = state.employees.filter((e) => e.id !== getters.selectedEmployeeId());
  },
  selectEmployee(id) {
    const employee = state.employees.find((e) => e.id === id);
    state.selectedEmployee = employee || {};
  },
  addEmployee(employee) {
    state.employees.push({ id: state.employees.length + 1, ...employee });
  },
};

export const actions = {
  async updateEmployee(data) {
    mutations.editEmployee(data);
  },
  async removeEmployee() {
    mutations.deleteEmployee();
    mutations.selectEmployee();
  },
  async createEmployee(data) {
    mutations.addEmployee(data);
  },
};

export default {
  getters,
  mutations,
  actions,
};
