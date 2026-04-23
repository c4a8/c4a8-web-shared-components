<template>
  <wrapper :class="classList" ref="root">
    <headline class="event-overview__headline" :text="headline" :level="headlineLevel" v-if="headline" />
    <transition-group name="event-overview__item">
      <SharedContentList :data-list="eventsValue" :query="query" v-slot="{ list, strategy }" :key="0">
        <markdown-files :list="list" v-slot="{ files }" :sort="sort" :strategy="strategy" :limit="maxLimitValue">
          <template v-if="updateFiles(files)">
            <template v-for="(event, index) in files" :key="index">
              <div :class="{ 'is-visible': isVisible(index), 'event-overview__item': true }">
                <div
                  class="fade-in-bottom"
                  data-utility-animation-step="1"
                  :style="{ '--utility-animation-index': index + 1 }"
                >
                  <event
                    :key="event.url"
                    v-bind="updatedEvent(event)"
                    :bgColor="bgColor"
                    :color="color"
                    :timeColor="timeColor"
                  />
                </div>
              </div>
            </template>
          </template>
        </markdown-files>
      </SharedContentList>
    </transition-group>

    <div
      class="event-overview__more font-size-1 bold fade-in-bottom"
      v-show="hasMore"
      @click="handleShowMore"
      data-utility-animation-step="1"
      :style="{ '--utility-animation-index': lastIndex }"
    >
      {{ $t('moreEvents') }}
    </div>
  </wrapper>
</template>
<script>
import Tools from '../utils/tools.js';
import UtilityAnimation from '../utils/utility-animation.js';

export default {
  tagName: 'event-overview',
  data() {
    return {
      translationData: null,
      defaultLimit: 3,
      maxLimitDefault: 6,
      showMore: false,
      filesValue: [],
    };
  },
  computed: {
    classList() {
      return [
        'event-overview has-no-row is-component utility-animation vue-component',
        Tools.isTrue(this.overlap) ? 'event-overview--overlap' : null,
      ];
    },
    lastIndex() {
      const radix = 10;

      return parseInt(this.limitValue, radix) + 1;
    },
    limitValue() {
      return this.limit ? this.limit : this.defaultLimit;
    },
    maxLimitValue() {
      return this.maxLimit > 0 ? this.maxLimit : this.maxLimitDefault;
    },
    eventsValue() {
      if (!this.events) return [];

      return this.events.slice(0, this.maxLimitValue) || [];
    },
    hasMore() {
      return this.showMore ? false : this.filesValue.length > this.limitValue;
    },
    query() {
      let query = {};

      if (this.order && Array.isArray(this.order)) {
        query.where = {
          eventid: { IN: this.order },
        };
      }

      query.path = '/events';

      return query;
    },
    sort() {
      return this.sortBy || { moment: 1 };
    },
  },
  mounted() {
    UtilityAnimation.init([this.$refs.root]);
  },
  methods: {
    updatedEvent(event) {
      if (event.cta) {
        event.url = event.cta.href;
        event.external = event.cta.external || false;
      } else {
        event.external = false;
      }

      return event;
    },
    isVisible(index) {
      return this.showMore || index + 1 <= this.limitValue;
    },
    handleShowMore() {
      if (this.moreUrl) document.location.href = this.moreUrl;

      this.showMore = true;
    },
    updateFiles(files) {
      if (!files) return;

      this.filesValue = files;

      return true;
    },
  },
  props: {
    events: Array,
    headline: String,
    headlineLevel: String,
    overlap: Boolean,
    limit: Number,
    maxLimit: Number,
    moreUrl: String,
    order: Array,
    sortBy: Object,
    bgColor: String,
    color: String,
    timeColor: String,
  },
};
</script>
<style lang="scss" scoped>
.event-overview {
  --event-overview-vertical-padding: #{spacing(6)};
  --event-overview-margin-bottom: #{spacing(6)};
  --event-overview-more-color: var(--color-copy);
  --event-overview-more-background: var(--color-copy-light);

  display: flex;
  flex-direction: column;
  padding-top: var(--event-overview-vertical-padding);
  padding-bottom: var(--event-overview-vertical-padding);
  margin-bottom: spacing(10);

  @include media-breakpoint-up(lg) {
    --event-overview-vertical-padding: spacing(12);
  }

  [data-utility-animation-step] {
    @include utility-animation-options($distance: 15%, $delay: 200ms, $duration: 0.8s, $selector: '&');
  }

  &.event-overview--overlap {
    --event-overview-vertical-padding: 0;

    @include z-index;

    position: relative;
    margin-top: spacing($size: 10, $negative: true);

    .event-overview__headline {
      display: none;
    }

    @include media-breakpoint-up(lg) {
      margin-top: spacing($size: 30, $negative: true);
    }
  }

  .event-overview__headline {
    margin-bottom: spacing(6);
  }
}

.event-overview__item {
  opacity: 1;
  height: auto;
  margin-bottom: var(--event-overview-margin-bottom);
  transition:
    opacity 0.5s ease-in-out,
    height 0.5s ease-in-out;

  &:not(.is-visible) {
    @include is-invisible;
  }
}

.event-overview__more {
  cursor: pointer;
  border: 2px solid var(--event-overview-more-color);
  color: var(--event-overview-more-color);
  background-color: var(--event-overview-more-background);
  text-align: center;
  padding: spacing(3);
  margin-top: spacing(6);
  align-self: center;
  width: 100%;

  &:hover {
    --event-overview-more-color: var(--color-copy-light);
    --event-overview-more-background: var(--color-copy);
  }

  @include media-breakpoint-up(lg) {
    width: 60%;
  }
}
</style>
