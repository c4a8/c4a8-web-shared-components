<template>
  <div class="countdown">
    <flip-unit v-if="timeLeft.months" :value="timeLeft.months" />
    <flip-unit v-if="timeLeft.days" :value="timeLeft.days" />
    <flip-unit v-if="timeLeft.hours" :value="timeLeft.hours.toString().padStart(2, '0')" />
    <flip-unit v-if="timeLeft.minutes" :value="timeLeft.minutes.toString().padStart(2, '0')" />
    <flip-unit v-if="timeLeft.seconds" :value="timeLeft.seconds.toString().padStart(2, '0')" />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from "vue"

const props = defineProps({
  targetDate: {
    type: [String, Date],
    required: true,
  }
})

const timeLeft = ref({
  months: 0,
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
})

let intervalId = null

function calculateTimeLeft(target) {
  const now = new Date()
  const end = new Date(target)
  let diff = end - now

  if (diff <= 0) {
    return { months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 }
  }


  let months = (end.getFullYear() - now.getFullYear()) * 12 + (end.getMonth() - now.getMonth())
  let monthStart = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes(), now.getSeconds())
  let monthEnd = new Date(monthStart)
  monthEnd.setMonth(monthEnd.getMonth() + months)
  if (monthEnd > end) {
    months--
    monthEnd.setMonth(monthEnd.getMonth() - 1)
  }

  diff = end - monthEnd
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  diff -= days * (1000 * 60 * 60 * 24)
  const hours = Math.floor(diff / (1000 * 60 * 60))
  diff -= hours * (1000 * 60 * 60)
  const minutes = Math.floor(diff / (1000 * 60))
  diff -= minutes * (1000 * 60)
  const seconds = Math.floor(diff / 1000)

  return { months, days, hours, minutes, seconds }
}

function updateCountdown() {
  timeLeft.value = calculateTimeLeft(props.targetDate)
}

onMounted(() => {
  updateCountdown()
  intervalId = setInterval(updateCountdown, 1000)
})

onUnmounted(() => {
  clearInterval(intervalId)
})

watch(() => props.targetDate, () => {
  updateCountdown()
})
</script>

<style>
.countdown {
  display: flex;
  justify-content: center;
}
</style>
