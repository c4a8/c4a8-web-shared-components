<template>
  <div>
    <div class="flip-unit-container h1" :style="style">
      <div class="upper-card">
        <div>{{ next }}</div>
      </div>
      <div class="lower-card">
        <div class="lower_num">{{ current }}</div>
      </div>
      <div class="flip-card first" :class="{ animate: isFlipping }">
        <div class="upper_num">{{ current }}</div>
      </div>
      <div class="flip-card second" :class="{ animate: isFlipping }">
        <span>{{ next }}</span>
      </div>
    </div>
    <div class="label font-size-4">{{ label }}</div>
  </div>
</template>

<script>
export default {
  name: 'FlipUnit',
  props: {
    value: {
      type: [String, Number],
      required: true,
    },
    label: {
      type: String,
      required: false,
    },
    bgColor: {
      type: String,
      required: false,
    },
    fontColor: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      current: this.value,
      next: this.value,
      isFlipping: false,
    };
  },
  watch: {
    value(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.next = newVal;
        this.isFlipping = true;

        setTimeout(() => {
          this.current = newVal;
          this.isFlipping = false;
        }, 600);
      }
    },
  },
  computed: {
    color() {
      return this.bgColor ? this.bgColor : null;
    },
    style() {
      return {
        ...(this.bgColor ? { '--flip-unit-background-color': this.bgColor } : {}),
        ...(this.fontColor ? { '--flip-unit-font-color': this.fontColor } : {}),
      };
    },
  },
};
</script>
<style lang="scss">
.flip-unit {
  margin-right: 0.5rem;
  margin-left: 0.5rem;
}

.flip-unit-container {
  --flip-unit-background-color: var(--color-yellow);
  --flip-unit-font-color: var(--color-black);

  perspective: 1000px;
  font-weight: bold;
}

.upper-card,
.lower-card,
.flip-card.first,
.flip-card.second {
  background: var(--flip-unit-background-color);
  color: var(--flip-unit-font-color);
}

.upper-card {
  height: auto;
  border-top-left-radius: 0.1em;
  border-top-right-radius: 0.1em;
}

.lower-card {
  border-bottom-left-radius: 0.1em;
  border-bottom-right-radius: 0.1em;
}

.flip-card {
  position: absolute;
  backface-visibility: hidden;
}

.flip-card.first {
  top: 0;
  transform-origin: bottom;
  border-top-left-radius: 10px;
  border-top-right-radius: 15px;
}

.flip-card.second {
  bottom: 0;
  transform-origin: top;
  transform: rotateX(180deg);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

.flip-card.animate.first {
  animation: flipTop 0.6s forwards;
}

.flip-card.animate.second {
  animation: flipBottom 0.6s forwards;
}

.upper-card,
.flip-card.first {
  overflow: hidden;
  padding: 0.8em 0.25em 0 0.25em;
  border-bottom: 0.1rem solid #fff;
  line-height: 0;
}

.lower-card,
.flip-card.second {
  overflow: hidden;
  padding: 0 0.25em 0.8em 0.25em;
  border-top: 0.1rem solid #fff;
  line-height: 0;
}

.label {
  text-align: center;
  color: #777;
}

@keyframes flipTop {
  0% {
    transform: rotateX(0deg);
  }

  100% {
    transform: rotateX(-180deg);
  }
}

@keyframes flipBottom {
  0% {
    transform: rotateX(180deg);
  }

  100% {
    transform: rotateX(0deg);
  }
}
</style>
