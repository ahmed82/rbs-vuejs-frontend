/* eslint-disable max-len */
import Vue from 'vue';
import axios from 'axios';
import Employee from '@/models/Employee';

const state = Vue.observable({
  // employees: [
  //   new Employee(
  //     {
  //       id: 1, firstname: 'Sean', lastname: 'Fallmann', address: '1400 Margate Lane', phone: '555-555-5555',
  //     },
  //   ),
  //   new Employee({
  //     id: 2, firstname: 'Peter', lastname: 'Fallmann', address: '1400 Margate Lane', phone: '555-555-5555',
  //   }),
  // ],
  employees: [],
  selectedEmployees: [],
});

export const getters = {
  employees() {
    return state.employees;
  },
  selectedEmployeeId() {
    return (state.selectedEmployees.length && state.selectedEmployees[0].id) || 0;
  },
  selectedEmployees() {
    return state.selectedEmployees;
  },
};

export const setters = {
  setEmployees(employees) {
    state.employees = employees;
  },
  setSelectedEmployees(employees) {
    state.selectedEmployees = employees;
  },
};

export const methods = {
  async fetchAllEmployees() {
    const res = await axios.get('/employees');
    const employees = await res.data;
    setters.setEmployees(employees.map((emp) => new Employee(emp)));
  },
  findEmployeeById(id) {
    return state.employees.find((e) => e.id === id);
  },
  findSelectedEmployeeById(id) {
    return getters.selectedEmployees().find((e) => e.id === id);
  },
  selectEmployee(id) {
    const employee = this.findEmployeeById(id);
    const selectedEmployee = this.findSelectedEmployeeById(id);

    if (selectedEmployee) {
      setters.setSelectedEmployees(
        getters.selectedEmployees().filter((e) => !Employee.isEqual(e, selectedEmployee)),
      );
    } else {
      setters.setSelectedEmployees([...getters.selectedEmployees(), employee]);
    }
  },
  async addEmployee(employee) {
    setters.setEmployees([...getters.employees(), new Employee(employee)]);
  },
  editEmployee(data) {
    const employee = getters.selectedEmployees()[0];
    employee.updateValues(data);
  },
  deleteEmployee() {
    setters.setEmployees(state.employees.filter((e) => !getters.selectedEmployees().includes(e)));
    setters.setSelectedEmployees([]);
  },
};

export default {
  getters,
  setters,
  methods,
};
