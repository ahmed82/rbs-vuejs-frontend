<template>
  <div class="actions-bar">
    <button
     class="button-bar--button edit"
     @click="$emit('action', 'edit')"
     :disabled="disabled">
      Edit
    </button>
    <button
     class="button-bar--button delete"
     @click="$emit('action', 'delete')"
     :disabled="disabled">
      Delete
    </button>
    <button
     class="button-bar--button add"
     @click="$emit('action', 'add')"
     :disabled="!disabled">
      Add
    </button>
  </div>
</template>
<script>
export default {
  name: 'ActionBar',
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style lang="scss">
  .actions-bar {
    display: flex;
    justify-content: flex-start;

    .button-bar--button  {
      margin: 10px;
      cursor: pointer;
      width: 75px;
      height: 30px;
      color: white;
      font-size: 14px;
      font-weight: bold;
      border: none;

      &.add {
        background-color: green;
      }
      &.delete {
        background-color: red;
      }
      &.edit {
        background-color: blue;
      }
            &:disabled {
        background-color: lightgrey;
      }
    }
  }

</style>
