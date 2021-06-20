<template>
  <div class="inputWrapper">
    <label :for="label">{{ label }}</label>
    <input
      :value="value"
      :id="label"
      :placeholder="placeholder"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: {
    value: String,
    label: String,
    placeholder: String,
  },
}
</script>

<style lang="scss" scoped>
.inputWrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  input {
    margin-top: 5px;
    font-size: 18px;
    border: 2px solid green;
    padding: 5px 20px;
    border-radius: 10px;
  }
  label {
    font-style: italic;
  }
}
</style>
