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
  selectedEmployee: null,
});

export const getters = {
  employees() {
    return state.employees;
  },
  selectedEmployeeId() {
    return (state.selectedEmployee && state.selectedEmployee.id) || 0;
  },
  selectedEmployee() {
    return state.selectedEmployee;
  },
};

export const setters = {
  setEmployees(employees) {
    state.employees = employees;
  },
  setSelectedEmployee(employee) {
    state.selectedEmployee = employee;
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
  selectEmployee(id) {
    const employee = this.findEmployeeById(id);
    setters.setSelectedEmployee(employee);
  },
  async addEmployee(employee) {
    setters.setEmployees([...getters.employees(), new Employee(employee)]);
  },
  editEmployee(data) {
    state.selectedEmployee.updateValues(data);
  },
  deleteEmployee() {
    setters.setEmployees(state.employees.filter((e) => e.id !== getters.selectedEmployeeId()));
    setters.setSelectedEmployee(null);
  },
};

export default {
  getters,
  setters,
  methods,
};
