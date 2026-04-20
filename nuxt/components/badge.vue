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
<style lang="scss">
.badge {
  &.badge--normal {
    display: inline-flex;
    align-items: center;
    padding: spacing(0) spacing(3);
    text-align: left;
    border-radius: 0;
    transition: none;
  }

  &.badge--overlapping {
    // TODO add inverting css property
    position: relative;
    padding-left: 0;

    &::before {
      @include shadow('super-light');

      content: '';
      display: block;
      height: 100%;
      position: absolute;
      right: 0;
      background-color: inherit;
      width: 50vw;
      z-index: 0;
    }
  }

  &.badge--uppercase {
    .badge__text {
      text-transform: uppercase;
    }
  }
}

.badge__text {
  position: relative;
  display: inline-block;
  z-index: 1;

  + .badge__icon {
    margin-left: spacing(4);
  }
}

.badge__icon {
  display: inline-flex;
}
</style>
