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
<style lang="scss">
.event-list {
  @include z-index;

  position: relative;

  &.event-list--overlap {
    margin-top: spacing($size: 10, $negative: true);

    @include media-breakpoint-up(lg) {
      margin-top: spacing($size: 40, $negative: true);
    }
  }
}

.event-list__row {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  column-gap: spacing(5);
  width: calc(100% + (2 * #{$header-nav-link-padding-x}));

  > * {
    @include utility-animation-options($distance: 15%, $delay: 100ms, $duration: 0.8s, $selector: '&');

    margin-bottom: spacing(5);
  }

  @include media-breakpoint-up(lg) {
    width: 100%;
  }
}
</style>
