<template>
  <div
    class="event-list container"
    :class="{
      'event-list--overlap': overlap,
      'is-sticky-scroller': sticky,
      [spacing]: true,
    }"
  >
    <div class="event-list__row row col-lg-12">
      <template v-for="(teaserProps, i) in mergedTeasers" :key="i">
        <event-teaser v-bind="teaserProps" />
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EventList',
  props: {
    list: {
      type: Array,
      required: true,
    },
    overlap: {
      type: Boolean,
      default: false,
    },
    settings: {
      type: Array,
      default: () => [],
    },
    sticky: {
      type: Boolean,
      default: false,
    },
    spacing: {
      type: String,
      default: 'space-bottom-3',
    },
  },
  computed: {
    mergedTeasers() {
      let pointer = 0;

      const result = [];

      this.list?.forEach((event, i) => {
        const forloopIndex = i + 1;

        let currentSetting = this.settings[pointer] || {};
        let variant = event.variant || currentSetting.variant;

        if (currentSetting.teaser) {
          const extraTeaserProps = this.getTeaserProps(currentSetting.teaser, {}, variant, forloopIndex);

          result.push(extraTeaserProps);

          pointer++;

          currentSetting = this.settings[pointer] || {};
          variant = event.variant || currentSetting.variant;
        }

        const eventTeaserProps = this.getTeaserProps(event, event, variant, forloopIndex);

        result.push(eventTeaserProps);

        pointer++;
      });

      return result;
    },
  },
  methods: {
    getTeaserProps(teaserData, event, variant, forloopIndex) {
      let merged = {
        ...event,
        ...teaserData,
      };

      merged.variant = variant || event.variant;
      merged.index = forloopIndex;

      return merged;
    },
  },
};
</script>
<style>
.event-list {
  z-index: 200;
  position: relative;
}
.event-list.event-list--overlap {
  margin-top: -2.5rem;
}
@media (min-width: 992px) {
  .event-list.event-list--overlap {
    margin-top: -10rem;
  }
}

.event-list__row {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  column-gap: 1.25rem;
  width: calc(100% + 2 * 1rem);
}
.event-list__row > * {
  margin-bottom: 1.25rem;
}
.event-list__row > *[data-utility-animation-step] {
  --utility-animation-distance: 15%;
}
.event-list__row > *[data-utility-animation-step].is-starting {
  animation-delay: calc(var(--utility-animation-index) * 100ms + 0ms);
  animation-duration: 0.8s;
}
@media (min-width: 992px) {
  .event-list__row {
    width: 100%;
  }
}
</style>
