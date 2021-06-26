<template>
  <div>{{ number }}</div>
</template>

<script>
import EventBus from '@/EventBus.js'

export default {
  data() {
    return {
      number: null,
    }
  },
  created() {
    EventBus.$on('buttonClicked', (number) => (this.number = number))
  },
}
</script>
