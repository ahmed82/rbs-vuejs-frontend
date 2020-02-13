/* eslint-disable no-underscore-dangle */
export default class Employee {
  constructor({
    id, firstname, lastname, address, phone,
  }) {
    this.id = id || new Date().getTime();
    this.firstname = firstname;
    this.lastname = lastname;
    this.address = address;
    this.phone = phone;
  }

  setId(id) {
    this.id = id;
  }

  getId() {
    return this.id;
  }

  setFirstName(firstname) {
    this.firstname = firstname;
  }

  getFirstName() {
    return this.firstname;
  }

  getLastName() {
    return this.lastname;
  }

  setLastName(lastname) {
    this.lastname = lastname;
  }

  getAddress() {
    return this.address;
  }

  setAddress(address) {
    this.address = address;
  }

  getPhone() {
    return this.phone;
  }

  setPhone(phone) {
    this.phone = phone;
  }

  updateValues({
    firstname, lastname, address, phone,
  }) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.address = address;
    this.phone = phone;
  }

  static isEqual(emp1, emp2) {
    return emp1.id === emp2.id;
  }

  static compare(emp1, emp2) {
    return emp1.firstname === emp2.firstname
    && emp1.lastname === emp2.lastname
    && emp1.address === emp2.address
    && emp1.phone === emp2.phone;
  }

  static clone(emp) {
    console.log('emp', emp);
    return new Employee({
      id: emp.id,
      firstname: emp.firstname,
      lastname: emp.lastname,
      address: emp.address,
      phone: emp.phone,
    });
  }
}
