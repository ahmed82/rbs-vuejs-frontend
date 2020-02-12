<template>
  <form class="employee-form">
    <label>
      <div class="label-text">First Name</div>
      <input type="text" v-model="form.firstName">
    </label>
    <label>
      <div class="label-text">Last Name</div>
      <input type="text" v-model="form.lastName">
    </label>
    <label>
      <div class="label-text">Address</div>
      <input type="text" v-model="form.address">
    </label>
    <label>
      <div class="label-text">Phone</div>
      <input type="text" v-model="form.phone">
    </label>
    <hr>
    <button
      @click.prevent="$emit('save', form)"
      :disabled="!isFormValid"
    >
      {{ buttonText }}
    </button>
  </form>
</template>
<script>
export default {
  name: 'EmployeeForm',
  props: {
    employee: {
      type: Object,
      default: () => ({}),
    },
    buttonText: {
      type: String,
      default: 'Submit',
    },
  },
  data() {
    return {
      form: { ...this.employee },
    };
  },
  computed: {
    isFormValid() {
      return this.form.firstName && this.form.lastName && this.form.address && this.form.phone;
    },
  },
};
</script>
<style lang="scss" scoped>
  .employee-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    label {
      padding: 5px;
    }
    .label-text {
      display: inline-block;
      width: 100px;
      padding: 5px;
      text-align: justify;
    }
    input {
      height: 30px;
      width: 200px;
      border: 2px solid darkgrey;
      border-radius: 2px;
      padding-left: 5px;
    }
    button {
      cursor: pointer;
      width: 100px;
      height: 40px;
      color: white;
      font-size: 16px;
      font-weight: bold;
      border: none;
      background-color: green;
      &:disabled {
        background-color: lightgrey;
      }
    }
  }

</style>
