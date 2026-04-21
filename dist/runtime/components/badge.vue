<template>
  <div :class="classList" :style="style">
    <div class="badge__text">{{ text }}</div>
    <div v-if="icon" class="badge__icon">
      <icon :icon="icon" color="var(--color-badge-icon)" size="medium" />
    </div>
  </div>
</template>
<script>
export default {
  tagName: 'badge',
  props: {
    text: String,
    overlapping: Boolean,
    icon: String,
    color: {
      type: String,
      default: 'var(--color-badge-background)',
    },
    textColor: {
      type: String,
      default: 'var(--color-badge-icon)',
    },
    uppercase: Boolean,
    classes: String,
  },
  computed: {
    classList() {
      return [
        'badge',
        'badge--normal',
        'font-size-1',
        'normal',
        { 'badge--overlapping': this.overlapping },
        { 'badge--uppercase': this.uppercase },
        { 'badge--icon': this.icon && this.icon !== '' },
        this.classes,
      ];
    },
    style() {
      return {
        backgroundColor: this.color,
        color: this.textColor,
      };
    },
  },
};
</script>
<style>
.badge.badge--normal {
  display: inline-flex;
  align-items: center;
  padding: 0rem 0.75rem;
  text-align: left;
  border-radius: 0;
  transition: none;
}
.badge.badge--overlapping {
  position: relative;
  padding-left: 0;
}
.badge.badge--overlapping::before {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  content: "";
  display: block;
  height: 100%;
  position: absolute;
  right: 0;
  background-color: inherit;
  width: 50vw;
  z-index: 0;
}
.badge.badge--uppercase .badge__text {
  text-transform: uppercase;
}

.badge__text {
  position: relative;
  display: inline-block;
  z-index: 1;
}
.badge__text + .badge__icon {
  margin-left: 1rem;
}

.badge__icon {
  display: inline-flex;
}
</style>
