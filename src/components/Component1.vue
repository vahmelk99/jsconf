<template>
  <button @click="emitSomeEvent">Generate Random Number</button>
</template>

<script>
import EventBus from '@/EventBus.js'
export default {
  methods: {
    emitSomeEvent() {
      //Some stuff
      EventBus.$emit('buttonClicked', Math.floor(Math.random() * 101))
    },
  },
}
</script>

<style lang="scss" scoped>
button {
  border: 1px solid white;
  background-color: transparent;
  cursor: pointer;
  padding: 5px;
  border-radius: 5px;
  user-select: none;
  margin-bottom: 10px;
}
</style>
