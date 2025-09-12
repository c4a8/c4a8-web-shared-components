<template>
  <div class="countdown">
    <flip-unit class="flip-unit"
      v-for="(unit, idx) in [
        { value: timeLeft.days, label: 'D' },
        { value: timeLeft.hours, label: 'H' },
        { value: timeLeft.minutes, label: 'M' },
        { value: timeLeft.seconds, label: 'S' }
      ]"
      :key="unit.label"
      :value="unit.value.toString().padStart(2, '0')"
      :label="unit.label"
      :bgColor="bgColor"
      :fontColor="fontColor"

    />
  </div>
</template>

<script>
export default {
  name: 'countdown',
  props: {
    targetDate: {
      type: [String, Date],
      required: true,
    },
    bgColor: {
      type: String,
      required: false,
      default: 'var(--color-yellow)'
    },
    fontColor: {
      type: String,
      required: false,
      default: 'var(--color-black)'
    }
  },
  data() {
    return {
      timeLeft: {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      },
      intervalId: null, 
    }
  },
  methods: {
    calculateTimeLeft(target) {
      const now = new Date()
      const end = new Date(target)
      let diff = end - now

      if (diff <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 }
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24))
      diff -= days * (1000 * 60 * 60 * 24)
      const hours = Math.floor(diff / (1000 * 60 * 60))
      diff -= hours * (1000 * 60 * 60)
      const minutes = Math.floor(diff / (1000 * 60))
      diff -= minutes * (1000 * 60)
      const seconds = Math.floor(diff / 1000)

      return { days, hours, minutes, seconds }
    },
    updateCountdown() {
      this.timeLeft = this.calculateTimeLeft(this.targetDate)
    },
  },
  mounted() {
    this.updateCountdown()
    this.intervalId = setInterval(this.updateCountdown, 1000)
  },
  beforeUnmount() {
    clearInterval(this.intervalId)
  },
  watch: {
    targetDate() {
      this.updateCountdown()
    },
  },
}
</script>
